/*
 Wyszukaj na stronie i zapisz do odpowiednio nazwanych zmiennych nastepujące elementy:
 1. Element o id home (na dwa sposoby),
 2. Pierwszy element li nie posiadający atrybutu data-direction,
 3. Pierwszy element o klasie block,
 Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiedni element. Pamiętaj, żeby używać funkcji,
 które wyszukują tylko jeden element.
 */

document.addEventListener("DOMContentLoaded", function () {
    var elementHome = document.getElementById("home");
    console.log(elementHome);

    var elementHome2 = document.querySelector("#home");
    console.log(elementHome2);

    var elementLi = document.querySelector("li:not([data-direction])");
    console.log(elementLi);

    var elementBlock = document.querySelector(".block");
    console.log(elementBlock);


});