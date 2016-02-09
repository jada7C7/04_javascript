/*
 Stwórz tablice z napisami. Potem używając odpowiedniej metody iteracyjnej sprawdź czy napisy w tej tablicy
 spełniają następujące warunki: 1. Mają co najmniej 10 znaków 2. Mają co najmniej 1 literę 3. Nie zawierają spacji
 Utwórz 2 tablice: jedną z napisami które spełniają te zasady, drugą z wartościami typu boolean dla każdego napisu
 (true jeżeli spełnione są warunki, false jeżeli nie).
 */

function checkArray(array) {
    if (Array.isArray(array)) {
        var correctKeys = [];
        var list = [];

        array.forEach(function (el, ind) {
            if (el.length >= 10 && el.toLowerCase() != el.toUpperCase() && el.indexOf(" ") == -1) {
                correctKeys.push(el);
                list[el] = true;
            } else {
                list[el] = false;
            }
        });
        console.log("poprawne elementy");
        console.log(correctKeys);
        console.log("tablica true / false");
        console.log(list);
    }
    else {
        console.log("podany argument nie jest tablicą");
    }
}


var tablica = ["ertgsfgsfdg098", "asd f", "sdfgsadsff9asf8ga", 8, "(*&^%^&*()&^%*("];

checkArray(tablica);