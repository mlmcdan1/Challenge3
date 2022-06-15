// Assignment code here
var password=document.getElementById("password");
var password = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event){
  event.preventDefault();

//asks for the length of password
  let lengthInputQuestion = window.prompt("What is the length of your string?");


//empty array for options
  let chooseOptions = [];

// Questions that we're going to ask the users
  let questionLoopArray = [
    "Do you want Lower Case?", 
    "Do you want upper case? ",
    "Do you want numerics? ", 
    "Do you want special characters?"
  ];

 // Loops through the array of questions for user
  for (let i=0; i< questionLoopArray.length; ++i){
    let userPrompt = window.prompt(questionLoopArray[i] + "Type yes or no");
    
  // if yes 
    if (userPrompt.toLowerCase()== "yes"){
        chooseOptions.push(i)
      }
      
    }
  
    
// calls generatePassword function
  var password = generatePassword(Number(lengthInputQuestion), chooseOptions);

  var passwordText = document.querySelector("#password");

  var divHeader = document.querySelector(".card-header");

  passwordText.value = password;
}


function generatePassword(length , array){

  //array of lower case letters
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  //makes lower case letters all capitol 
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  //array of numbers 
  const numbers = "0123456789";
  //array of special characters
  const special = ['@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ';',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  ']',
  '~',
  '-',
  '_',
  '.'].join("");

  //empty string
  let generateString = "";

  //loop 
  for (let i = 0; i<length; ++i)
  {

  //selects random number in range of the length
  let randomNumberWithRangeOfArrayOfOptions = array[Math.floor(Math.random() * array.length)];
  console.log(randomNumberWithRangeOfArrayOfOptions)


  //random numbers picks one of the options 
  switch (randomNumberWithRangeOfArrayOfOptions){
    case 0:
      generateString += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
    break;

    case 1:
      generateString += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]    
      break

    case 2:
      generateString += numbers[Math.floor(Math.random() * numbers.length)]
      break

    case 3:
      generateString += special[Math.floor(Math.random() * special.length)]
      break
    default:
      console.log("error")
   }
  }
  //returns the string
  return  generateString
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
