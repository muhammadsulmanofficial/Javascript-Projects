// const slides = document.querySelectorAll(".slide");

// const prev = document.querySelector("#prev");
// const next = document.querySelector("#next");

// let counter = 0;

// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

// const slideImage = () => {
//   slides.forEach((slide) => {
//     slide.style.transform = `translateX(-${counter * 100}%)`; //CSS transform property hai jo element ko horizontal axis (X-axis) par move karne ke liye use hoti hai.
//     console.log(slide);
//   });
// };

// /* value positive ho → element right move hota hai

// value negative ho → element left move hota hai */

// const goNext = () => {
//   if (counter < slides.length - 1) { // means last image ki baad next nai chaley gi
//     counter++;
//   } else {
//     counter = 0;
//   }
//   slideImage();
// };

// const goPrev = () => {
//   if (counter > 0) {
//     // means first image say pehley prev nai chaley gi
//     counter--;
//     slideImage();
//   }
// };

// let autoPlay = setInterval(() => {
//   goNext();
// }, 2000);

// prev.addEventListener("click", goPrev);
// next.addEventListener("click", goNext);

// const slides = document.querySelectorAll(".slide");
// const prev = document.querySelector("#prev");
// const next = document.querySelector("#next");
// let counter = 0;

// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

// const slideImage = () => {
//   slides.forEach((slide) => {
//     slide.style.transform = `translateX(-${counter * 100}%)`;
//   });
// };

// const nextSlides = () => {
//   if(counter < slides.length-1){
//     counter++;
//   } else {
//     counter=0
//   }
//   slideImage();
// };

// const prevSlides = ()=>{
//   if(counter > 0){
//     counter--;
//   }
//   slideImage();
// }

// let autoPlay = setInterval(()=>{
//   nextSlides();
// },2000);

// prev.addEventListener("click", prevSlides);
// next.addEventListener("click", nextSlides);



// const slides = document.querySelectorAll(".slide");

// let counter = 0;

// const prev = document.querySelector("#prev");
// const next = document.querySelector("#next");

// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

// const slideImage = () => {
//   slides.forEach((slide) => {
//     slide.style.transform = `translateX(-${counter * 100}%)`;
//   });
// };

// const goNext = () => {
//   if (counter < slides.length-1) {
//     counter++;
//   } else {
//     counter = 0;
//   }
//   slideImage();
// };

// const goPrev = () => {
//   if(counter > 0) {
//     counter--;
//   } else {
//     counter = 0;
//   }
//   slideImage();
// };


// let autoPlay = setInterval(()=>{
//   goNext();
// },3000);

// next.addEventListener("click", goNext);
// prev.addEventListener("click", goPrev);



const slides = document.querySelectorAll(".slide");

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");


let counter = 0;


slides.forEach((slide,index)=>{
  slide.style.left = `${index*100}%`;
});


const slideImage = () => {
  slides.forEach((slide)=>{
    slide.style.transform = `translateX(-${counter*100}%)`;
  });
}



const goNext = () => {
  if(counter < slides.length-1){
    counter++;
  } else {
    counter = 0;
  }
  slideImage();
}


const goPrev = () => {
  if(counter > 0){
    counter--;
  }
  slideImage();
}


let autoPlay = setInterval(()=>{
  goNext();
},3000);

next.addEventListener("click",goNext); 
prev.addEventListener("click",goPrev); 