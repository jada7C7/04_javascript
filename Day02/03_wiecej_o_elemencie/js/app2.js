/**
 Na stronie jest lista, w której musisz wpisać swoje imię i nazwisko, swój ulubiony kolor i potrawę.
 1. Wyszukaj wszystkie spany i zapisz je do odpowiednich zmiennych.
 2. Za pomocą innerHTML wypełnij w nich odpowiednie informacje.
 */

document.addEventListener("DOMContentLoaded", function () {

    var spanName = document.getElementById("name");
    spanName.innerHTML = "Arek Kulbacki";

    var spanColor = document.getElementById("fav_color");
    spanColor.innerHTML = "Niebieski";

    var spanMeal = document.getElementById("fav_meal");
    spanMeal.innerHTML = "Burger";


});