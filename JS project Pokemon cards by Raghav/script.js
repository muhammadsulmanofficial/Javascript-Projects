// let main=document.querySelector("#main");
// let arr=["1.jpeg","3.jpeg","4.jpeg","5.jpeg","2.jpeg","6.jpeg"];
// let s="";
// for(let i=1; i<=48; i++){
//    let r=Math.floor(Math.random()*arr.length);
//    s=s+`<div class="card"><img src=${arr[r]}></div>`;
// }
// main.innerHTML=s;

// let main=document.getElementById("main");
// let arr = ["1.jpeg","3.jpeg","4.jpeg","5.jpeg","2.jpeg","6.jpeg"];
// let s="";
// for(let i=1; i<=48; i++){
//    let genNum=Math.floor(Math.random()*arr.length);
//    s=s+`<div class="card"><img src=${arr[genNum]}></div>`;
// }
// main.innerHTML=s;

// let main = document.getElementById("main");
// let arr = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg"];
// let str="";

// for(let i=1; i<=48; i++){
//    let genNum=Math.floor(Math.random()*arr.length);
//    str=str+`<div class="card"><img src=${arr[genNum]}></div>`;
// }
// main.innerHTML=str;

// let main=document.getElementById("main");
// let arr=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg"];
// let str="";
// for(let i=1; i<=48; i++){
//    let genNum = Math.floor(Math.random()*arr.length);
//    str=str+`<div class="card"><img src=${arr[genNum]}></div>`;
// }
// main.innerHTML = str;

let main = document.getElementById("main");
let arr = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg"];

let str="";
for(let i=1; i<=48; i++){
   let genNum = Math.floor(Math.random()*arr.length);
   str=str+`<div class="card"><img src=${arr[genNum]}></div>`;
};
main.innerHTML=str;