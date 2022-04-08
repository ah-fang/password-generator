// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//the empty string that other character sets will be added to
var stringSet = "";

//charset for uppercase letters
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//charset for uppercase letters
const lower = "abcdefghijklmnopqrstuvwxyz";
//charset for numbers
const numbers = "0123456789";
//charset for special characters
const specials = '~!@#$%^&*()_+{}":?><;.,';
// return specials[Math.floor(Math.random() * specials.length)];

function generatePassword() {
  var passLength = window.prompt("Please enter the desired character length of your password as a number. (Note: password must be between 8 and 129 characters in length.)");
    if (passLength < 8 || passLength > 129) {
      window.alert("Please choose a number between 8 and 129.");
      generatePassword();
    }
   else {
    window.alert("The password will be " + passLength + " characters long.")  
    console.log("This number is acceptable.")
    }
    charSet();
    return stringSet[Math.floor(Math.random() * stringSet.length)];
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("The function writePassword ran.")
  passwordText.value = password;
}

function charSet() {
  var upperConfirm = window.confirm("Would you like your password to have uppercase characters? If so, click OK. If not, click cancel.");
  var lowerConfirm = window.confirm("Would you like your password to have lowercase characters? If so, click OK. If not, click cancel.");
  var numberConfirm = window.confirm("Would you like your password to have numeric characters? If so, click OK. If not, click cancel.");
  var specialConfirm = window.confirm("Would you like your password to have special characters? If so, click OK. If not, click cancel.");
  
  if (upperConfirm) {
    // add lowercase text set to consideration
    stringSet = stringSet + lower;
  }
  if (lowerConfirm) {
    // add lowercase text set to consideration
    stringSet = stringSet + upper;
  }
  if (numberConfirm) {
    // add numerics set to consideration
    stringSet = stringSet + numbers;
  }
  if (specialConfirm) {
    // add special characters set to consideration
    stringSet = stringSet + specials;
  }
  else {
    window.alert("You must select at least one character set.");
  }  
  console.log(stringSet);
  return stringSet;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);