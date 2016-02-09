/*
 Na stronie jest proste menu. Zarówno kod HTML, jak i CSS jest już do niego przygotowany.
 Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów.
 1. Wyszukaj element ul i dodaj mu klasę menu.
 2. Wyszukaj wszystkie elementy li i dodaj im klasę menuElement (użyj do tego pętli).
 Uważaj, żeby nie wykasować klasy selected.
 3. Zauważ, że jeden z elementów ma czerwony kolor tekstu - jest to spowodowane tym, że ma klasę error.
 Zabierz mu ją (najlepiej, jeżeli zabierzesz tę klasę wszystkim elementom, które ją mają).
 */

document.addEventListener("DOMContentLoaded", function () {

    var ulElement = document.querySelector(".ex3 ul");
    console.log(ulElement);
    ulElement.classList.add("menu");

    var liElements = ulElement.querySelectorAll("li");
    for (i = 0; i < liElements.length; i++) {
        liElements[i].classList.add("menuElement");
    }
    console.log(liElements);


    /*    var liElement = [];
     liElement.push(document.querySelector(".error"));
     liElement.push(document.querySelector(".error+li"));
     liElement.push(document.querySelector(".error+li+li"));
     liElement.push(document.querySelector(".error+li+li+li"));
     for (i = 0; i < liElement.length; i++){
     liElement[i].classList.add("menuElement");
     }
     console.log(liElement);
     */


    var liElementError = document.querySelector(".error");
    console.log(liElementError);
    liElementError.classList.remove("error");

});
