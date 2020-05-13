/*## Ćwiczenie 3

Stwórz obiekt robot. Utwórz dla niego odpowienie atrybuty: 
name, age, oraz metodę: sayHello, której zadaniem będzie wypisanie
imienia robota. Następnie zmień imię robota
np. robot.name = "Sony" i przetestuj jego metodę sayName() jeszcze raz.*/
let robot = {
    name:"Mary",
    age:"29",
    sayHello: function () {
        console.log(this.name);
    },
}
robot.sayHello();
robot.name = "Julie";
robot.sayHello();