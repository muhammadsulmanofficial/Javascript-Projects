// const date = new Date(); //yeah humey current date deta ha
// console.log(date);


const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("seconds");


const targetDate = new Date("15 December 2025 6:00"); //"Month Day Year HH:MM:SS"


const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}
const updateCounter = (deadline) =>{ //parameter, function ke andar temporary variable, yeh copy hai targetDate ki
    const currentTime = new Date();
    const timeDifference = deadline-currentTime;  //miliseconds
    
    const calcSecs = Math.floor(timeDifference/1000)%60;
    const calcMins = Math.floor(timeDifference/1000/60)%60;
    const calcHours = Math.floor(timeDifference/1000/60/60)%24;
    const calcDays = Math.floor(timeDifference/1000/60/60/24);


    secs.textContent = formatTime(calcSecs);
    mins.textContent = formatTime(calcMins);
    hours.textContent = formatTime(calcHours);
    days.textContent = formatTime(calcDays);
}


const countDown = () => {
    setInterval(()=>{
        updateCounter(targetDate);
    },1000);
}
countDown();