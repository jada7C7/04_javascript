$(function () {

    $('#pobieranieCzasu').on('click', function () {

        $.ajax({

            url: 'http://date.jsontest.com/',
            data: {},
            type: "GET",
            dataType: "json",
            success: function (result) {
                console.log('udalo sie');
                console.log(result);
                $('#aktualnyCzas').html(result.time);
                $('#timestamp').html(result.milliseconds_since_epoch);
                $('#date').html(result.date);
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

