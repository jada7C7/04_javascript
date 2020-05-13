/*## Ćwiczenie 1

Stwórz obiekt samochód, utwórz dla niego odpowiednie atrybuty i metody. 
Samochód powinien trąbić (metoda która wypisuje w koncoli informacje o tym że samochód trąbi)
i jeździć (metoda która wypisuje w koncoli informacje o tym że samochód jedzie), 
powinien posiadać informacje o kolorze, marce i numerze rejestracyjnym.
Wypisz wszystkie te informacje w konsoli.

Przykład:

"Samochód w kolorze: czerwony, marki: Mercedes, o numerze rejestracyjnym: WE 234L, jedzie sobie prosto"

"pip pip" */

/*var auto = {
    color: "red",
    make: "Mercedes",
    number: "WE 234L",
    makeSounds: function () {
        return "pip-pip";
    },
    driveWay: function () {
        return "drive straight";
    }
}
console.log(auto.makeSounds());
console.log(auto.driveWay());*/
var auto = {
    color: "red",
    make: "Mercedes",
    number: "WE 234L",
    makeSounds: function () {
        console.log("pip-pip");
    },
    driveWay: function () {
        console.log("drive straight");
    }
}
auto.makeSounds();
auto.driveWay();
