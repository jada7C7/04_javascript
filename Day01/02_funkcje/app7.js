// zad 7

//1 sposob 

/*function calculateTip(amount, raiting) {
    switch (raiting) {
        case "Bardzo dobra obsługa":
            console.log(amount * 0.25);
            break;
        case "Dobra obsługa":
            console.log(amount * 0.20);
            break;
        case "Średnia obsługa":
            console.log(amount * 0.15);
            break;
        case "Zła obsługa":
            console.log(0);
            break;
        default:
            console.log("opis nieczytelny");
    }
}
calculateTip(300, "Bardzo dobra obsługa");
*/

//2 sposob 

function calculateTip(amount, raiting) {
    if (raiting === "bardzo dobra obsługa") {
        console.log(amount * 0.25)
    }
    else if (raiting === "dobra obsługa") {
        console.log(amount * 0.20)
    }
    else if (raiting === "srednia obsługa") {
        console.log(amount * 0.15)
    }
    else if (raiting === "zla obsługa") {
        console.log(0)
    }
    else {
        console.log("opis nieczytelny")
    }
}

calculateTip(400, "bardzo dobra obsługa");
calculateTip(100, "dobra obsługa");

