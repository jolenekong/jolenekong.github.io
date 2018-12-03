
function calculate(myLocation, myLocation2, myLocation3) {
    var myName = "This is Stackup, at " + myLocation + " " + myLocation2 + " test";
    console.log(myName);

}

calculate("one North", "JTC Launch Pad");
calculate("test", "test");

function getMyFullName() {
    var firstName = "Stackup";
    var lastName = "One North";
    var fullName = firstName + " " + lastName;
    return fullName;
}

var myFullName = getMyFullName();
console.log(myFullName);

function greet(firstName, lastName, bornYear){
   var age = 2018 - bornYear;
    var greetings = "Hello, " + firstName + lastName + " , " + age;
    console.log(greetings);
}

greet("Michael", "Jordan" , " 1988 ");
greet("Mauro", "Icardi" , "1987 ");
greet("Lionel", "Messi" , "1997 ");

function testMe(){
    alert("Hi you hit the button");
}

  

