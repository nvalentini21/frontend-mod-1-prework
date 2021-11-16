// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Declare a function named buildABear with parameters name, age, fur, clothes, special power.
function buildABear(name, age, fur, clothes, specialPower) {
  //assign variable greeting to the string. Interpolate undefined name parameter into the string.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //assign variable 'demographics' to an array with the paramenters name, age.
  var demographics = [name, age];
  //assign variable 'powerSaying' to the string with concatenated special power.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // assign variable builtbear to an object with the keyvalue pairs
  var builtBear = {
    //assign key 'basicInfo' to value 'demographics'
    basicInfo: demographics,
    //set key 'clothes' to the value 'clothes'
    clothes: clothes,
    //set key 'exterior' to the value 'fur'
    exterior: fur,
    //set key cost to the value 49.99
    cost: 49.99,
    //set key saying to the value array '[greeting, powerSaying, "Goodnight my friend!"]
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //set key isCuddly to the boolean value of true.
    isCuddly: true,
  };
//return the value of builtBear to the function caller.
  return builtBear
}
//call the buildaBear function and assign the arguments below to the parameters.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//call the buildaBear function and assign the arguments below to the parameters.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//Declare a function called fizzBuzz with parameters num1, num2, range.
function fizzBuzz(num1, num2, range) {
  //Initialize loop at 0, with an end point of less than or equal to the range parameter,
  //increase by an increment of 1.
  for (var i = 0; i <= range; i++) {
    //set the condition: if the remainder of i into num1 is strictly equal to zero AND
    // the remainder of i into num 2 is strictly equal to zero,
    if (i % num1 === 0 && i % num2 === 0) {
//Then log to the console the string 'fizzbuzz'
      console.log('fizzbuzz');
  //If the remainder of i into num1 is strictly equal to 0
    } else if (i % num1 === 0) {
      //Log to the console the string "fizz"
      console.log('fizz');
      //If the remainder of i into num2 is strictly equal to 0
    } else if (i % num2 === 0) {
      //Log to the console "buzz."
      console.log('buzz');
    //If none of hte above conditions are true, then log i to the console.
    } else {
      console.log(i);
    }
  }
}
//call the function fizzBuzz with the arguments 3, 5, 100 assigned.
fizzBuzz(3, 5, 100);

//call the function fizzBuzz with the arugments 5, 8, 400 assigned. 
fizzbuzz(5, 8, 400);
