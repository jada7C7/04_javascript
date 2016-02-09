/*
 Napisz funkcję createMultiTable(number). Funkcja ta przyjmuje liczbę całkowitą. Funkcja ta ma zwrócić dwu wymiarową
 tablicę która w obu wymiarach ma podaną wielkość (tablicę możewsz wypełnić kolejnymi liczbami całkowitymi).
 */

function createMultiTable(number) {
    var t1 = [];
    var t2 = [];

    for (var j = 0; j < number; j++) {
        t1.push(j);
    }
    for (var i = 0; i < number; i++) {
        t2.push(t1);
    }
    console.log(t2);
}

createMultiTable(3)