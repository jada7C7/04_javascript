/*
 Stwórz tablicę z listą swoich ulubionych owoców.
 Nastepnie: 1. Wypisz pierwszy owoc w konsoli, 2. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu length).
 */


var owoce = ["jagody", "kiwi", "ananas"];

owoce[3] = "truskawka";
owoce[4] = "gruszka";

owoce.push("cytryna");
owoce.push("banan");

console.log(owoce[0]);
console.log(owoce[owoce.length-1]);
