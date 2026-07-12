// import { countryList } from "./codes.js";
// const BASE_URL =
//   "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (let currCode in countryList) { //Ab hum ik ik currency code ke liyey apna option add karein gi
//     // console.log(currCode);
//     // console.log(currCode, countryList[currCode]); //key currency ha value country code
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode; //yeah dropdown ka text select karey ha is tarah <option>USD</option>
//     newOption.value = currCode; //yeah iskey andar attribute ko is tarah set kare ga value="USD"
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = true;
//     } else if (select.name === "to" && currCode === "PKR") {
//       newOption.selected = true;
//     }
//     select.append(newOption);
//   }
//   select.addEventListener("change", (e) => {
//     updateFlag(e.target);
//   });
// }

// const updateFlag = (element) => {
//   // console.log(element);
//   let selectedCode = element.value;
//   console.log(selectedCode);
//   let contryCode = countryList[selectedCode]; //Pakistan ki liye country code PK
//   let newSrc = `https://flagsapi.com/${contryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img"); //element.parentElement yeah ha
//   //  <div class="select-container"> yani is parent div ki andar jo img tag ha isko pakr lao
//   img.src = newSrc;
// };

// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   console.log(amtVal);
//   if (amtVal === "" || amtVal < 1) {
//     amtVal = 1; // yeah calculation ki liyey ha display ki liyey nai
//     amount.value = "1"; //input.value hamesha string deta ha jaisey "1" ya "10" is tarah
//   }
//   // console.log(fromCurr.value,toCurr.value);
//   let fromCurrency = fromCurr.value.toLowerCase();
//   let toCurrency = toCurr.value.toLowerCase();

//   const URL = `${BASE_URL}/${fromCurrency}.json`;
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
//   const rate = data[fromCurrency][toCurrency]; //data["eur"]["pkr"] is tarah data nikal raha ha
//   const finalAmount = amtVal * rate;
//   console.log(finalAmount);
//   msg.textContent = `${amtVal} ${fromCurrency.toUpperCase()} = ${finalAmount} ${toCurrency.toUpperCase()}`;
// };

// btn.addEventListener("click",(e) => {
//   e.preventDefault();
//   updateExchangeRate();
// });

// document.addEventListener("DOMContentLoaded",updateExchangeRate); // yeah hamara html load hotey he chal jata ha jab ki doosra window wala hota ha wo hamara html or css jab load ho jatey hein tu tab load hota ha

// import { countryList } from "./codes.js";
// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// const dropdowns = document.querySelectorAll("form select");
// const toCurr = document.querySelector(".to select");
// const fromCurr = document.querySelector(".from select");
// const msg = document.querySelector(".msg");
// const btn = document.querySelector("button");

// for (let select of dropdowns) {
//   //outer loop
//   for (let currCode in countryList) {
//     //inner loop //ab hum ik ik currency code ke liye apna new option add karein gi
//     const newOption = document.createElement("option");
//     newOption.textContent = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = true;
//     } else if (select.name === "to" && currCode === "PKR") {
//       newOption.selected = true;
//     }
//     select.append(newOption);
//   }
//   select.addEventListener("change", (e) => {
//     updateFlag(e.target);
//   });
// }

// const updateFlag = (element) => {
//   const selectedCode = element.value;
//   const countryCode = countryList[selectedCode]; //Pakistan countryCode is PK
//   const newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   const img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// const updateExchangeRate = () => {
//   let amount = document.querySelector(".amount input");
//   let amountVal = amount.value;
//   if(amountVal === "" || amountVal < 1){
//     amount.value = "1";
//     amountVal = 1;// yeah calculation ki liyey ha display ki liyey nai
//   }

//   let fromCurrency = fromCurr.value.toLowerCase();
//   let toCurrency = toCurr.value.toLowerCase();

//   console.log(fromCurrency,toCurrency);

//   const URL = `${BASE_URL}/${fromCurrency}.json`;
//   // let response = await fetch(URL);
//   // let data = await response.json();
//   // let rate = data[fromCurrency][toCurrency];

//   // let finalAmount = amountVal * rate;
//   // console.log(finalAmount);

//   fetch(URL)
//   .then((response)=>{
//     return response.json();
//   })
//   .then((data)=>{
//     let rate = data[fromCurrency][toCurrency];
//     let finalAmount = amountVal * rate;
//     msg.textContent = `${amountVal} ${fromCurrency.toUpperCase()} = ${finalAmount} ${toCurrency.toUpperCase()}`;
//   });
// };
// btn.addEventListener("click",(e)=>{
//   e.preventDefault();
//   updateExchangeRate();
// });
// document.addEventListener("DOMContentLoaded",updateExchangeRate);

import { countryList } from "./codes.js";

const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll("form select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const btn = document.querySelector("button");
const msg = document.querySelector(".msg");
let amount = document.querySelector(".amount input");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    //ab hum ik ik currency code nikal kar option me add kartey jaein gi
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = true;
    }
    select.append(newOption);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

const updateFlag = (element) => {
  let selectedCode = element.value; //currency code PKR
  let countryCode = countryList[selectedCode]; //country code PK
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const updateExchangeRate = async () => {
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amount.value = "1";
    amtVal = 1; // yeah caluclation ki liyey ha display ki liyey nai
  }

  const fromCurrency = fromCurr.value.toLowerCase(); //orignal ko hun ne lower case me convert kar diya
  const toCurrency = toCurr.value.toLowerCase(); //orignal ko hum ne lower case me convert kar diya

  const URL = `${BASE_URL}/${fromCurrency}.json`;

  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromCurrency][toCurrency];
  let finalAmount = amtVal * rate;

  msg.textContent = `${amtVal} ${fromCurrency.toUpperCase()} = ${finalAmount} ${toCurrency.toUpperCase()}`;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

document.addEventListener("DOMContentLoaded", updateExchangeRate);
