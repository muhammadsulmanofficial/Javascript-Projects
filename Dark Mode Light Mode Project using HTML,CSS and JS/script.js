const body=document.querySelector("body");
const button = document.querySelector(".btn");
const tittle = document.querySelector("title");

let currMode="light";
button.addEventListener("click",(e)=>{
    if(currMode==="light"){
        currMode="black";
        tittle.textContent="Dark Mode On";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
        tittle.textContent="Light Mode On";
    }
});
