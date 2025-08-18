// The password must be at least 8 characters long
// The password must contain at least one uppercase letter
// The password must contain at least one number
// If the password does not meet all the requirements, the program should keep asking the user for a new password until they provide a valid one. 
// If password does not meet requirements, print statement letting user know it does not meet requirements.
// Once the password meets the requirements, print a statment letting user know it was successful

const readline = require('readline-sync');

let password;
let isValid = false;

do {
    password = readline.question(`Please enter a password using the rules below
    - Must be 8 charcters long
    - Must contain at least one uppercase letter
    - Must contain at least on number
    Password: `);

    isValid = true;
    let hasUpper = false;
    let hasNum = false;

    if (password.length < 8) {
        isValid = false;
    }
    
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= "A" && char <= "Z") {
            hasUpper = true;
        }
        if (char >= "0" && char <= "9") {
            hasNum = true;
        }
    }

    if (!hasUpper || !hasNum) {
        isValid = false;
    }

    if (isValid) {
        console.log("Your password meets all requirements.");
    } else {
        console.log("Your password does not meet requirements. Please try again.")
    }
} while (!isValid);