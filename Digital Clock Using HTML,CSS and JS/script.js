const time=document.getElementById("time");
const timeFormat=document.getElementById("timeFormat");

document.addEventListener("DOMContentLoaded",()=>{
    setInterval(showTime,1000);
});

const showTime =()=>{
    let date=new Date(); //yeah humey current date nikaal kar deta ha

    let hrs=date.getHours();
    let mins=date.getMinutes();
    let secs=date.getSeconds();

    let orignalHours=hrs;

    /* Convert 24-hour to 12-hour */
    if (hrs === 0) {
        hrs = 12;        // midnight → 12
    } else if (hrs > 12) {
        hrs = hrs - 12;  // 13 → 1
    }
    /* Format Time */
    hrs=hrs < 10 ? `0${hrs}` : hrs;
    mins=mins < 10 ? `0${mins}` : mins;
    secs=secs < 10 ? `0${secs}` : secs;


    time.textContent = `${hrs}:${mins}:${secs}`;
    timeFormat.textContent = orignalHours >= 12 ? "PM" : "AM";
    // console.log(`hours ${hrs} mins ${mins} secs ${secs}`);
}

// let time = document.getElementById("time");
// let timeFormat = document.getElementById("timeFormat");

// document.addEventListener("DOMContentLoaded",()=>{
//     setInterval(showTime,1000);
// });


// const showTime =()=>{
//     let date = new Date();
    
//     let hrs = date.getHours();
//     let mins = date.getMinutes();
//     let secs = date.getSeconds();


//     let orignalHours = hrs;
//     /* Convert 24 hours to 12 hours */
//     if(hrs===0){
//         hrs=12;
//     } else if(hrs > 12 ){
//         hrs = hrs -12;
//     }

//     /* Format Time */
//     hrs = hrs < 10 ? `0${hrs}` : hrs;
//     mins = mins < 10 ? `0${mins}` : mins;
//     secs = secs < 10 ? `0${secs}` : secs;

//     time.textContent = `${hrs} : ${mins}: ${secs}`;
//     timeFormat.textContent = orignalHours >=12 ? "PM" : "AM";
// }



// const time=document.getElementById("time");
// const formatTime = document.getElementById("formatTime");


// document.addEventListener("DOMContentLoaded",()=>{
//     setInterval(showTime,1000);
// });


// const showTime =()=>{
//     let date = new Date();

//     let hours=date.getHours();
//     let mins=date.getMinutes();
//     let secs=date.getSeconds();

//     let orignalHours=hours;

//     if(hours===0){
//         hours=12;
//     } else if(hours > 12){
//       hours=hours-12;  
//     }



//     hours = hours < 10 ? `0${hours}` : hours;
//     mins = mins < 10 ? `0${mins}` : mins;
//     secs = secs < 10 ? `0${secs}` : secs;

//     time.textContent=`${hours}:${mins}:${secs}`;
//     formatTime.textContent=orignalHours >=12 ? "PM":"AM"; 

// }