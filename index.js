let includeNumbers = false;
let includeSpecial = false;
let passwordLength = 15

let alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let  numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let specialChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let characters = [...alphabets];



function setpasswordLength() {
     passwordLength = document.getElementById("number").value
}

// Function to update the character set based on checkboxes
function updateCharacters() {
    characters = [...alphabets];  // Reset to alphabets
    if (includeNumbers) characters.push(...numbers);
    if (includeSpecial) characters.push(...specialChars);
}

// Toggle number inclusion
function toggleNumbers() {
    includeNumbers = !includeNumbers;
    updateCharacters();
}

// Toggle special character inclusion
function toggleSpecialChars() {
    includeSpecial = !includeSpecial;
    updateCharacters();
}


let password1 = ""
let password2 = ""
let pwd1 = document.getElementById("pwd1")
let pwd2 = document.getElementById("pwd2")


function generatePassword(){
    let password = ""
    for(let i=1;i<=passwordLength;i++){
    let key1 = Math.floor(Math.random()*characters.length)
    let key = key1
    password += characters[key]
   }
   return password
}


function generatePass(){
     password1 = generatePassword()
     password2 = generatePassword()
    pwd1.textContent = password1
    pwd2.textContent = password2
}

function copy1(){
    if(password1 === ""){
        alert("Generate password first")
        return
    }else{
    navigator.clipboard.writeText(password1);
  // Alert the copied text
  alert("Copied the text: " + password1);
    }
}

function copy2(){
    if(password2 === ""){
        alert("Generate password first")
        return
    }else{
    navigator.clipboard.writeText(password2);
  // Alert the copied text
  alert("Copied the text: " + password2);
    }
}

