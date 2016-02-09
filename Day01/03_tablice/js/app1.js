/*
 Napisz funkcję printTable(array) która przyjmuje tylko jeden parametr - tablice.
 Następnie przy pomocy pętli for przeiteruj (przejdź) po każdym elemencie i wypisz go w konsoli.
 Pamiętaj o sprawdzeniu czy przekazany argument jest tablicą!
 Następnie zastąp swoją funkcje metodą foreach.
 */


function printT(tablica) {
    if (Array.isArray(tablica)) {

        var indeks = 0;
        var dlugosc = tablica.length;
        for (var i = 0; i < dlugosc; i++) {
            console.log(tablica [i]);
        }
    } else {
        console.log("podany argument nie jest tablicą")
    }
}


function printTable(tablica) {
    if (Array.isArray(tablica)) {
        tablica.forEach(function (el) {
            console.log(el);
        });
    } else {
        console.log("podany argument nie jest tablicą")
    }
}

var tablica = ["pierwszy element", "drugi element", "trzeci element", "czwarty element"];


printTable(tablica);
printT(tablica);