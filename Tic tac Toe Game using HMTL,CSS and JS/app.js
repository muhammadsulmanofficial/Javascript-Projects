// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let turnO = true; //playerX, playerO
// let count=0;

// //2D Array
// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];
// const resetGame = () => {
//     turnO=true; //Player O pehli move karega agar yeah na likhey to pehley kabhi X move hota, kabhi O hota or game confusing hotey
//     count=0; // reset moves
//     enableBoxes();
//     msgContainer.classList.add("hide");
// };

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turnO) {
//       //playerO
//       box.innerText = "O";
//       turnO = false;
//     } else {
//       //playerX
//       box.innerText = "X";
//       turnO = true;
//     }
//     box.disabled = true;
//     count++; //Pehle move complete → phir result check
//     checkWinner();
//   });
// });

// const disableBoxes =()=>{
//     for(let box of boxes){
//         box.disabled=true;
//     }
// }
// const enableBoxes =()=>{
//     for(let box of boxes){
//         box.disabled=false;
//         box.innerText="";
//     }
// }

// const showWinner = (winner) => {
//   msg.innerText = `Congratulatin, winner is ${winner}`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const checkWinner = () => {
  // let isWinner=false;
//   for (let pattern of winPatterns) {
//     // console.log(pattern); //ek array hai //har baar ek chhota array
//     // console.log(pattern[0], pattern[1], pattern[2]); //Har winning pattern ke 3 indexes ko print kar do
//     // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
//     // console.log(
//     //   boxes[pattern[0]].innerText, //position1
//     //   boxes[pattern[1]].innerText, //position2
//     //   boxes[pattern[2]].innerText //position3
//     // );
//     let pos1Val = boxes[pattern[0]].innerText; //position1
//     let pos2Val = boxes[pattern[1]].innerText; //position2
//     let pos3Val = boxes[pattern[2]].innerText; //position3

//     if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//       if (pos1Val === pos2Val && pos2Val === pos3Val) {
//         console.log("winner", pos1Val);
//         showWinner(pos1Val);
            // isWinner=true
//         return; // winner mil gaya → draw check nahi hoga
//       }
//     }
//   }

//   // DRAW CONDITION
//   if (count === 9 && !isWinner) {
//     msg.innerText = "Game has no winner";
//     msgContainer.classList.remove("hide");
//     disableBoxes();
//   }
// };

// /*
// pattern[0] → pehli value
// pattern[1] → doosri value
// pattern[2] → teesri value
// */

// /*
// pattern = [0, 1, 2]
// console.log(pattern[0], pattern[1], pattern[2]);
// console.log(0, 1, 2);
// output : 0 1 2
// */

// newGameBtn.addEventListener("click",resetGame);
// resetBtn.addEventListener("click",resetGame);









// let boxes = document.querySelectorAll(".box");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let turnO = true; //playerX , playerO
// let count=0;

// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 4, 6],
//   [2, 5, 8],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// // const resetGame = () => {
// //   let turnO = true;
// //   enableBoxes();
// //   msgContainer.classList.add("hide");
// // };

// resetBtn.addEventListener("click", () => {
//   turnO = true;
//   count=0;
//   enableBoxes();
//   msgContainer.classList.add("hide");
// });

// newGameBtn.addEventListener("click", () => {
//   turnO = true;
//   enableBoxes();
//   count=0;
//   msgContainer.classList.add("hide");
// });

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turnO == true) {
//       box.innerText = "O";
//       turnO = false;
//     } else {
//       box.innerText = "X";
//       turnO = true;
//     }
//     box.disabled = true;
//     count++;
//     checkWinner();
//   });
// });
// const showWinner = (winner) => {
//   msgContainer.classList.remove("hide");
//   msg.innerText = `Congratulation, Winner is ${winner}`;
//   disableBoxes();
// };
// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

// const enableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = false;
//     box.innerText = "";
//   }
// };
// const checkWinner = () => {
//   let isWinner=false; //zaroori tha ,Is ke baghair draw winner ko overwrite kar sakta tha
//   for (let pattern of winPatterns) {
//     // console.log(pattern);
//     // console.log(pattern[0], pattern[1], pattern[2]);
//     // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
//     // console.log(
//     //   boxes[pattern[0]].innerText,
//     //   boxes[pattern[1]].innerText,
//     //   boxes[pattern[2]].innerText
//     // );

//     let pos1Val = boxes[pattern[0]].innerText;
//     let pos2Val = boxes[pattern[1]].innerText;
//     let pos3Val = boxes[pattern[2]].innerText;

//     if (pos1Val === pos2Val && pos2Val === pos3Val) {
//       if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//         console.log("winner", pos1Val);
//         showWinner(pos1Val);
//         isWinner=true;
//         return;
//       }
//     }
//   }
//   //Draw Condition
//   if(count===9 && !isWinner){
//     msg.innerText="Game has no winner.";
//     msgContainer.classList.remove("hide");
//     disableBoxes();
//   }
// };












let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let turnO = true;
let count=0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
  });
});


const resetGame=()=>{
  count=0;
  turnO=true;
  enableBoxes();
  msgContainer.classList.add("hide");
}



const disableBoxes =()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

const showWinner=(winner)=>{
  msg.innerText=`Congratulation, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}



const checkWinner=()=>{
  let isWinner=false;

  for(let pattern of winPatterns){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val===pos2Val && pos2Val===pos3Val){
      if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        // console.log("winner",pos1Val);
        showWinner(pos1Val);
        isWinner=true;
        return;
      }
    }
  }
  if(count===9 && !isWinner){
    msg.innerText="Game has no winner.";
    msgContainer.classList.remove("hide");
  }
}

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);


