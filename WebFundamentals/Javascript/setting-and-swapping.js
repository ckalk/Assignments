var myNumber = 42;
var myName = "Cindy";
console.log("Initial values");
console.log("myNumber= " + myNumber);
console.log("myName= " + myName);
var temp = myNumber;
myNumber = myName;
myName = temp;
console.log("Values after swapping");
console.log("myNumber= " + myNumber);
console.log("myName= " + myName);