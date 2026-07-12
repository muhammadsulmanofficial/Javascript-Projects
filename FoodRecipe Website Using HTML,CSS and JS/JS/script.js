const menuBtn = document.querySelector(".menuBtn");
const pages = document.querySelector("#pages");

menuBtn.addEventListener("click",()=>{
    pages.classList.toggle("active");
});