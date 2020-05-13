
/*## Ćwiczenie 5
Napisz funkcję ```createMultiTable(number)```. 
Funkcja ta przyjmuje liczbę całkowitą. 
Funkcja ta ma zwrócić dwu wymiarową tablicę która
 w obu wymiarach ma podaną wielkość (tablicę możewsz wypełnić kolejnymi liczbami całkowitymi).*/


function createMultiTable(number) {
  for (let i = 0; i < number.length; i++) {
  a[i] = new Array;
  for (var j = 0; j < numberTwo; j++) {
    a[i][j] = "[" + i + "," + j + "]"
  }
  console.log(a[i][j]);
}
let numberOne=[3,5,6,6]
let numberTwo=[4.7,24,67]


createMultiTable(number);