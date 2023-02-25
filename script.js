var passwordLength = 8;
var choiceArray = [];

var specialCharArray = ['!','@','#','$','%','?','&','*','+','^',];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var UpperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArray = ['1','2','3','4','5','6','7','8','9','0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts(); //returns true or false for prompts questions
    var passwordText = document.querySelector("#password");
    
    if (correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
    } else {
      passwordText.value = '';

    }
   

}

function generatePassword() {
  var password = '';
  for(var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;

}

function getPrompts() {
    choiceArray = [];
    passwordLength = prompt('How many characters would you like your password to be? (8-128 characters)')
  
    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert('Password length has to be a number 8-128 characters. Try again.');
      return false;
    }

    if (confirm('Would you like to use lowercase letters in your password?')) {
      choiceArray = choiceArray.concat(lowerCaseArray);
    }
    if (confirm('Would you like to use uppercase letters in your password?')) {
      choiceArray = choiceArray.concat(UpperCaseArray);
    }
    if (confirm('Would you like to use numbers in your password?')) {
      choiceArray = choiceArray.concat(numberArray);
    }
    if (confirm('Would you like to use special characters in your password?')) {
      choiceArray = choiceArray.concat(specialCharArray);
    }
    return true;
}


