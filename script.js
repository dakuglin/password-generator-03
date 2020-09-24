// Assignment Code

// Global variables 
//-----------------------------------------------------------------------------------------------

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercase =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = ["1","2","3","4","5","6","7","8","9"];

var symbols = ["!","#","%","&","(",")","*","+","-","~","/",":","<","?","^","[","]","{","}"];

var finalOptions = {   // everyting in code has access to this now 
  //userPasswordLength: 0,
  userPasswordLength: [], 
  userLowerCase: [],
  userUpperCase: [],
  userSymbols: [],
  userNumbers: [],
}; 


   
//Functions
//-----------------------------------------------------------------------------------------------
function passwordChoices() { //function 1

  var userPasswordLength = parseInt(prompt("Desired length of password:")) //parseInt is creating a number
  console.log(userPasswordLength);

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

    finalOptions = {   // building an object so we can use it later
    userPasswordLength: userPasswordLength, 
    userLowerCase: userLowerCase,
    userUpperCase: userUpperCase,
    userSymbols: userSymbols,
    userNumbers: userNumbers,
  }

return finalOptions; // returns finalOptions object
}

passwordChoices()

function userSelectedOptions() { // function 2 to get a random element
  //let validElements = []; // creating an empty array that we will use to store our valid elements
  let validElements = []; 
  console.log(validElements)

  if (finalOptions.userLowerCase) {
    validElements = validElements.concat(lowercase); //joining two things
  }
  if (finalOptions.userUpperCase) {
    validElements = validElements.concat(uppercase); //joining two things
  }
  if (finalOptions.userNumber) {
    validElements =validElements.concat(number); //joining two things
  }
  if (finalOptions.userSymbols) {
    validElements = validElements.concat(symbols); //joining two things
  }
  

  for ( i = 0; i < finalOptions.userPasswordLength; i++) {
    var randomIndex = Math.floor(Math.random() * validElements.length);
    var randomElement = validElements[randomIndex];
    console.log(randomElement);
    }
    //return results.join(randomElement);
  }

// const password = randomElement;

// console.log(passowrd);
  
// //console.log(password)

// console.log(validElements);


// let pw = ""
// for (let i = 0; i < options.userPasswordLength; i++) {
//   var randIndex = Math.floor(Math.random() * validElements.length);
//   var randElement = validElements[randIndex];
//   pw = `${pw}${randElement}`
// }
// return pw;


// function randomize() {
//   var validElements; // going to call on the validElements and randomly scan over the array to the selected length of the user password
  
//   //console.log(password);
//   }
//   return result.join('');
// }



// randomize(userSelectedOptions)


//console.log(randomize);












// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);






//------------------------------------------------------------------------------------------------------
// Write password to the #password input
// function password() { 
//   var validElements = []; // creating an empty array that we will use to store our valid elements
//   if (options.userLowerCase) {
//     validElements = validElements.concat(lowercase)  //joining two things
//   }
//   if (options.userUpperCase) {
//     validElements = validElements.concat(uppercase) //joining two things
//   }
//   if (options.userNumber) {
//     validElements =validElements.concat(number) //joining two things
//   }
//   if (options.userSymbols) {
//     validElements = validElements.concat(symbol) //joining two things
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

