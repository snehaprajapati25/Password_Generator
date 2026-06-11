const password = document.querySelector('#password');
const slider = document.querySelector('#slider');
const length = document.getElementById("length-value");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copy = document.getElementById("copy");

// Update length text
slider.addEventListener('input', () =>{
    length.innerHTML = slider.value;
})

//generate password
generateBtn.addEventListener('click', ()=>{
    // Add selected character sets
    let characters = "";

    if (upper.checked) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lower.checked) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if(number.checked){
        characters += "0123456789";
    }

    if(symbols.checked){
        characters +=  "!@#$%^&*()_+-={}[]<>?"
    }

    // If no option selected
    if (characters === "") {
        alert("Please select at least one option!");
        return;
    }

    let generatePassword = "";
    for(let i=0; i<slider.value; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        generatePassword += characters[randomIndex];
    }

    password.value = generatePassword;
})



copy.addEventListener("click", () => {
    if(password.value === ""){
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(password.value);

    copy.innerHTML = "✔";

    setTimeout(() => {
        copy.innerHTML = "📋";
    }, 1000);
});