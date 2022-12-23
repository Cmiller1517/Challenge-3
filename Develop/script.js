// Arrays for all the different options for the password
var characterLength = 8;
var choiceArr = [];

var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U', 'V', 'W', 'X','Y','Z',];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u', 'v', 'w', 'x','y','z',];
var specialCharArr = ['!' , '@', '#' , '$', '$', '%', '^', '&', '*0', '<', '>', '/'];
var numArr = ['1' , '2', '3' , '4', '5', '6', '7', '8', '*9', '0',];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// write the password from the prompts
function writePassword() {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}
// Generate based on the prompts
function generatePassword(){
  var password = ""
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters would you like to use in your password?  (8 - 128)"));

  // promt user for password length (8 < 128)
  if (isNaN(characterLength), characterLength < 8, characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please retry");
    return false;
  }
  // promt user for password if they want to include lower case
 if (confirm("would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  // promt user for password if they want to include uppercase
  if (confirm("would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  // promt user for password if they want to include special letters
  if (confirm("would you like special letters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  // promt user for password if they want to include numbers
  if (confirm("would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numArr);
  }
  return true;
}





// validate that one char type selected

// display password 



// Write password to the #password input



