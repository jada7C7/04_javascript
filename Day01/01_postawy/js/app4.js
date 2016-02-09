/*
 Zajrzyj do pliku cwiczenie4.js - jest tam przykładowa funkcja która tworzy tablicę z liczbami.
 Niestety nie działą ona dobrze - znajdź błąd i go napraw tak żeby funkcja działała.
 */

function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));