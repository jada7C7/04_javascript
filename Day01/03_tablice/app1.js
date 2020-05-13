// zad1 
/*Napisz funkcję ```printTable(array)``` która przyjmuje tylko jeden parametr - tablice. Następnie przy pomocy pętli for przeiteruj (przejdź) po każdym elemencie i wypisz go w konsoli.
Pamiętaj o sprawdzeniu czy przekazany argument jest tablicą!

Następnie zastąp swoją funkcje metodą ```foreach```.*/

// sposób 1 
/*function printTable(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

let tab = [2, 5, 6, 7, 9, 234, 56];
let tabTwo = [4, 6, 8, 92, 43];
let tabThree = [4, 62, 43, 92, 43];

printTable(tab);
printTable(tabTwo);
printTable(tabThree);*/

//sposób 2

const array1 = [1,3,42,5,83,9];

array1.forEach(element => console.log(element));

