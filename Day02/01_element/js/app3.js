/*
 Wypisz w konsoli id elementu kryjącego się w zmiennej homeElement.
 */

document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home"); // pierwszy obiekt o ID home
    var childElements = document.querySelector(".oferts").children; // tablica wszystkich dzieci pierwszego elementu o klasie oferts
    var banner = document.querySelector(".ban"); // obiekt pierwszego elementu o klasie ban
    var blocks = document.querySelectorAll(".blocks"); // tablica wszystkich elementów o klasie blocks



    console.log(homeElement.id);


});