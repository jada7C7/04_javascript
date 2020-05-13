// zad2 

//(1 sposób)
/*function showLargernumber(numberOne, numberTwo) {
    console.log(Math.max(numberOne, numberTwo));
}
showLargernumber(5, 6);*/

//(2 sposób)
/*
function showLargernumber(numberOne, numberTwo) {
    if (numberOne >= numberTwo) {
        console.log(numberOne);
    }
    else {
        console.log(numberTwo);
    }
}
showLargernumber(5,6);*/

//(3 sposób)

/*
function showLargernumber(numberOne, numberTwo) {
    if (numberOne >= numberTwo) {
        console.log(numberOne);
    }
    else {
        console.log(numberTwo);
    }
}

let a=10;
let b=9;
showLargernumber(a, b);*/

//(4 sposób)

function larger(a, b) {
    return a > b ? a : b;
}

console.log(larger(5, 6));




