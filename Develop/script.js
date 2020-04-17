// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // set up string for password values
  var lowerCase = ["a","b","c"];
  var upperCase = ["A","B","C","D","E"];
  var num = ["1","2"];
  var speChar = ("!@#$%^&*+-()");
  var pass = ("");

  // Create prompet for character length and alerts
  var passLength = prompt("Length of password? (8-128 characters)");
  if (passLength < 8) {
    alert("Passward cannot be less than 8 characters.");
    prompt("Length of password? (8-128 characters.)");
  }
  else if (passLength > 128) {
    alert("Passward cannot be more than 128 characters.");
    prompt("Length of password? (8-128 characters.)");
  }

  // Confirming Lower case
  var passLowerCase = confirm("Include lower case letters?");
  if (passLowerCase) {
    alert("You want to include lower case.");
  }

  else {
    alert("You do not want to include lower case.")

  }

  // Confirming upper case
  var passUpperCase = confirm("Include uppercase letters?");
  if (passUpperCase) {
    alert("You want to include upper case.")

  }

  else {
    alert("You do not want to include upper case.")

  }

  // Confirming numbers
  var passNum = confirm("Include numbers?");
  if (passNum) {
    alert("You want to include numbers.")
  }

  else {
    alert("You do not want to include numbers.")

  }

  // Confirming special characters
  var passSpeChar = confirm("Include special characters?");
  if (passSpeChar) {
    alert("You want to include special characters.")
  }

  else {
    alert("You do not want to include special characters.")

  }

//create for loop to choose password characters

//for (var i = 0; i < passLength.value; i++){
  //randomly generate
  if (passLowerCase) {
    var lowerCaseRan = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass = pass + lowerCaseRan;

  }

  if (passUpperCase) {
    var upperCaseRan = upperCase[Math.floor(Math.random() * upperCase.length)];
    pass = pass + upperCaseRan;

  }

  if (passNum) {
    var numRan = num[Math.floor(Math.random() * num.length)];
    pass = pass + numRan;

  }

  if (passSpeChar) {
    var specRan = speChar[Math.floor(Math.random() * speChar.length)];
    pass = pass + specRan;

  }
//}

  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);