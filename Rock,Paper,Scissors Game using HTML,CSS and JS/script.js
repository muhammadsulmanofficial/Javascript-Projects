let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const startGame=document.querySelector("#btn1");
const resetGame=document.querySelector("#btn2");
const buttons=document.querySelector(".buttons");
const heading=document.createElement("h2");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  //rock,paper,scissors
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * options.length); //Math (Class) ha // random (Method) ha
  return options[randIdx];
};

const drawGame = () => {
  // console.log("game was draw.");
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("you win!");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    // console.log("you lose");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //Generate Computer choice
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissors ,rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }

  if (userScore === 5 || compScore === 5) {
    msg.innerText =
      userScore === 5 ? "🎉 You won the match!" : "😢 Computer won!";
    choices.forEach(choice => choice.style.pointerEvents = "none");
  }
};


resetGame.addEventListener("click",()=>{
  choices.forEach(choice => choice.style.pointerEvents="none");
  userScore=0;
  compScore=0;
  userScorePara.innerText=userScore;
  compScorePara.innerText=compScore;
  msg.innerText="Play your move";
  msg.style.backgroundColor="#081b31";
  heading.innerText="";
});



startGame.addEventListener("click",()=>{
  choices.forEach(choice=>choice.style.pointerEvents="auto");
  setTimeout(()=>{
    heading.innerText="Game was Start!";
    buttons.after(heading);
    setTimeout(()=>{
      heading.innerText="";
    },2000);
  },500);
});

choices.forEach((choice) => {
  choice.style.pointerEvents="none";
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// let userScore=0;
// let compScore=0;

// const choices=document.querySelectorAll(".choice");
// const msg=document.querySelector("#msg");

// const compScorePara=document.querySelector("#comp-score");
// const userScorePara=document.querySelector("#user-score");

// const drawGame=()=>{
//   msg.innerText="Game was draw";
//   msg.style.backgroundColor="#081b31";
// }

// const showWinner=(userWin,userChoice,compChoice)=>{
//   if(userWin){
//     userScore++;
//     userScorePara.innerText=userScore;
//     msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
//     msg.style.backgroundColor="green";
//   } else {
//     compScore++;
//     compScorePara.innerText=compScore;
//     msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
//     msg.style.backgroundColor="red";
//   }
// }

// const generateCompChoice=()=>{
//   const options=["rock","paper","scissors"];
//   const randIdx=Math.floor(Math.random()*options.length);
//   return options[randIdx];
// }

// const playGame=(userChoice)=>{
//   console.log("user choice : ",userChoice);

//   const compChoice=generateCompChoice();
//   console.log("comp choice : ",compChoice);

//   if(userChoice===compChoice){
//     drawGame();
//   } else {
//     let userWin=true;
//     if(userChoice==="rock"){
//       //paper,scissors
//       userWin=compChoice==="paper" ? false : true;
//     } else if(userChoice==="paper"){
//       //rock,scissors
//       userWin=compChoice==="scissors" ? false : true;
//     } else {
//       //rock,paper
//       userWin=compChoice==="rock" ? false : true;
//     }
//     showWinner(userWin,userChoice,compChoice);
//   }

// }

// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         let userChoice=choice.getAttribute("id");
//         playGame(userChoice);
//     });
// });

// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");
// const compScorePara=document.querySelector("#comp-score");
// const userScorePara=document.querySelector("#user-score");

// const showWinner = (userWin,userChoice,compChoice) => {
//  if(userWin){
//   userScore++;
//   userScorePara.innerText=userScore;
//   msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
//   msg.style.backgroundColor="green";
//  } else {
//   compScore++;
//   compScorePara.innerText=compScore;
//   msg.innerText=`You lost. ${userChoice} beats your ${compChoice}`;
//   msg.style.backgroundColor="red";
//  }
// };

// const genCompChoice = () => {
//   const options = ["rock", "paper", "scissors"];
//   const randIdx = Math.floor(Math.random() * options.length);
//   return options[randIdx];
// };

// const drawGame = () => {
//   msg.innerText = "Game was draw.";
//   msg.style.backgroundColor = "#081b31";
// };
// const playGame = (userChoice) => {
//   console.log("user choice : ", userChoice);
//   const compChoice = genCompChoice();
//   console.log("comp choice : ", compChoice);

//   if (userChoice === compChoice) {
//     drawGame();
//   } else {
//     let userWin = true;
//     if (userChoice === "rock") {
//       //paper,scissors
//       userWin = compChoice === "paper" ? false : true;
//     } else if (userChoice === "paper") {
//       //scissors,rock
//       userWin = compChoice === "scissors" ? false : true;
//     } else {
//       //rock,paper
//       userWin = compChoice === "rock" ? false : true;
//     }
//     showWinner(userWin,userChoice,compChoice);
//   }
// };

// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     let userChoice = choice.getAttribute("id");
//     playGame(userChoice);
//   });
// });
