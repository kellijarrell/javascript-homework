// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generateRandom(array){
  var randomIndex = Math.floor(Math.random()*array.length);
  var randomEl = array[randomIndex];
  return randomEl;
}

function generatePassword() {

  // set up string for password values

  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var num = ["1","2","3","4","5","6","7","8","9"];
  var speChar = ["!","@","#","$","%","^","&","*","+","-","(",")"];
  var pass = [];
  var availChar = [];

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
    availChar = availChar.concat(lowerCase);
    pass.push(generateRandom(lowerCase));
  }

  else {
    alert("You do not want to include lower case.");

  }

  // Confirming upper case

  var passUpperCase = confirm("Include uppercase letters?");
  if (passUpperCase) {
    alert("You want to include upper case.");
    availChar = availChar.concat(upperCase);
    pass.push(generateRandom(upperCase));

  }

  else {
    alert("You do not want to include upper case.");

  }

  // Confirming numbers

  var passNum = confirm("Include numbers?");
  if (passNum) {
    alert("You want to include numbers.");
    availChar = availChar.concat(num);
    pass.push(generateRandom(num));
  }

  else {
    alert("You do not want to include numbers.");

  }

  // Confirming special characters

  var passSpeChar = confirm("Include special characters?");
  if (passSpeChar) {
    alert("You want to include special characters.");
    availChar = availChar.concat(speChar);
    pass.push(generateRandom(speChar));
  }

  else {
    alert("You do not want to include special characters.");

  }
 
  //create for loop to choose password characters
  //randomly generate

  for (var i = pass.length; i < passLength; i++){
    pass.push(generateRandom(availChar));
  }
  var randomPass = pass.join("");
  return randomPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);