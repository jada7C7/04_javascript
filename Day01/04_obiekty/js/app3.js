var Robot = function(name, age){
    this.name = name;
    this.age = age;
};
var RobotRobert = new Robot("Robert", 24);

Robot.prototype.sayHallo = function(){
    console.log("hallo, my name is " +this.name);
}

RobotRobert.sayHallo()

RobotRobert.name = "Sony";

RobotRobert.sayHallo()


var timeout = setInterval( function (){
    console.log ("wyswietlamy");
}, 1000);

