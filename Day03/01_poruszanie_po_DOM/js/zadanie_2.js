/*
 W pliku znajduje się kilka przycisków (są to odpowiednio postylowane linki).
 Po klikniękiu w którykolwiek z nich jego rodzic ma zmienić kolor tła (na losowy).
 Rozwiązanie musi spełniać następujące założenia:
 1. Na wszystkie przyciski musi być założony ten sam event.
 2. Rodzic ma być wyszukiwany zależnie od położenia this.
 3. Kolor tła musi być losowy.
 Hint: Żeby uzyskać losowy kolor, użyj poniższego kodu:

 var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

 */


document.addEventListener('DOMContentLoaded', function () {
    var elementsAllA = document.querySelectorAll("a");
    for (var i = 0; i < elementsAllA.length; i++) {
        elementsAllA[i].addEventListener('click', clickButton);
    }
    function clickButton(event) {
        //var rodzic = this.parentElement; // this odnosi się do elementu który wywołał event
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.parentElement.style.backgroundColor = randomColor;
    }
});