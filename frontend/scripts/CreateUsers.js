const registerForm = document.querySelector("#register-from");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");


console.log(registerForm);
console.log(fullnameInput);
console.log(emailInput);
console.log(passwordInput);

registerForm.addEventListener("submit" , async(e) => {
    e.preventDefault();
    console.log("Form Submitted");

    const newUser = {
        fullname : fullnameInput.value,
        email : emailInput.value,
        password : passwordInput.value,
    };


    console.log(newUser);

//!SEND NEWUSER TO DATABASE
await fetch("https://permium-js.onrender.com/users", {
    method : "POST",
    body : JSON.stringify(newUser),
    headers : { 
        "content-type" : "application/json"
    }
}) 



//!NAVIGATE TO ALL USER PAGE
window.location.href = "AllUsers.html"
    
});




