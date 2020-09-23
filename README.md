# password-generator-03

* The purpose of this homework is to create a random passowrd generator. The user of the site will be able to select specific parameters needed for the password such as:

* Length of desired password (ranging from 8 characters to 128 characters)
* Needing or not needing lowercase letters
* Needing or not needing uppercase letters
* Needing or not needing numbers 
* Needing or not needing special symbols 

* Pseudocode:
1) prompt user to define the length of password they need 
2) User selects what other password parameters they need
User clicks the button to generate a password
User is presented with a series of prompts for password criteria

User selects which criteria to include in the password:
    Length of the password
    THEN user chooses a length of at least 8 characters and no more than 128 characters
    Character types needed in password
    THEN user chooses lowercase, uppercase, numeric, and/or special characters



WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page