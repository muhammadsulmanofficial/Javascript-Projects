const tittle = document.getElementById("tittle");
const nameField = document.getElementById("nameField");
const confirmPassField = document.getElementById("confirmpassField");
const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.querySelector("#signupBtn a");
const signinafterBtn = document.querySelector("signup");

const loginBtn = document.querySelector(".login");

signupBtn.addEventListener("click", () => {
  tittle.innerText = "Sign Up";
  nameField.style.display = "block";
  confirmPassField.style.display = "block";
  document.querySelector(".signup").style.display = "none";
  document.querySelector(".login").style.display = "block";
});

loginBtn.addEventListener("click", () => {
  tittle.innerText = "Login";
  nameField.style.display = "none";
  confirmPassField.style.display = "none";
  document.querySelector(".signup").style.display = "block";
  document.querySelector(".login").style.display = "none";
});
