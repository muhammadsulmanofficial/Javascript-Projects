const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const allPages = document.querySelector("#pages");

menuBtn.addEventListener("click",toggleMenu);
closeBtn.addEventListener("click",toggleMenu);


function toggleMenu(){
    menuBtn.classList.toggle("hide");
    closeBtn.classList.toggle("show");
    allPages.classList.toggle("active");
}
 


