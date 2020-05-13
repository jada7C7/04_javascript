// zad3

//(1 sposób)

/*
let arg=[7,9,29,34,92,54,62,85]
function showLargernumber(tab) {
    console.log(Math.max(...tab));
}
showLargernumber(arg);

showLargernumber([1,2,5]);
showLargernumber([12,11,10]);
var tab = [55,67,655];
showLargernumber(tab);

*/

//(2 sposób)

function showLargernumber(mtab) {
    let max = mtab[0]
    for (let i = 0; i < mtab.length; i++) {
        if (max <= mtab[i]) {
            max = mtab[i]
        }
    }
    console.log(max);
}
let arg = [7, 9, 29, 34, 92, 54, 62, 85];
showLargernumber(arg);
showLargernumber([1, 2, 5]);
showLargernumber([12, 11, 10]);
var tab = [55, 67, 655];
showLargernumber(tab);


