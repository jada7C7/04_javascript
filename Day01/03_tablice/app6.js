// sposób 1 
function print2Table(array) {
    for (let i = 0; i < tab.length; i++)
       tab[i] = new Array(tab.length)
    for (j = 0; j < tabTwo.length; j++) {
       array[i][j] = "[" + i + "," + j + "]"
    }
    console.log(array[i][j]);

}


let tab = [2, 5, 6, 7, 9, 234, 56];
let tabTwo = [4, 6, 8, 92, 43];
let tabThree = [4, 62, 43, 92, 43];

print2Table(tab);
print2Table(tabTwo);
print2Table(tabThree);

//sposób 2

/*const array1 = [1,3,42,5,83,9];

array1.forEach(element => console.log(element));*/
