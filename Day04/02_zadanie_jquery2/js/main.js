/*
 Otwórz projekt ‘zadanie-jquery2’ w WebStormie.
 Za pomocą jQuery:
 a) Spróbuj wyszukać za pomocą jQuery wszystkie linki i ustawić im czerwony kolor za pomocą funkcji css().
 b) Zmodyfikuj kod html i jQuery, aby kolor czerwony miały linki tylko z menu
 c) Ustaw klasę .redLinks w pliku styli (.redLinks { color: red;} ) i za pomocą addClass nadaj ją elementom li w menu (Zodyfikuj punkt a))
 PAMIĘTAJ! – o sprawdzeniu czy wykonujesz operacje na DOM dopiero po załadowaniu strony.

 */


$(function () {
    // a)
    $("a").css('color', 'red');

    // b)

    $(":not(a[href='#'])").css('color', '');


    // c)
    $("a[href='#']").css('color', '');
    $("a[href='#']").addClass('redLinks');


    /*
     Otwórz projekt ‘zadanie-jquery2’. Po kliknięciu w element menu zmień kolor klikniętego elementu.
     Tylko klikniętego, nie wszystkie.
     */

    $("a[href='#']").on('click', function (x) {
        x.preventDefault();
        $(this).css('color', 'blue');
    });


    /*

     Ustaw każdy z 3 button-ów pod inną zmienną. Następnie:
     - dla elementu pierwszego ustaw event click, który  po kliknięciu  wyświetli w consoli napis (kliknięto mnie)
     - dla elementu drugiego ustaw event click, który po kliknięciu wyświetli w consoli napis (kliknięto mnie,
     ale już się drugi raz nie dam kliknąć)
     - dla trzeciego wywołaj metodę off, która odczepi wszystkie eventy z poprzednich butonów.

     */


    var buttony = $("button");
    var button1 = buttony[0];
    var button2 = buttony[1];
    var button3 = buttony[2];


    $(button1).on('click', function () {
        console.log('kliknieto mnie');
    })

    $(button2).one('click', function () {
        console.log('kliknieto mnie');
    })

    $(button3).on('click', function () {
        $(buttony).off('click');
    })

    /*
     Po kliknięciu w element ‘p’ wywołaj funkcję, która wyświetli napis w konsoli (kliknięto mnie).
     Spróbuj wywołać tą samą funkcję, którą wywołuje kliknięcie buttona pierwszego z poprzedniego zadania.

     */

    $("p").on('click', function () {
        $(button1).click();
    })

    /*
     Po najechaniu myszką na element w menu, wypisz tekst „Hura” w consoli.
     */

    $("a[href='#']").on('mouseenter', function () {
        console.log("Hura");
    });


    /*
     W projekcie ‘zadanie-jquery2’ stwórz funkcję, która będzie obsługiwała następującą sytuację  po najechaniu
     na przycisk Choose Plan:
     -  nada tło w kolorze szarym całemu elementowi PlanPricing
     -  powiększy czcionkę TYLKO w opisie planu,
     -  pokaże element z klasą price (który ma domyślnie ustawiony display: none)
     (Wykorzystaj znane funkcje do animacji)
     */


    $("a[href='#Signup']").on('mouseenter', function () {
        $(this).closest(".PlanPricing").css('background-color',"gray");
        $(this).parent().prev().css('font-size', 'large');
        $(this).closest(".PlanPricing").children().children().removeClass('price');
    });


});
