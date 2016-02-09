/*
 Napisz dwie funkcje add(array) i multiply(array).
 Obie mają przyjmować tylko jeden argument - tablicę.
 Następnie funkcja add ma zsumować wszystkie liczby znajdujące się w tej tablicy (przy pomocy pętli for),
 a funkcja `multiply ma pomnożyć wszystkie liczby znajdujące się w tablicy (przy pomocy pętli for).
 Pamiętaj o sprawdzeniu czy przekazany argument jest tablicą!
 */

function add(array) {
    if (Array.isArray(array)) {
        var result = 0;
        array.forEach(function (el) {
            result += el;
        });
        return result;
    } else {
        console.log("podany argument nie jest tablicą")
    }
}

function multiply(array) {
    if (Array.isArray(array)) {
        var result = 1;
        array.forEach(function (el) {
            result *= el;
        });
        return result;
    } else {
        console.log("podany argument nie jest tablicą")
    }
}

var tablica = [2, 4, 6, 8];


console.log(add(tablica));
console.log(multiply(tablica));