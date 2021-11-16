// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Superman";
var specialAbility = "laser vision";
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Hello friend!";
var catchphrase = "Saving the world is my specialty";
console.log (greeting + " My name is " + heroName);
console.log (`${catchphrase} and so is ${specialAbility}`);
// Declare two variables - power AND energy - set to integers
var power = 20
var energy = 150

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500
var fullEnergy = energy + 150
console.log(fullPower);
console.log(fullEnergy);
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true
var identityConcealed = true

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Magneto", "Penguin", "Bane"]
var sideKicks = ["Robin", "Tinkerbell", "ScoobyDoo"]
// Print the first sidekick to your console
console.log(sideKicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2])
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Plankton");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sideKicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sideKicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel >= 50) {
    console.log(badExcuse);
  }
  else if ((dangerLevel < 50) && (dangerLevel >= 10)){
    console.log(saveTheDay);
  }
  else {
    console.log("It's all good fam.");
  }
};
var saveTheDay = "It's my duty."
var badExcuse = "Meh, hard pass."
assessSituation(25, saveTheDay, badExcuse);

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
assessSituation (99, announcement, excuse);
assessSituation (21, announcement, excuse);
assessSituation (3, announcement, excuse);

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Godzilla",
  smell: "seaweed",
  weight: 20000,
  citiesDestroyed: ["Tokyo", "New York", "Paris"],
  luckyNumbers: [2, 45, 54, 68],
  address: address = {
    number: 2828,
    street: "Zuni",
    state: "Colorado",
    zip: 80211
  }
}
console.log(scaryMonster);


// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
class SuperHero {
  constructor(name, superpower, age) {
  this.name = name;
  this.superpower = superpower;
  this.age = age;
  this.archNemesis = "The Syntax Error";
  this.powerLevel = 1000;
  this.energyLevel = 50;
  }
  sayName() {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000
  }
  gainPower(number) {
    this.powerLevel = number * this.powerLevel
  }
};

var superHero1 = new SuperHero("SpiderMan", "Web-spinning", 25);
var superHero2 = new SuperHero("Wonder Woman", "Strength", 29);


superHero1.gainPower(2);
console.log(superHero1);

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class


// Reflection
// What parts were most difficult about this exerise?
//I had difficulty with if statements, particularly getting the syntax right. I also had trouble
//with declaring a function, again due to small syntax mistakes.

// What parts felt most comfortable to you?
//I felt comfortable declaring variables, creating an object, and creating a class.

// What skills do you need to continue to practice before starting Mod 1?
//I definitely need to practice over and over writing diffferent types of functions,
//if statements, and creating classes. Most of the issues I've had is not remembering the
//correct syntax, and making small errors that cost me a lot of time.

//Update 11.16.21 - Somehow my ModZero hero did not get pushed over to github, so going to repush it now
//as per feedback from Cydnee.
