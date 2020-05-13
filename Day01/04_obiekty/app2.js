/*##2Do obiektu samochód z ćwiczenia pierwzego dodaj tablicę z listą dat przeglądów.
Dodaj ten nowy atrybut poza ciałem obiektu. 
Dodaj też metodę które dodaje wpis do tej tablicy (uzyj ```this```)
 i metodę która wyświetla wszystkie przeglądy samochodu (użyj ```this```)*/

let auto = {
    color: "red",
    make: "Mercedes",
    number: "WE 234L",
    makeSounds: function () {
        console.log("pip-pip");
    },
    driveWay: function () {
        console.log("drive straight");
    },
    // addNewCarReview: function () {
    //     this.carReview.push(2020);
    // }

}
auto.makeSounds();
auto.driveWay();


auto.carReview = [2000, 2004, 2008, 2009, 2016, 2019];

auto.addNewCarReview=function (a) {

    this.carReview.push(a);
}
auto.showRegistration = function () {
    console.log(this.carReview);
}
auto.addNewCarReview(2021);
auto.addNewCarReview(2022);
auto.addNewCarReview(2023);
auto.addNewCarReview(2024);
auto.addNewCarReview(2025);
auto.addNewCarReview(2026);
auto.showRegistration();



