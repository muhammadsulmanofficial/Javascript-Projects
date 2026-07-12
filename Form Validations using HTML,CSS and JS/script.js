const submitBtn = document.getElementById("submitBtn"); 

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

document.getElementById("name").addEventListener("input",validateName);
document.getElementById("email").addEventListener("input",validateEmail);
document.getElementById("password").addEventListener("input",validatePassword);
document.getElementById("confirmPassword").addEventListener("input",validateConfirmPassword);


const nameIcon = document.getElementById("nameIcon");
const emailIcon = document.getElementById("emailIcon");
const passwordIcon = document.getElementById("passwordIcon");  
const confirmIcon = document.getElementById("confirmIcon");

submitBtn.addEventListener("click",(e)=>{
    if(validateName() && validateEmail() && validatePassword() && validateConfirmPassword()){
        alert("form submitted successfuly.");
        document.querySelector("form").reset();
        nameIcon.classList.remove("fa-check");
        emailIcon.classList.remove("fa-check");
        passwordIcon.classList.remove("fa-check");
        confirmIcon.classList.remove("fa-check");
    }
});


// Name Validation
function validateName(){
    let name = document.getElementById("name").value;
    if(name.length === 0){
        nameError.innerText="Name is required";
        nameIcon.classList.add("fa-xmark","invalid");
        nameIcon.classList.remove("fa-check","valid");
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerText="Enter Full Name";
        nameIcon.classList.add("fa-xmark","invalid");
        nameIcon.classList.remove("fa-check","valid");
        return false;
    }
    nameError.innerText="";
    nameIcon.classList.add("fa-check","valid");
    nameIcon.classList.remove("fa-xmark","invalid");
    return true;
}

// Email Validation
function validateEmail(){
    let email = document.getElementById("email").value;
    if(email.length === 0){
        emailError.innerText="Email is required";
        emailIcon.classList.add("fa-xmark","invalid");
        emailIcon.classList.remove("fa-check","valid");
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerText="Enter Valid Email";
        emailIcon.classList.add("fa-xmark","invalid");
        emailIcon.classList.remove("fa-check","valid");
        return false;
    }
    emailError.innerText="";
    emailIcon.classList.add("fa-check","valid");
    emailIcon.classList.remove("fa-xmark","invalid");
    return true;
}

// Password Validation
function validatePassword(){
    let password = document.getElementById("password").value;
    if(password.length === 0){
        passwordError.innerText="Password is required";
        passwordIcon.classList.add("fa-xmark","invalid");
        passwordIcon.classList.remove("fa-check","valid");
        return false;
    }
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)){
        passwordError.innerText="Password should contain 1 Uppercase, 1 Lowercasae , 1 Digit & 1 Alphabet";
        passwordIcon.classList.add("fa-xmark","invalid");
        passwordIcon.classList.remove("fa-check","valid");
        return false;
    }
    passwordError.innerText="";
    passwordIcon.classList.add("fa-check","valid");
    passwordIcon.classList.remove("fa-xmark","invalid");
    return true;
}

//Confirm password validation
function validateConfirmPassword(){
    let password=document.getElementById("password").value;
    let confirmPass=document.getElementById("confirmPassword").value;
    if(confirmPass.length==0){
        confirmError.innerText="Confirm is required";
        confirmIcon.classList.add("fa-xmark","invalid");
        confirmIcon.classList.remove("fa-check","valid");
    }
    if(confirmPass !== password){
        confirmError.innerText="Password does not match";
        confirmIcon.classList.add("fa-xmark","invalid");
        confirmIcon.classList.remove("fa-check","valid");
        return false;
    }
    confirmError.innerText="";
    confirmIcon.classList.add("fa-check","valid");
    confirmIcon.classList.remove("fa-xmark","invalid");
    return true;
}