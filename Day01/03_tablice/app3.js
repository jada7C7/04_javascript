/*## Ćwiczenie 3
Stwórz tablice z napisami. Potem używając odpowiedniej metody iteracyjnej sprawdź
 czy napisy w tej tablicy spełniają następujące warunki:
1.	Mają co najmniej 10 znaków
2.	Mają co najmniej 1 literę
3.	Nie zawierają spacji*/

//1
/*function checkConditions(tab){
    for( let i=0; i<tab.length; i++){
        if (tab[i].length>=10){
            console.log("Napis ma conajmniej 10 znaków");
        }
         else {
            console.log("Napis nie  ma conajmniej 10 znaków");
         }
    }
}

let conditions=["Ala ma kota", "Krzysztof Szczerba", "trele morele", "aaa", "aaa bb 111"];
checkConditions(["Ala ma kota", "Krzysztof Szczerba", "trele morele", "aaa", "aaa bb 111"]);
*/

//2
/*function checkConditions(tab){
   let letters = /^[A-Za-z]+$/;
    for( let i=0; i<tab.length; i++){
        if (tab[i].match(letters)){
            console.log("Ma conajmniej 1 litere ");
        }
         else {
            console.log("Nie zawiera żadnych liter ");
         }
    }
}

let conditions=["2345678", "Krzysztof Szczerba", "6453332 655", "aaa", "aaa bb 111"];
checkConditions(["Ala ma kota", "Krzysztof Szczerba", "trele morele", "aaa", "aaa bb 111"]);*/

//3
/*function checkConditions(tab){
    for( let i=0; i<tab.length; i++){
        if (tab[i].includes(" ")){
            console.log("Napis zawiera spacje");
        }
         else {
            console.log("Napis  nie zawiera spację");
         }
    }
}

let conditions=["Ala ma kota", "Krzysztof Szczerba", "trele morele", "aaa", "aaa bb 111"];
checkConditions(["Ala ma kota", "Krzysztof Szczerba", "trele morele", "aaa", "aaa bb 111"]);*/


// całość


function checkConditions(tab) {
    let letters = /^[A-Za-z]+$/;
    for (let i = 0; i < tab.length; i++) {
        if ((tab[i].match(letters)) && (tab[i].includes(" ")) && (tab[i].length >= 10)) {
            console.log("Wyrażenie: ma co najmniej 10 znaków, ma co najmniej 1 litere, nie zawiera spacji");
        }
        else {
            console.log("Wyrażenie: nie ma co najmniej 10 znaków, nie ma co najmniej 1 litere, nie zawiera spacji");
        }
    }
}


let conditions = ["234ala5678", "Krzysztof Szczerba", "6453332655", "aaa", "aaa bb 111"];
checkConditions(["234ala5678", "Krzysztof Szczerba", "6453332655", "aaa", "aaa bb 111"]);
