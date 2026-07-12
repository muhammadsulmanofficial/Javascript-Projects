// let input = document.getElementById("inputBox");
// let buttons = document.querySelectorAll("button");

// let string="";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener("click", (e) => {
//         if (e.target.innerText === '=') {
//             string = eval(string);
//             input.value = string;
//         } else if(e.target.innerText === "AC"){
//             string = "";
//             input.value = string;
//         } else if(e.target.innerText === "DEL"){
//             string = string.substring(0,string.length-1);
//             input.value = string;
//         } else {
//             string+=e.target.innerText;
//             console.log(string);
//             input.value = string;
//         }     
//     })
// });

let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");

let string="";
let arr = Array.from(buttons);
arr.forEach((button) =>{
    button.addEventListener("click",(e)=>{
        let btn = e.target.innerText;

        if(btn === "="){
            string=eval(string);
            input.value=string;
        } else if(btn === "AC"){
            string="";
            input.value=string;
        } else if(btn === "DEL"){
            string=string.slice(0,string.length-1); //(string.lenght-1 ya -1)
            input.value=string;
        } else {
            string+=e.target.innerText;
            input.value=string;
        }
    })
})

//key board ki zariey calculator chalaney ki liye
document.addEventListener("keydown", (e)=> {
    let key=e.key;

    if ("0123456789+-*/.%()".includes(key)) {
        string += key;
        input.value = string;
    }
    if (key === "Enter") {
        try {
            string = eval(string);
            input.value=string;
        } catch (error) {
            input.value = "Error";
        }
    }

    if (key === "Backspace") {
        string = string.slice(0, -1); //-1 ka matlab hota hai string ke last character se 1 pehle tak
        input.value = string;
    }


    e.preventDefault();
     
})