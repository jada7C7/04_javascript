$(function () {

    $('#pobieranieCzasu').on('click', function () {

        $.ajax({

            url: 'api.php',
            data: {},
            type: "GET",
            dataType: "json",
            success: function (result) {
                console.log('udalo sie');
                console.log(result);
                $('#aktualnyCzas').html(result.czas);
                $('#timestamp').html(result.czasTimestamp);
                $('#date').html(result.losowaLicza);
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

