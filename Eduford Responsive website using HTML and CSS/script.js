const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const navList = document.querySelector(".nav-links");

menuBtn.addEventListener("click",toggleMenu);
closeBtn.addEventListener("click",toggleMenu);


console.log(menuBtn);
console.log(closeBtn);
console.log(navList);



function toggleMenu(){
    navList.classList.toggle("active");
    closeBtn.classList.toggle("show");
    menuBtn.classList.toggle("hide");
}