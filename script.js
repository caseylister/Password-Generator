// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Variable Declaration
var confirmLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;

// Array Declaration
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

    var passwordChar = [];

    if(confirmLower){
      passwordChar = passwordChar.concat(lower);
    }

    if(confirmUpper){
      passwordChar = passwordChar.concat(upper);
    }

    if(confirmNumber){
      passwordChar = passwordChar.concat(number);
    }

    if(confirmSpecial){
      passwordChar = passwordChar.concat(special);
    }


    var randomPw = "";

    // For loop choosing random characters from arrays
    
    for(var i = 0; i < confirmLength; i++){
      randomPw = randomPw + passwordChar[Math.floor(Math.random() * passwordChar.length)];
      console.log(randomPw);
    }
    return randomPw;
}


// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}