const hamburgerBtn = document.querySelector(".hamburger");
const navlist = document.querySelector(".navlist");
const navicons = document.querySelector(".nav-icons");

console.log(navicons);



hamburgerBtn.addEventListener("click",()=>{
    navlist.classList.toggle("active");
    navicons.classList.toggle("active");
});