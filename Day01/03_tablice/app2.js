// zad1 
/*Napisz dwie funkcje ```add(array)``` i ```multiply(array)```.
Obie mają przyjmować tylko jeden argument - tablicę. 
Następnie funkcja ```add``` ma zsumować wszystkie liczby
znajdujące się w tej tablicy (przy pomocy pętli for), 
a funkcja ```multiply`` ma pomnożyć wszystkie liczby 
znajdujące się w tablicy (przy pomocy pętli for).
Pamiętaj o sprawdzeniu czy przekazany argument jest tablicą!*/


// sposób 1 
/*function add(array) {
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum)
}
let tab = [2, 5, 6];
add(tab);*/



//multiply

//I sposob

function multiply(array) {
   let a=1;
   for (let i = 0; i < array.length; i++) {
     a = a * array[i];
     //a *= array[i];
  }
  return a;
}

multiply([0,1,2]);
multiply([10,1,2]);

let wynik = multiply([1,1,2,2]);
console.log(wynik);

//II sposob

/*function multiply(array) {
  let a=1;
  for (let i = 0; i < array.length; i++) {
    a = a * array[i];
    //a *= array[i];
 }
console.log(a);
}

let tab = [2, 5, 6, 2];
multiply(tab);

multiply([0,1,2]);
multiply([10,1,2]);*/
//




