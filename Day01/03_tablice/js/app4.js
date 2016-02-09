/*
    Napisz funkcję reverseSorted(array).
    Funkcja ta ma przyjmować jako argument jedną zmienną - tablicę.
    Funkcja ma zwracać tą tablicę posortowaną, a następnie odwróconą. Użyj metod wbudowanych dla tablicy.
*/


function reverseSorted(array){
    if (Array.isArray(array)) {
        array.sort();
        array.reverse();
        return array;
    } else {
        console.log("podany argument nie jest tablicą")
    }
}


var tablica = [2, 10, 6, 8];

reverseSorted(tablica);
