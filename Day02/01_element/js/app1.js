/*
 Przeanalizuj kod HTML i JavaScript tego zadania. Wypisz w konsoli wszystkie wcześniej przygotowane zmienne,
 ich typy i klasy. W przypadku tablic przeiteruj (używając np. pętli for) wypisując typ i klasę dla każdego elementu,
 który znajduje się w tablicy.
 */

document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home"); // pierwszy obiekt o ID home
    var childElements = document.querySelector(".oferts").children; // tablica wszystkich dzieci pierwszego elementu o klasie oferts
    var banner = document.querySelector(".ban"); // obiekt pierwszego elementu o klasie ban
    var blocks = document.querySelectorAll(".blocks"); // tablica wszystkich elementów o klasie blocks



    console.log (homeElement.classList);


    for(var i = 0; i < childElements.length; i++){
        console.log(childElements[i].classList);
    }


    console.log (banner.classList);


    for(var i = 0; i < blocks.length; i++){
        console.log(blocks[i].classList);
    }


});