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

  if (
    userLowerCase === false &&
    userUpperCase === false &&
    userNumbers === false &&
    userSymbols === false
  ) {
    alert("You must select one at least one password parameter.");
    return;
  }
  
    finalOptions = {   // building an object so we can use it later
    userPasswordLength: userPasswordLength, 
    userLowerCase: userLowerCase,
    userUpperCase: userUpperCase,
    userSymbols: userSymbols,
    userNumbers: userNumbers,
  }

return finalOptions; // returns finalOptions object
}

passwordChoices();

function userSelectedOptions() { // function 2 to get a random element
  var validElements = []; // creating an empty array that we will use to store our valid elements
  console.log(validElements);

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
    var randomIndex = Math.floor(Math.random() * validElements.length); //grabbing random index positions in my array of valid elements
    var randomElement = validElements[randomIndex];
    var string = '' +=randomElements;
    //string += randomElements;

    //console.log(randomElement);
    //validElements.push("test");

     //pw +=randomElement;
      //console.log(password);
       // =+(randomElement)
      //console.log(password);
   }
  //return randomElement;
  //return password;
}
 
userSelectedOptions();


// Assignment Code
var generateBtn = document.querySelector("#generate"); //generateBtn is the dOM Event

// Write password to the #password input
function writePassword() {
  var password = userSelectedOptions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //password.randomElement.length = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
