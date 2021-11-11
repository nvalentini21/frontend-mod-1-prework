/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dogs {
  constructor(){}
};

  var borderCollie = new Dogs();
  var labrador = new Dogs();

console.log(borderCollie);
console.log(labrador);

// Prompt 2: Snack
class Snacks {
  constructor(){}
};

  var apple = new Snacks();
  var almonds = new Snacks();

console.log(apple);
console.log(almonds);

// Prompt 3: Shirt
class Shirts {
  constructor(){}
};

  var tShirt = new Shirts();
  var buttonDown = new Shirts();

console.log(tShirt);
console.log(buttonDown);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dogs1 {
  constructor(){
    this.weight = "100 lbs";
    this.group = "Working";
    this.color = "Black";
  }
};

var newfoundland = new Dogs1();
console.log(newfoundland);

// Prompt 2: Snack
class Snacks1 {
  constructor(){
    this.type = "Fruit";
    this.color = "red";
    this.price = "$1.25";
  }
};

var apple = new Snacks1();
console.log(apple);

// Prompt 3: Shirt
class Shirts1 {
  constructor(){
    this.color = "green";
    this.material = "cotton";
    this.price = "$30.00";
  }
};

var buttonDown = new Shirts1();
console.log(buttonDown);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dogs2 {
  constructor(weight, group, color){
    this.weight = weight;
    this.group = group;
    this.color = color;
  }
};

var borderCollie = new Dogs2("50 lbs", "Working", "Black and White");
console.log(borderCollie)

var poodle = new Dogs2("40 lbs", "Toy", "White");
console.log(poodle)
// Prompt 2: Snack

class Snacks2 {
  constructor(type, color, price){
    this.type = type;
    this.color = color;
    this.price = price;
  }
};

var apple = new Snacks2("grannySmith", "Green", "$1.25");
var grapes = new Snacks2("cottonCandy", "Green", "$5.00");
console.log(apple);
console.log(grapes);

// Prompt 3: Shirt

class Shirts2 {
  constructor(color, material, price){
    this.color = color;
    this.material = material;
    this.price = price;
  }
}

var buttonDown = new Shirts2("blue", "cotton", "$30.00");
var sports = new Shirts2 ("gray", "polyester", "$19.95");
console.log(buttonDown);
console.log(sports);
