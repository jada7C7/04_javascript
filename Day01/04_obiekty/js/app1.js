

var Samochod = function(color, type, number){
    this.color = color;
    this.type = type;
    this.number = number;
};
var fiat = new Samochod("czerwony", "fiat", "WX9837");
console.log(fiat);


Samochod.prototype.beep = function(){
    console.log("beep, beeeeep");
}

Samochod.prototype.drive = function(km){
    console.log("Samochod marki " + this.type + " o kolorze " + this.color +
        " i numerze " + this.number + " przejechal " + km + " km");
}

fiat.drive(65);
fiat.beep();

