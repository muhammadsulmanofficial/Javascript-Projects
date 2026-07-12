// let counting=document.querySelector(".heading");
// let currValue=0;
// let decrementBtn=document.querySelector(".d-btn");
// let resetBtn=document.querySelector(".r-btn");
// let incrementBtn=document.querySelector(".i-btn");

// incrementBtn.addEventListener("click",()=>{
//     currValue++; 
//     counting.textContent=currValue;
// });
// decrementBtn.addEventListener("click",()=>{
//     currValue--;
//     counting.textContent=currValue;
// });
// resetBtn.addEventListener("click",()=>{
//     currValue=0;
//     counting.textContent=currValue;
// });
    
















let counting = document.querySelector(".heading");

let currValue = 0;
let decrementBtn = document.getElementById("d-btn");
let resetBtn = document.getElementById("r-btn");
let incrementBtn = document.getElementById("i-btn");


incrementBtn.addEventListener("click",()=>{
    currValue++;
    counting.textContent=currValue;
});
decrementBtn.addEventListener("click",()=>{
    currValue--;
    counting.textContent=currValue;
});
resetBtn.addEventListener("click",()=>{
    currValue=0;
    counting.textContent=currValue;
});

