/*Zaprojektuj następujące obiekty:

1. Obiekt student, który powinien mieć nastepujące atrybuty i metody: 
    * imie, 
    * nazwisko, 
    * wiek, 
    * rok studiów, 
    * tablicę z listą przedmiotów, 
    * tablice z listą ocen czyli indeks,  
    * zakuj() - wypisująca w konsoli string "zakuwam", 
    * odpowiedz() - wypisująca w konsoli string "odpowiadam", 

2. Obiekt egzaminator, który będzie miał następujące atrybuty i metody:
    * imie , 
    * nazwisko, 
    * nazwę przedmiotu, z którego egzaminuje,
    * pytaj() - wypisująca w konsoli string "pytam", 
    * wstaw_ocene() - - wypisująca w konsoli losową liczbę od 1-6

3. Obiekt egzamin, który będzie posiadał metodę:
    * start()- odpowiedzialną za przeprowadzenie egzaminu, czyli użycie obiektu student i egzaminator, 
     wywołanie metody pytaj()  z obiektu egzaminator , 
     wywołanie metody odpowiedz() z obiektu student, 
     oraz wywołanie metody wstaw_ocene  i wstawienie jej do indeksu studenta
     Wypisanie w konsoli jaką ocenę dostał student.*/

//1

let student = {
    name: "Julie",
    surname: "Kowalska",
    age: 2,
    subject: ["Mathematic", "Physic", "Biology", "Chemist"],
    mark: [3, 5, 6, 2, 3, 6, 6,],
    learn: function () {
        console.log("zakuwm")
    },
    answer: function () {
        console.log("odpowiadam")
    }
}
// student.answer();
// student.learn();

//2
let examiner = {
    name: "Julie",
    surname: "Kowalska",
    subject: "Physic",
    ask: function () {
        console.log("pytam")
    },
    writeEstimation: function () {
        console.log(Math.floor(Math.random() * Math.floor(6)));
    }
}

// examiner.ask();
// examiner.writeEstimation();

//3
let exam = {
    start: function () {
        examiner.ask();
        student.answer();
        examiner.writeEstimation();
    }
}
exam.start();

