const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");

const passBox = document.getElementById("passBox");
const genBtn = document.getElementById("genBtn");
const copyIcon = document.getElementById("copyIcon");

const lowerCase = document.getElementById("lowercase");
const upperCase = document.getElementById("uppercase");
const Numbers = document.getElementById("numbers");
const Symbols = document.getElementById("symbols");

//Showing input slide value
sliderValue.textContent = inputSlider.value; //page load hotey he slider ki current value number ki toor par dekha do
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const allNumbers = "0123456789";
const allSymbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~";

//Function to show generate Password
const generatePassword = () => {
  let genPassword = "";

  let allChars = "";
  allChars = allChars + (upperCase.checked ? upperChars : ""); //agar uppercase char hamara checked he yani user ne agar check kiya tu hamara upperChars daal do allChars me nai tu kuch na daalo, yhi same logic ha hamara in sab ki liyey matlab yeah ho checked ha na yeah checkbox ki halat btata ha agar checked ho true , unchecked ho false
  allChars = allChars + (lowerCase.checked ? lowerChars : "");
  allChars = allChars + (Numbers.checked ? allNumbers : "");
  allChars = allChars + (Symbols.checked ? allSymbols : "");

  /* is tarah mere chars string me add ho rahey hein
  upperCase.checked → true
      allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  lowerCase.checked → true
      allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  Numbers.checked → true
      allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  Symbols.checked → true
      allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$..."
  */

  if (allChars === "" || allChars.length === 0) {
    //agar user ne koi check box select hi nai kiya tu hamara password nai bney ga
    return genPassword;
  }

  let length = Number(inputSlider.value); //slider say password ki length li
  for(let i=0; i<length; i++){
    genPassword =
      genPassword +
      allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return genPassword; //Function finished, password wapis button ko de diya
};

copyIcon.addEventListener("click", () => {
  if (passBox.value !== "" || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value); //password clipboard me chala gya
    copyIcon.textContent = "check";
    copyIcon.style.userSelect = "none";
    copyIcon.title = "Password Copied";

    setTimeout(() => {
      copyIcon.textContent = "content_copy";
      copyIcon.title = "";
    }, 2000);
  }
});
/* Yeah wala project mera ofline sahi work karey ga,agar me online use karun ga to mere password copied nai hoga */

/* Waisey samjhney ki liyey */
// if (upperCase.checked) {
//   console.log("Uppercase on hai yani Checked mark ha");
// } else {
//   console.log("Check band ha");
// }

// let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //chars length = 26 index 0-25

// for (let i=0; i<26; i++) {
//   let rand = Math.floor(Math.random() * chars.length); //0-25 tak ha
//   console.log(chars.charAt(rand));
// }
