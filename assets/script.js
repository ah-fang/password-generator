/*LOGICAL SEQUENCE
Initialize empty string for customizable character set (stringSet)
Initialize empty string for final password (passText)
Create separate character sets available for concatenation, tied to prompts
Prompts: 
- Password length (set to var passLength and use value)
- Character sets (if true, concatenate to strings)

Generate random characters based on customized string set and to the number of characters specified in passLength
Feed random characters to passText (saved during loop)
*/
var generateBtn = document.querySelector("#generate");
var stringSet = "";
var passText = "";

//charset for uppercase letters
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//charset for uppercase lettersgenerate
const lower = "abcdefghijklmnopqrstuvwxyz";
//charset for numbers
const numbers = "0123456789";
//charset for special characters
const specials = '~!@#$%^&*()_+{}":?><;.,';

var passLength;
function charSet() {
  var upperConfirm = window.confirm("Would you like your password to have uppercase characters? If so, click OK. If not, click cancel.");
  var lowerConfirm = window.confirm("Would you like your password to have lowercase characters? If so, click OK. If not, click cancel.");
  var numberConfirm = window.confirm("Would you like your password to have numeric characters? If so, click OK. If not, click cancel.");
  var specialConfirm = window.confirm("Would you like your password to have special characters? If so, click OK. If not, click cancel.");
  switch(upperConfirm, lowerConfirm, numberConfirm, specialConfirm) {
    case upperConfirm:
      stringSet += upper;
    case lowerConfirm:
      stringSet += lower;
    case numberConfirm:
      stringSet += numbers;
    case specialConfirm:
      stringSet += specials;
      break;  
  }
  if (!upperConfirm && !lowerConfirm && !numberConfirm && !specialConfirm) {
    window.alert("You must select at least one character set.");
    charSet();
  }
  return stringSet;
}

function generatePassword() {
  passLength = window.prompt("Please enter the desired character length of your password as a number.\n(Note: password must be between 8 and 128 characters in length.)");
    if (passLength < 8 || passLength > 128) {
      window.alert("Please choose a number between 8 and 128.");
      generatePassword();
    }
    else {
    window.alert("The password will be " + passLength + " characters long.")  
    }
    charSet();
    writePassword();
    function writePassword() {
      var passwordText = document.querySelector("#password");
      for (let i = 0; i < passLength; i++) {
        passText += stringSet.charAt(Math.floor(Math.random() * stringSet.length));
      }
      passwordText.textContent = passText;
    }
}

//Event listener to generate button
generateBtn.addEventListener("click", generatePassword);