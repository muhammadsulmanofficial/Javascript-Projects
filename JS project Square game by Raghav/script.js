let s1=document.getElementById("sq1");
let s2=document.getElementById("sq2");
let s3=document.getElementById("sq3");
let s4=document.getElementById("sq4");

s1.addEventListener(("mouseenter"),()=>{
    let r=Math.floor(Math.random()*100)  
    s1.innerHTML=`<h1>${r}</h1>`;
})
s1.addEventListener(("mouseleave"),()=>{
    s1.innerHTML="<h1>1</h1>";
})

let clr="green";
s2.addEventListener(("mouseenter"),()=>{
    if(clr=="green"){
        s2.style.backgroundColor="green";
        clr="red";
    } else if(clr=="red") {
        s2.style.backgroundColor="red";
        clr="blue";
    } else if(clr=="blue") {
        s2.style.backgroundColor="blue";
        clr="orange"; 
     } else if(clr=="orange") {
            s2.style.backgroundColor="orange";
            clr="yellow";  
     } else {
        s2.style.backgroundColor="yellow";
        clr="green"; 
    }
})
s2.addEventListener(("mouseleave"),()=>{
    s2.style.backgroundColor="white";
})

//rgb(a,b,c) where a,b,c lies bw 0 and 255
s3.addEventListener(("mouseenter"),()=>{
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${a},${b},${c})`;
})
s3.addEventListener(("mouseleave"),()=>{
    s3.style.backgroundColor="white";
})

s4.addEventListener(("click"),()=>{
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    s1.style.backgroundColor=`rgb(${a},100,200)`; 
    s2.style.backgroundColor=`rgb(100,${b},200`;
    s3.style.backgroundColor=`rgb(100,200,${c})`; 
})
s4.addEventListener(("mouseleave"),()=>{
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
})

let main=document.getElementById("main");
let cursor=document.getElementById("cursor");
main.addEventListener(("mousemove"),(e)=>{
//    console.log(e.clientX,e.clientY);
   cursor.style.left=e.clientX+"px";
   cursor.style.top=e.clientY+"px";
});

// let main = document.getElementById("main");
// let cursor = document.getElementById("cursor");
// main.addEventListener("mousemove",(e)=>{
//     cursor.style.left=e.clientX+"px";
//     cursor.style.top=e.clientY+"px";
// });


// let main = document.getElementById("main");
// let cursor = document.getElementById("cursor");
// main.addEventListener("mousemove",(e)=>{
//     cursor.style.left=e.clientX+"px";
//     cursor.style.top=e.clientY+"px";
// });

// let main = document.getElementById("main");
// let cursor = document.getElementById("cursor");
// main.addEventListener("mousemove",(e)=>{
//     cursor.style.left= e.clientX+"px";
//     cursor.style.top = e.clientY+"px";
// });

// let sq1 = document.getElementById("sq1");
// let sq2 = document.getElementById("sq2");
// let sq3 = document.getElementById("sq3");
// let sq4 = document.getElementById("sq4");

// //Square1
// sq1.addEventListener("mouseenter",()=>{
//     let genNumber = Math.floor(Math.random()*100);
//     sq1.innerHTML = `<h1>${genNumber}</h1>`;
// });
// sq1.addEventListener("mouseleave",()=>{
//     sq1.innerHTML = "<h1>1</h1>";
// });

// //Square2
// let color="green";
// sq2.addEventListener("mouseenter",()=>{
//     if(color==="green"){
//         sq2.style.backgroundColor="green";
//         color="red";
//     } else if(color==="red"){
//         sq2.style.backgroundColor="red";
//         color="orange";
//     } else if(color==="orange"){
//         sq2.style.backgroundColor="orange";
//         color="yellow";
//     } else if(color==="yellow"){
//         sq2.style.backgroundColor="yellow";
//         color="blue";
//     } else if(color==="blue"){
//         sq2.style.backgroundColor="blue";
//         color="brown";
//     } else {
//         sq2.style.backgroundColor="brown";
//         color="green";
//     }
// });
// sq2.addEventListener("mouseleave",()=>{
//     sq2.style.backgroundColor="white";
// });

// //Square 3
// sq3.addEventListener("mouseenter",()=>{
//     let a = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     let c = Math.floor(Math.random()*256);
//     sq3.style.backgroundColor = `rgb(${a},${b},${c})`;
// });

// sq3.addEventListener("mouseleave",()=>{
//     sq3.style.backgroundColor="white";
// });

// //Square4
// sq4.addEventListener("click",()=>{
//     let rColor = Math.floor(Math.random()*256);
//     sq1.style.backgroundColor=`rgb(${rColor},100,200)`;
//     sq2.style.backgroundColor=`rgb(100,${rColor},200)`;
//     sq3.style.backgroundColor=`rgb(100,200,${rColor})`;
// });
// sq4.addEventListener("mouseleave",()=>{
//     sq1.style.backgroundColor="white";
//     sq2.style.backgroundColor="white";
//     sq3.style.backgroundColor="white";
// });

// let sq1 = document.getElementById("sq1");
// let sq2 = document.getElementById("sq2");
// let sq3 = document.getElementById("sq3");
// let sq4 = document.getElementById("sq4");


// sq1.addEventListener("mouseenter",()=>{
//     let genNumber = Math.floor(Math.random()*100);
//     sq1.innerHTML = `<h1>${genNumber}</h1>`;
// });
// sq1.addEventListener("mouseleave",()=>{
//     sq1.innerHTML = `<h1>${1}</h1>`;
// });
    
    
// let color="green";
// sq2.addEventListener("mouseenter",()=>{
//     if(color==="green"){
//         sq2.style.backgroundColor="green";
//         color="red";
//     } else if (color==="red"){
//         sq2.style.backgroundColor="red";
//         color="blue";
//     } else if(color==="blue"){
//         sq2.style.backgroundColor="blue";
//         color="yellow";
//     } else {
//         sq2.style.backgroundColor="yellow";
//         color="green";
//     }
// });
// sq2.addEventListener("mouseleave",()=>{
//     sq2.style.backgroundColor="white";
// });

// sq3.addEventListener("mouseenter",()=>{
//     let a = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     let c = Math.floor(Math.random()*256);

//     sq3.style.backgroundColor=`rgb(${a},${b},${c})`;
// });

// sq3.addEventListener("mouseleave",()=>{
//     sq3.style.backgroundColor="white";
// });

// sq4.addEventListener("click",()=>{
//     let a = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     let c = Math.floor(Math.random()*256);

//     sq1.style.backgroundColor = `rgb(${a},255,100)`;
//     sq2.style.backgroundColor = `rgb(255,${b},100)`;
//     sq3.style.backgroundColor = `rgb(255,100,${c})`;
// });
// sq4.addEventListener("mouseleave",()=>{
//     sq1.style.backgroundColor="white";
//     sq2.style.backgroundColor="white";
//     sq3.style.backgroundColor="white";
// });