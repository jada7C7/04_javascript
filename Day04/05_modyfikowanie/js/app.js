/*

 Otwórz zadanie http://jsfiddle.net/CodersLab/on9a2k7x/ , a następnie napisz funkcję, która:
 a)	Pobierze wartość wpisaną do inputa pierwszego
 b)	Pobierze id pierwszego elementu
 c)	Wstawi nową osobę do listy (na koniec), ustawiając jej wiek jako atrybut data
 d)	Po każdym wstawieniu elementu wywołaj funkcję, która będzie ustawiała dany kolor dla elementu li w następujący sposób:
 - zielony dla osób z przedziału ( > 15)
 - niebieski dla osób z przedziału ( 15 – 40 )
 - brązowy dla osób z przedziału ( < 40 )


 */


$(function () {

    $("input[type=submit]").on('click', function () {

        var newLi = $('<li>');
        var newAge = $('#age').val();

        newLi.attr('data-age', newAge);
        newLi.html($('#addUser').val());

        if (newAge < 15) {
            newLi.css("color", "green")
        } else if (newAge < 41) {
            newLi.css("color", "blue")
        } else {
            newLi.css("color", "brown")
        }
        $(".main").append(newLi);
    })

});