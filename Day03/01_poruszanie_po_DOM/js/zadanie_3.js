/*
 W pliku znajdują się 3 listy (każda osadzona w elemencie div).
 Po najechaniu myszką na element div zmienic się mają kolory tła elementów jego listy. Odpowiednio:
 1. Pierwszy element w liście ma mieć kolor czerwony.
 2. Ostatni element w liście ma mieć kolor niebieski.
 3. Wszystkie inne elementy mają mieć kolor zielony.

 Rozwiązanie musi spełniać następujące założenia:
 1. Na wszystkie divy musi być założony ten sam event.
 2. Elementy listy mają być wyszukane w zależności od this.
 */

document.addEventListener('DOMContentLoaded', function () {
    var elementsAllDiv = document.querySelectorAll("div");
    for (var i = 0; i < elementsAllDiv.length; i++) {
        elementsAllDiv[i].addEventListener('mouseover', over);
    }
    function over(event) {
        for (var i = 1; i < this.firstElementChild.children.length-1; i++){
            this.firstElementChild.children[i].style.backgroundColor = "Green";
        }
        //this.firstElementChild.style.backgroundColor = "Green";
        this.firstElementChild.children[0].style.backgroundColor = "Red";
        this.firstElementChild.children[this.firstElementChild.children.length-1].style.backgroundColor = "Blue";
    }
});