/*## Ćwiczenie 4
Napisz funkcję ```reverseSorted(array)```. 
Funkcja ta ma przyjmować jako argument jedną zmienną - tablicę. 
Funkcja ma zwracać tą tablicę posortowaną, a następnie odwróconą.
Użyj metod wbudowanych dla tablicy.*/




function sortAndReverse(numbers){
  numbers.sort(function(a, b) {
    return a - b;
  });
  numbers.reverse();
  return numbers;
}

let a = sortAndReverse([4, 2, 5, 1, 3]); //  5,4,3,2,1
console.log(typeof(a));
let b = sortAndReverse([13,24,15]); // 24,15,13
let c = sortAndReverse([3,2,1]); // 3,2,1

console.log(a);
console.log(b);
console.log(c);

