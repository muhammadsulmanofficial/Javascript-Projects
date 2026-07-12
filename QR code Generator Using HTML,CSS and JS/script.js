// const qrText = document.getElementById("qr-text");
// const sizes = document.getElementById("sizes");
// const generateBtn = document.getElementById("generateBtn");
// const downloadBtn = document.getElementById("downloadBtn");
// const qrContainer = document.querySelector(".qr-body");


// let size = sizes.value;

// sizes.addEventListener("change",(e)=>{
//     size = e.target.value;
//     qrContainer.innerHTML="";
//     // isEmptyInput(); // Sirf text check karega
// });


// generateBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     isEmptyInput();
// });



// downloadBtn.addEventListener("click",(e)=>{
//     let img = document.querySelector(".qr-body img");
//     let canvas = document.querySelector(".qr-body canvas");

//     if(!img && !canvas){
//         e.preventDefault();
//         alert("Please generate the QR code first!");
//         return;
//     }

//     if(img){
//         downloadBtn.href = img.src;
//     } else {
//         downloadBtn.href = canvas.toDataURL();
//     }
// });


// const isEmptyInput = ()=>{
// if(qrText.value.trim().length > 0){
//         generateQRCode();
//     } else {
//         alert("Enter the text or URL to generate your QR Code!");
//     }
// }
// const generateQRCode = () =>{
//     // Pehle purana QR code remove karo
//     qrContainer.innerHTML = "";
//     new QRCode(qrContainer, { // idhar "qrContainer" hamara us HTML ka reference ha jahaan par Hum ne QR code ko show karwana hota ha
//         text : qrText.value,
//         height:size,
//         width:size,
//         colorLight : "#ffffff",
//         colorDark : "#000000",
//     });
// }
// const qrText = document.getElementById("qr-text");
// const sizes = document.getElementById("sizes");
// const generateBtn = document.getElementById("generateBtn");
// const downloadBtn = document.getElementById("downloadBtn");
// const qrContainer = document.querySelector(".qr-body");



// let size = sizes.value;

// sizes.addEventListener("change",(e)=>{
//     size=e.target.value;
//     qrContainer.innerHTML="";
// });

// downloadBtn.addEventListener("click",(e)=>{
//     let img=document.querySelector(".qr-body img");
//     let canvas=document.querySelector(".qr-body canvas");

//     if(!img && !canvas){
//         alert("Please generate the QR code first!");
//     }

//     if(img){
//         downloadBtn.href=img.src;
//     } else {
//         downloadBtn.href=canvas.src;
//     }
// });

// const isEmptyInput =()=>{
//     if(qrText.value.trim().length > 0){
//         generateQRCode();
//     } else {
//         alert("Enter the text or URL to generate your QR Code!");
//     }
// }

// const generateQRCode =()=>{

//     qrContainer.innerHTML="";

//     new QRCode(qrContainer, { /* qrContainer hamara us html ka reference ha jahan par hamara QR Code bney ga */
//         text : qrText.value,
//         width : size,
//         height : size,
//         colorLight : "#ffffff",
//         colorDark : "#000000", 
//     });
// }


// generateBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     isEmptyInput();
// });

// const qrText = document.getElementById("qr-text");
// const sizes = document.getElementById("sizes");

// const generateBtn = document.getElementById("generateBtn");
// const downloadBtn = document.getElementById("downloadBtn");

// const qrContainer = document.querySelector(".qr-body");


// let size=sizes.value;

// sizes.addEventListener("change",(e)=>{
//     size=e.target.value;
//     qrContainer.innerHTML="";
// })

// const isEmptyInput =()=> {
//     if(qrText.value.trim().length > 0){
//         generateQRCode();
//     } else {
//         alert("Enter the text or URL to generate your QR Code!");
//     }
// }

// downloadBtn.addEventListener("click",()=>{
//     let img =document.querySelector(".qr-body img");
//     let canvas = document.querySelector(".qr-body canvas");


//     if(!img && !canvas){
//         alert("Please generate the QR Code first!");
//     }


//     if(img){
//         downloadBtn.href=img.src;
//     } else {
//         downloadBtn.href = canvas.src;
//     }
// })

// generateBtn.addEventListener("click", (e)=>{
//     e.preventDefault();
//     isEmptyInput();
// })

// const generateQRCode =()=>{
//     qrContainer.innerHTML="";

//     new QRCode(qrContainer, {
//         text : qrText.value,
//         width : size,
//         height: size,
//         colorLight : "#ffffff",
//         colorDark : "#000000",
//     });
// }


const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");

const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.querySelector(".qr-body");


let size = sizes.value;

sizes.addEventListener("change",(e)=>{
    size=e.target.value;
    qrContainer.innerHTML="";
});

downloadBtn.addEventListener("click",()=>{
    let img = document.querySelector(".qr-body img");
    let canvas = document.querySelector(".qr-body canvas");

    if(!img && !canvas){
        alert("Please Generate the QR Code first.");
    }

    if(img){
        downloadBtn.href=img.src;
    } else {
        downloadBtn.href=canvas.src;
    }
})


generateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    isEmptyInput();
})


const isEmptyInput = ()=>{
    if(qrText.value.trim().length>0){
        generateQRCode();
    } else {
        alert("Enter the text or URL to generate your QR Code!");
    }
}


const generateQRCode = ()=>{
    new QRCode(qrContainer,{
        text : qrText.value,
        width: size,
        height : size,
        colorLight : "#ffffff",
        colorDark : "#000000", 
    });
}