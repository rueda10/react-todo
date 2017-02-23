function add(a, b) {
  return a + b;
}

console.log(add(3,1));

var toAdd = [9, 5];

console.log(add(...toAdd));

var groupA = ["Jen", "Cory"];
var groupB = ["Vikram"];

var final = [...groupB, 3, ...groupA];

console.log(final);

var person = ["Andrew", 25];
var personTwo = ["Jen", 29];

function greeting(name, age) {
  console.log("Hello " + name + ", your age is " + age);
}

greeting(...person);
greeting(...personTwo);

var names = ["Mike", "Ben"];
var final = ["Jaime", ...names];

final.forEach(function(name) {
  console.log("Hi " + name);
});
