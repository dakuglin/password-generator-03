// Assignment Code

// Global variables 
//-----------------------------------------------------------------------------------------------

var userPasswordLength = parseInt(prompt("Desired length of password:")) //parseInt is creating a number
console.log(userPasswordLength);

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercase =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = ["1","2","3","4","5","6","7","8","9"];

var symbols = ["!","#","%","&","(",")","*","+","-","~","/",":","<","?","^","[","]","{","}"];


//Functions
//-----------------------------------------------------------------------------------------------
function passwordChoices() { //function 1

// building conditionals 
  if (userPasswordLength < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  if (userPasswordLength > 128) {
    alert("Password must not be longer than 128 characters long.");
    return;
  }

  var userLowerCase = confirm("Do you require lowcase letters?");
  console.log(userLowerCase);

  var userUpperCase = confirm("Do you require uppercase letters?");
  console.log(userUpperCase);

  var userSymbols = confirm("Do you require symbols?");
  console.log(userSymbols);

  var userNumbers = confirm("Do you require numbers?");
  console.log(userNumbers);

    var finalOptions = {   // building an object so we can use it later
    userPasswordLength: userPasswordLength,
    userLowerCase: userLowerCase,
    userUpperCase: userUpperCase,
    userSymbols: userSymbols,
    userNumbers: userNumbers,
  }

return finalOptions; // returns finalOptions object
}

passwordChoices();



function passwordOptions(finalOptions) { // function 2 to get a random element
  var userSelectedCharacters = []; // creating an empty array that we will use to store our valid elements
  if (finalOptions.userLowerCase) {
    userSelectedCharacters = userSelectedCharacters.concat(lowercase)  //joining two things
  }
  if (finalOptions.userUpperCase) {
    userSelectedCharacters = userSelectedCharacters.concat(uppercase) //joining two things
  }
  if (finalOptions.userNumber) {
    userSelectedCharacters =userSelectedCharacters.concat(number) //joining two things
  }
  if (finalOptions.userSymbols) {
    userSelectedCharacters = userSelectedCharacters.concat(symbol) //joining two things
  }
  console.log(userSelectedCharacters);
}

passwordOptions();
console.log(userSelectedCharacters);




function randomize(userSelectedCharacters) {
  for (userSelectedCharacters i = 0; i < options.userPasswordLength; i++) {
  var randIndex = Math.floor(Math.random() * userSelectedCharacters.length);
  var randomElement = arr[randIndex];
  }
  return randomElement;
 // console.log(randoemElements);
}

randomize();





//------------------------------------------------------------------------------------------------------
// Write password to the #password input
// function password() { 
//   var userSelectedCharacters = []; // creating an empty array that we will use to store our valid elements
//   if (options.userLowerCase) {
//     userSelectedCharacters = userSelectedCharacters.concat(lowercase)  //joining two things
//   }
//   if (options.userUpperCase) {
//     userSelectedCharacters = userSelectedCharacters.concat(uppercase) //joining two things
//   }
//   if (options.userNumber) {
//     userSelectedCharacters =userSelectedCharacters.concat(number) //joining two things
//   }
//   if (options.userSymbols) {
//     userSelectedCharacters = userSelectedCharacters.concat(symbol) //joining two things
//   }
// }

//   if (
//     userLowerCase === false &&
//     userUpperCase === false &&
//     userNumbers === false &&
//     userSymbols === false
//   ) {
//     alert("You must select one at least one password parameter");
//     return;
//   }
//   //create two for loops
//   // one will push possilbe arrays into possible arrays
//   //loop though options.length

//   //second for loop through garunteed 


//   return results.join('');

// let pw = ""
// for (let i = 0; i < options.userPasswordLength; i++) {
//   var randIndex = Math.floor(Math.random() * userSelectedCharacters.length);
//   var randElement = userSelectedCharacters[randIndex];
//   pw = `${pw}${randElement}`
// }
// return pw;
// }

// const password = randomize(passwordChoices())

// console.log(password)
