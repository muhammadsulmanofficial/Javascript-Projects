/* Yeah mera video wala code ha */

// const menuBtn = document.querySelector(".menuBtn");
// const closeBtn = document.querySelector(".closeBtn");

// const pages = document.querySelector("#pages");

// menuBtn.addEventListener("click",()=>{
//     pages.style.display = "block";
//     closeBtn.style.display = "block";
//     menuBtn.style.display = "none";
// });


// closeBtn.addEventListener("click",()=>{
//     menuBtn.style.display = "block";
//     closeBtn.style.display = "none";
//     pages.style.display = "none";
// });



/* Updated Code */
// const menuBtn = document.querySelector(".menuBtn");
// const closeBtn = document.querySelector(".closeBtn");

// const pages = document.querySelector("#pages");

// menuBtn.addEventListener("click",()=>{
//     menuBtn.classList.add("hide");
//     closeBtn.classList.add("show");
//     pages.classList.add("active");
// });

// closeBtn.addEventListener("click",()=>{
//     menuBtn.classList.remove("hide");
//     closeBtn.classList.remove("show");
//     pages.classList.remove("active");
// });


const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".closeBtn");
const pages = document.querySelector("#pages");

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle("hide");
    closeBtn.classList.toggle("show");
    pages.classList.toggle("active");
}

/* 
اس ایک لائن کا مطلب
 :اگر active class نہیں ہے → add کر دو

اگر active class ہے → remove کر دو

⚡ بس یہی toggle ہے */