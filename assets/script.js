// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //do stuff
  function numberCheck() {
    var length = window.prompt("Please enter the desired character length of your password as a number. (Note: password must be between 8 and 129 characters in length.");
    if (length < 8 || length > 129) {
      window.alert("Please choose a number between 8 and 129.");
      numberCheck();
      //prompt length again. Do not move on to other prompts! 
    }
  } 
   if (length >= 8 && length <= 129) {
    console.log("The password will be " + length + " characters long.")  
    console.log("This number is acceptable.")
    }
//   if(window.confirm("Would you like your password to have lowercase characters? If so, click OK. If not, click cancel.")) {
//     console.log("We've added the lowercase characters, captain.")
//     //then add charset 
//   }
//  else {
//     console.log("It's been an honor.");
//   }
//   window.prompt("Would you like your password to have uppercase characters? If so, click OK. If not, click cancel.");
//   window.prompt("Would you like your password to have numeric characters? If so, click OK. If not, click cancel.");
//   window.prompt("Would you like your password to have special characters? If so, click OK. If not, click cancel.");
}

function upperCase(){
  //charset for uppercase letters
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)]; 
}
function lowerCase(){
  //charset for uppercase letters
  const lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)]; 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("The function writePassword ran.")
  passwordText.value = password;
}

/*
  if (yes to lowercase) {
    add lowercase text set to consideration (concatenate strings?)
  }
  if (yes to uppercase) {
    add lowercase text set to consideration
  }
  if (yes to numeric) {
    add numerics set to consideration
  }
  if (yes to special) {
    add special characters set to consideration
  }
  else {
    window.alert("You must select at least one character set.");
    reset options and ask again.
  }  
*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);