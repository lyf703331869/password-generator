// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate a random password based on user chooses
function generatePassword() {
  // Ask for how many charactors from user and round to integer
  var passwordLength = Math.floor(
    prompt(
      "How long do you want the password to be? Choose a length between 8 and 128 characters"
    )
  );
  // Check if input is number & within the range
  if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
    var specialCharChose = confirm("Do you want special characters?");
    var numericalCharChose = confirm("Do you want numerical characters?");
    var uppercaseCharChose = confirm("Do you want uppercase characters?");
    var lowercaseCharChose = confirm("Do you want lowercase characters?");
    // If the format is not correct, alert user, otherwise continue
    if (
      !specialCharChose &&
      !numericalCharChose &&
      !uppercaseCharChose &&
      !lowercaseCharChose
    ) {
      alert("You have to choose at least one options!");
      var wantToContinue = confirm("Do you still want to generate a password?");
      if (wantToContinue) {
        generatePassword();
      }
      // Create variables to store the chosen characters
    } else {
      var finalPassword = [""];
      var finalPasswordPool = "";
      var specialCharPool = "'!#$%&*+,-./:;<=>?@()[]^_`{|}~";
      var numbersCharPool = "1234567890";
      var upperCaseCharPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var lowerCaseCharPool = "abcdefghijklmnopqrstuvwxyz";

      // Select chosen characters into the final pool
      if (specialCharChose) {
        finalPasswordPool += specialCharPool;
      }
      if (numericalCharChose) {
        finalPasswordPool += numbersCharPool;
      }
      if (uppercaseCharChose) {
        finalPasswordPool += upperCaseCharPool;
      }
      if (lowercaseCharChose) {
        finalPasswordPool += lowerCaseCharPool;
      }
      var finalPasswordPool = finalPasswordPool.split("");

      // Random pick out characters and concat to final pool array
      for (var i = 0; i < passwordLength; i++) {
        finalPassword = finalPassword.concat(
          finalPasswordPool[
            Math.floor(Math.random() * finalPasswordPool.length)
          ]
        );
      }
      // Turn final array to string and return
      return finalPassword.join("");
    }

    // If not right format, alert user and ask if user wants to continue
  } else {
    alert("Please choose a valid number between 8 and 128.");
    var wantToContinue = confirm("Do you still want to generate a password?");
    if (wantToContinue) {
      generatePassword();
    }
  }
}
