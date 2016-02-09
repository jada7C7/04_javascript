/*
 Zajrzyj do pliku cwiczenie3.js - jest tam przykładowa funkcja która oblicza proste równania.
 Niestety nie działą ona dobrze - znajdź błąd i go napraw tak żeby funkcja działała.
 Napisz doatkowe testy żeby sprawdzić czy wszystkie przypadki działają.
 */


function myEval(a, b, operation) {
    var result = 0;
    switch (operation) {
        case'+':
            result = a + b;
            break;
        case'-':
            result = a - b;
            break;
        case'/':
            result = a / b;
            break;
        case'*':
            result = a * b;
            break;
        case'%':
            result = a % b;
            break;
        case'^':
            result = Math.pow(a, b);
            break;
    }
    return result;
}

console.log(" 2 + 4 = " + myEval(2, 4, "+"));
console.log(" 5 - 2 = " + myEval(5, 2, "-"));
console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));
