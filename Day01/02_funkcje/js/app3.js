/*
 Napisz funkcję, która przyjmuje jako parametry dowolną ilość liczb i wyświetla większą z nich.
 Skożystaj z zmiennej arguments
 */

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(2, 3, 6));


function max() {
    var biggest = 0;
    var len = arguments.length;
    for (var i = 0; i < len; i++) {
        biggest = arguments[i] > biggest ? arguments[i] : biggest;
    }
    return biggest;
}


console.log(max(5, 87, 65, 43, 677, 8, 76, 5));