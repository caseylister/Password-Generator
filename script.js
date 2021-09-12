// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var confirmLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;


var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["~", "!", "#", "$", "%","&", "+", "*", "?", ":", ";", ">", "<","^"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
confirmLength = prompt("How many characters would you like your password to be? Please choose between 8 and 128.");

  while(confirmLength < 8 || confirmLength > 128){
    alert("Password must be between 8 and 128 characters. Try again!");
    var confirmLength = prompt("How many characters would you like your password to be? Please choose between 8 and 128.");
  }

    alert("Your password will have " + confirmLength + " characters.");

    var confirmLower = confirm("Would you like to include lowercase characters?");
    var confirmUpper = confirm("Would you like to include uppercase characters?");
    var confirmNumber = confirm("Would you like to include numbers?");
    var confirmSpecial = confirm("Would you like to include any special characters?");

    if(confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSpecial === false){
      alert("You must choose at least one parameter.");
      var confirmLower = confirm("Would you like to include lowercase characters?");
      var confirmUpper = confirm("Would you like to include uppercase characters?");
      var confirmNumber = confirm("Would you like to include numbers?");
      var confirmSpecial = confirm("Would you like to include any special characters?");
    }  
}    

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}