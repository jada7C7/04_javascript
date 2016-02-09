/*
 Wypisz w konsoli wartości innerHTML i outerHTML dla zmiennej blocks. Napisz w komentarzu, czym się od siebie różnią.
 Nastaw wartość innerHTML na "Nowa wartość diva o klasie blocks". Przeanalizuj, jak zmienił się kod HTML strony.
 */


document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home"); // pierwszy obiekt o ID home
    var childElements = document.querySelector(".oferts").children; // tablica wszystkich dzieci pierwszego elementu o klasie oferts
    var banner = document.querySelector(".ban"); // obiekt pierwszego elementu o klasie ban
    var blocks = document.querySelectorAll(".blocks"); // tablica wszystkich elementów o klasie blocks



    for(var i = 0; i < blocks.length; i++){
        console.log(blocks[i].innerHTML);
        console.log(blocks[i].outerHTML);
        blocks[i].innerHTML='Nowa wartość diva o klasie blocks';

    }


});