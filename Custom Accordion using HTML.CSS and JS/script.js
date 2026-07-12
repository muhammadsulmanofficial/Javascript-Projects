
// const allCon = document.querySelectorAll(".container");

// allCon.forEach((singleContainer) => {

//     const plusBtn = singleContainer.querySelector(".show");
//     const minusBtn = singleContainer.querySelector(".hide");

//     plusBtn.addEventListener("click", (e) => {
//         e.stopPropagation(); // safety
//         singleContainer.classList.toggle("active");

//         // toggle icons
//         plusBtn.style.display = "none";
//         minusBtn.style.display = "inline";
//     });

//     minusBtn.addEventListener("click", (e) => {
//         e.stopPropagation();
//         singleContainer.classList.toggle("active");

//         minusBtn.style.display = "none";
//         plusBtn.style.display = "inline";
//     });
// });


// const allCon = document.querySelectorAll(".container");


// allCon.forEach((singleContainer)=>{
//     const plusBtn = singleContainer.querySelector(".show");
//     const minusBtn = singleContainer.querySelector(".hide");


//     plusBtn.addEventListener("click",(e)=>{
//         singleContainer.classList.toggle("active");
//         e.stopPropagation();

//         plusBtn.style.display = "none";
//         minusBtn.style.display = "inline";
//     });


//     minusBtn.addEventListener("click",(e)=>{
//         singleContainer.classList.toggle("active");
//         e.stopPropagation();

//         minusBtn.style.display = "none";
//         plusBtn.style.display = "inline";
//     });
// });


// const allCon = document.querySelectorAll(".container");

// allCon.forEach((singleContainer)=>{
//     const plusBtn = singleContainer.querySelector(".show");
//     const minusBtn = singleContainer.querySelector(".hide");


//     plusBtn.addEventListener("click",(e)=>{
//         singleContainer.classList.toggle("active");
//         e.stopPropagation();
//         plusBtn.style.display = "none";
//         minusBtn.style.display = "inline";
//     });


//     minusBtn.addEventListener("click",(e)=>{
//         singleContainer.classList.toggle("active");
//         e.stopPropagation();
//         plusBtn.style.display = "inline";
//         minusBtn.style.display = "none";
//     });
// });

const allCon = document.querySelectorAll(".container");

allCon.forEach((singleContainer)=>{
    const plusBtn = singleContainer.querySelector(".show"); //yeah purey documents say nahi balki issey contianer ki andar say button dhoond raha ah 
    const minusBtn = singleContainer.querySelector(".hide");


    plusBtn.addEventListener("click",(e)=>{
        singleContainer.classList.toggle("active");
        console.log(e);
        e.stopPropagation();

        plusBtn.style.display = "none";
        minusBtn.style.display = "inline";
    });

    minusBtn.addEventListener("click",(e)=>{
        singleContainer.classList.toggle("active");
        console.log(e);
        e.stopPropagation();
        plusBtn.style.display = "inline";
        minusBtn.style.display = "none";
        
    });
});



//Event delegation
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.innerText);
  }
});
