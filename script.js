// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  alert("cool");

  // list of special characters - !@#$%^&*()_+-
  // list of numerical digits - 0123456789
  // list of uppercase characters
  // list of lowercase characters

  // how many characters?
    // is it 8 or more?
      // no? send message
  // use special characters?
  // use numbers?
  // use capital letters?
  // use lower case letters?

  // put together the password
  // combine the lists that were chosen
  // pick a random character from the combined list and place it in the password up the chosen length
// Add event listener to generate button
return;
}

generateBtn.addEventListener("click", writePassword);
