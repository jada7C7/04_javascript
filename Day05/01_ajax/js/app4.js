$(function () {

    $('#pobieranieCzasu').on('click', function () {
        var timeStampFromPage = parseInt($('#timestamp').html());

        var dataToSend = {};
        dataToSend.keyTimeStamp = timeStampFromPage;

        //var dataToSend = {keyTimeStamp: timeStampFromPage};

        $.ajax({

            url: 'api2.php',
            data: dataToSend,
            type: "POST",
            dataType: "json",
            success: function (result) {
                $('#aktualnyCzas').html(result.przeliczonaData);
            },
            error: function (xhr, status, errorThrown) {
                console.log('wystapil error');
                console.log(xhr);
                console.log(status);
                console.log(errorThrown);
            },
            complete: function (xhr, status) {
                console.log('zakonczono');
                console.log(xhr);
                console.log(status);
            }
        });
    });
});

