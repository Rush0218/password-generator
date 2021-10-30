// Assignment Code
var generateBtn = document.querySelector("#generate");


var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "/", ">", "<", "?", "[", "]", "{", "}", "|","`", "~", ".", ","];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]; 
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 

var response; 

//generate random password
function generatePassword() {
    //function asking for the length of requested password
    var passwordLength = parseInt(window.prompt("How many characters would you like your password to contain? Choose between 8 and 128.")); 
        //if the user does not provide an input
        if(!passwordLength) {
                wondow.alert("Please provide an input!");
            } else if (passwordLength < 8 || passwordLength > 128) {
                window.alert("You must choose between 8 and 128 characters. Please try again.")
                return generatePassword(); 
            } else {
                var characterSet = window.confirm("Would you like to include special characters in your password?"); 
                var numberSet = window.confirm("Would you like to include numbers in your password?"); 
                var lowerSet = window.confirm("Would you like to include lowercase letters in your password?"); 
                var upperSet = window.confirm("Would you like to include uppercase letters in you password?"); 
            }; 

            //if they decline all options
            if (!characterSet && !numberSet && !lowerSet && !upperSet) {
                window.alert("Invalid! you must choose a criteria, try again.")
                return generatePassword();
            } else if (characterSet && numberSet && lowerSet && upperSet) {
                response = character.concat(numbers, lower, upper); 
            } else if (characterSet && numberSet && lowerSet) {
                response = character.concat(numbers, lower); 
            } else if (characterSet && numberSet && upperSet) {
                response = character.concat(numbers, upper); 
            } else if (characterSet && lowerSet && upperSet) {
                response = character.concat(lower, upper); 
            } else if (characterSet && numberSet) {
                response = character.concat(numbers); 
            } else if (characterSet && lowerSet) {
                response = character.concat(lower); 
            } else if (characterSet && upperSet) {
                response = character.concat(upper); 
            } else if (numberSet && lowerSet && upperSet) {
                response = numbers.concat(lower, upper); 
            } else if (numberSet && lowerSet) {
                choies = numbers.concat(lower); 
            } else if (numberSet && upperSet) {
                response = numbers.concat(upper); 
            } else if (lowerSet && upperSet) {
                response = lower.concat(upper); 
            } else if (characterSet) {
                response = character; 
            } else if (numberSet) {
                response = numbers; 
            } else if (lowerSet) {
                response = lower; 
            } else if (upperSet) {
                response = upper; 
            }; 

            var password = []; 

            for(var i = 0; i < passwordLength; i++) {
                var selection = response[Math.floor(Math.random() * response.length)]; 
                password.push(selection); 
            }

            var finalPass = password.join(""); 
            UserInput; 
            return finalPass; 
};
 

function UserInput(finalPass) {
    document.getElementById("password").textContent = finalPass; 
}

//add event listener to generate button
generateBtn.addEventListener("click", function() {
    pass = generatePassword(); 
    document.getElementById("password").placeholder = pass; 
});
