// Assignment Code
var passwordLength;
var lowercaseReq;
var uppercaseReq;
var numberReq;
var specialReq;
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characters = ["!",",","#","$","%","&","'","(","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","]"];
var choice; //to reflect possible character options based on user preferences
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  // Prompt for desired character length of password
  var passwordLength = prompt("Choose a password length between 8 and 128 characters", "16");
  
  // Require field validation
  if (!passwordLength) {
    alert("A number between 8 and 128 is required");
  } 
  else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
  }
  else {
  // Prompt for whether to include lowercase characters 
  var lowercaseReq = confirm("Include lowercase letter(s)?");
  // Prompt for whether to include uppercase characters
  var uppercaseReq = confirm("Include uppercase letter(s)?");
  // Prompt for whether to include numbers
  var numberReq = confirm("Include number(s)?");
  // Prompt for whether to include special characters
  var specialReq = confirm("Include special character(s)?");
  };

  //If user declines all options, provide alert and restart sequence
  if (!lowercaseReq && !uppercaseReq && !numberReq && !specialReq) {
    alert("You must choose at least one criterion.");
    generatePassword();
  //conditional logic for all the different combinations  
  //If user accepts all 4 criteria
  } 
  else if (lowercaseReq && uppercaseReq && numberReq && specialReq) {
    choice = lower.concat(upper, numbers, characters);
  }
  //If user accepts 3 of 4 criteria
  else if (lowercaseReq && uppercaseReq && numberReq) {
    choice = lower.concat(upper, numbers);
  }
  else if (lowercaseReq && uppercaseReq && specialReq) {
    choice = lower.concat(upper, characters);
  }
  else if (lowercaseReq && numberReq && specialReq) {
    choice = lower.concat(numbers, characters);
  }
  else if (uppercaseReq && numberReq && specialReq) {
    choice = upper.concat(numbers, characters);
  }
  //If user accepts 2 of 4 criteria
  else if (lowercaseReq && uppercaseReq) {
    choice = lower.concat(upper);
  }
  else if (lowercaseReq && numberReq) {
    choice = lower.concat(numbers);
  }
  else if (lowercaseReq && specialReq) {
    choice = lower.concat(characters);
  }
  else if (uppercaseReq && numberReq) {
    choice = upper.concat(numbers);
  }
  else if (uppercaseReq && specialReq) {
    choice = upper.concat(characters);
  }
  else if (numberReq && specialReq) {
    choice = numbers.concat(characters);
  }
  //If user accepts 1 of 4 criteria
  else if (lowercaseReq) {
    choice = lower;
  }
  else if (uppercaseReq) {
    choice = upper;
  }
  else if (numberReq) {
    choice = numbers;
  }
  else if (specialReq) {
    choice = characters;
  };
  
  //create a placeholder array for random selection of options from 'choice' variable
  var placeholderArray = [];

  // Make random selection from chosen variables: 
  for (var i = 0; i < passwordLength; i++) {
    var selection = choice[Math.floor(Math.random() * choice.length)];
    placeholderArray.push(selection);
  }

  //Join the password array and convert it to a string
  var password = placeholderArray.join("");

  // Write password to the #password input
  document.querySelector("#password").textContent = password;
}

