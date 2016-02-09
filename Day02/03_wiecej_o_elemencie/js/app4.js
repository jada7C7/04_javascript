/*
 Dodaj do każdego elementu listy atrybut data-id przyjmujący kolejne liczby całkowite (zaczynając od 1).
 Rozwiąż to zadanie na dwa sposoby:
 1. Używając datasetu.
 2. Używając matody setAttribute.
 */


document.addEventListener("DOMContentLoaded", function () {


    var liAllElemnts = document.querySelectorAll(".ex4 li");
    for (var i = 0; i < liAllElemnts.length; i++) {
        liAllElemnts[i].dataset.id = i + 1;
    }
    console.log(liAllElemnts);


    for (var i = 0; i < liAllElemnts.length; i++) {
        liAllElemnts[i].setAttribute("data-id2", i + 1);
    }
    console.log(liAllElemnts);

});