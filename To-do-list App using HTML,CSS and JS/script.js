// function addTask(){
//     const taskList = document.getElementById('taskList');
//     const newTask = document.createElement('li');
//     taskList.appendChild(newTask);
//     newTask.textContent = document.getElementById('inputTask').value;
//     document.getElementById('inputTask').value="";
//     deleteTask(newTask);
// }
// function deleteTask(newTask){
//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerText="Delete";
//     newTask.appendChild(deleteBtn);
//     deleteBtn.onclick = () => {
//         newTask.remove();
//     }
// }

//.................Mene likha ha ya code..............................
// function addTask() {
//     const taskList = document.getElementById("taskList");
//     const newTask = document.createElement("li");
//     taskList.appendChild(newTask);
//     newTask.textContent = document.getElementById("inputTask").value;
//     document.getElementById("inputTask").value = "";
//     deleteTask(newTask);
// }

// ..............Chat gpt code updated version ................................
// let editingTask = null;

// function addTask() {
//     const input = document.getElementById("inputTask"); // access input
//     const addBtn = document.getElementById("addBtn");
//     const value = input.value.trim();

//     // if (value === "") {
//     //     alert("Please enter a task!"); // English alert
//     //     return; // stop function
//     // }

//     //Pehle task ka text replace karo user ke input se
//     // if (editingTask !== null) {
//     //     editingTask.firstChild.textContent = value;  // sirf text update
//     //     editingTask = null; //  Matlab edit mode khatam → next click pe new task add hoga
//     //     value = ""; //Matlab input box ko empty kar do
//     //     addBtn.textContent = "Add Task";
//     //     return;
//     // }

//     const taskList = document.getElementById("taskList");
//     const newTask = document.createElement("li");
//     newTask.textContent = value; // use trimmed value
//     taskList.appendChild(newTask);
//     input.value = ""; //clear input
//     updateTask(newTask);
//     deleteTask(newTask);
// }

//     // document.getElementById("inputTask").addEventListener("keydown", (e) => {
//     // if (e.key === "Enter") addTask();
//     // });

// function deleteTask(newTask) {
//     const deleteBtn = document.createElement("button");
//     deleteBtn.style.backgroundColor="red";
//     deleteBtn.style.color="white";
//     deleteBtn.innerText = "Delete";
//     newTask.appendChild(deleteBtn);
//     deleteBtn.addEventListener("click", () => {
//         newTask.remove();
//     });
// }

// function updateTask(newTask){
//     const updateBtn = document.createElement("button");
//     const addBtn = document.getElementById("addBtn");
//     updateBtn.style.backgroundColor="blue";
//     updateBtn.style.color="white";
//     updateBtn.textContent="Update";
//     newTask.appendChild(updateBtn);

//     const input = document.getElementById("inputTask");
//     updateBtn.addEventListener("click", () => {
//         // current task text ko input me wapas bhejo // old text wapas input me
//         input.value = newTask.firstChild.textContent;
//         // original task ko temporarily remove nahi karte
//         // sirf edit target ko store karte hain
//         editingTask = newTask;
//         input.focus();  // cursor input box me aa gaya, ready to type
//         addBtn.textContent="Done";
//     });
// }

// ---------------------------
// GLOBAL ELEMENTS
// ---------------------------
// const input = document.getElementById("inputTask");
// const addBtn = document.getElementById("addBtn");
// const taskList = document.getElementById("taskList");

// let editingTask = null; // track which task is being edited

// // ---------------------------
// // ADD TASK
// // ---------------------------
// const addTask = () => {
//     const value = input.value.trim();

//     if (value==="") {
//         alert("Please enter a task!");
//         return;
//     }

//     // ---------------------------
//     // EDIT MODE
//     // ---------------------------
//     if (editingTask !== null) {
//         editingTask.firstChild.textContent = value; // update task text
//         editingTask = null; // exit edit mode
//         input.value = "";
//         addBtn.textContent = "Add Task";
//         return;
//     }

//     // ---------------------------
//     // CREATE NEW TASK
//     // ---------------------------
//     const newTask = document.createElement("li");
//     newTask.textContent = value;

//     taskList.appendChild(newTask);
//     input.value = ""; // clear input

//     addUpdateButton(newTask);
//     addDeleteButton(newTask);
// };

// // ---------------------------
// // DELETE BUTTON
// // ---------------------------
// const addDeleteButton = (task) => {
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.style.backgroundColor = "red";
//     deleteBtn.style.color = "white";

//     task.appendChild(deleteBtn);

//     deleteBtn.addEventListener("click", () => task.remove());
// };

// // ---------------------------
// // UPDATE BUTTON
// // ---------------------------
// const addUpdateButton = (task) => {
//     const updateBtn = document.createElement("button");
//     updateBtn.textContent = "Update";
//     updateBtn.style.backgroundColor = "blue";
//     updateBtn.style.color = "white";

//     task.appendChild(updateBtn);

//     updateBtn.addEventListener("click", () => {
//         input.value = task.firstChild.textContent; // old task text in input
//         editingTask = task; // mark task for editing
//         input.focus(); // cursor in input
//         addBtn.textContent = "Done";
//     });
// };

// // ---------------------------
// // ENTER KEY SUPPORT
// // ---------------------------
// input.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") addTask();
// });

// // ---------------------------
// // ADD BUTTON CLICK
// // ---------------------------
// addBtn.addEventListener("click", addTask);

// const input = document.getElementById("inputTask");
// const taskList = document.getElementById("taskList");
// const addBtn = document.getElementById("addBtn");
// let edditingTask = null;

// const addTask = () => {
//   const value = input.value.trim();

//   if (value === "") {
//     alert("Please enter a task");
//     return;
//   }

//   if (edditingTask !== null) {
//     edditingTask.firstChild.textContent=value;
//     console.log(edditingTask);
//     edditingTask=null;
//     input.value="";
//     addBtn.innerText = "Add Task";
//     return;
//   }

//   const newTask = document.createElement("li");
//   const textSpan=document.createElement("span");
//   newTask.textContent = value;
//   taskList.appendChild(newTask);
//   input.value = "";
//   input.focus();
//   updateTask(newTask);
//   deleteTask(newTask);
// };

// const deleteTask = (task) => {
//   const deleteBtn = document.createElement("button");
//   deleteBtn.style.backgroundColor="red";
//   deleteBtn.style.color="white";
//   deleteBtn.innerText = "Delete";

//   task.appendChild(deleteBtn);
//   deleteBtn.addEventListener("click", () => {
//     task.remove();
//   });
// };

// const updateTask = (task) => {
//   const updateBtn = document.createElement("button");
//   updateBtn.style.backgroundColor="blue";
//   updateBtn.style.color="white";
//   updateBtn.textContent = "Update";
//   task.appendChild(updateBtn);

//   updateBtn.addEventListener("click", () => {
//     input.value = task.firstChild.textContent;
//     edditingTask = task; //yahan par hum poori <li> daal rahey hein // “Is poore <li> ko yaad rakh lo kyun ke yahi wala task edit ho raha hai”
//     // edditingTask  ─────►  <li>Buy Milk</li> //reference store copy
//     console.log(task);
//     addBtn.textContent = "Done";
//     input.focus();
//   });
// };

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") addTask();
// });

// addBtn.addEventListener("click", addTask);















const input = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
let edditingTask = null;

// Save all tasks to localStorage
const saveTasks = () => {  //saveTasks → DOM se data uthata hai → localStorage me daalta hai
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push(li.firstChild.textContent); // li ka text
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}; 
/* .......................................................
tasks = [] → empty array create

querySelectorAll("#taskList li") → sab <li> elements select

li.firstChild.textContent → <li> ke text ko array me push

JSON.stringify(tasks) → array ko string me convert

localStorage.setItem("tasks", ...) → browser me save    
........................................................ */

// Load tasks from localStorage
const loadTasks = () => { //loadTasks → localStorage se data uthata hai → DOM me daalta hai
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || []; //localStorage se string nikali //array me convert //agar kuch na mile → empty array
  savedTasks.forEach((value) => {
    const newTask = document.createElement("li");
    newTask.textContent = value;
    taskList.appendChild(newTask);
    deleteTask(newTask);
    updateTask(newTask);
  });
};

const addTask = () => {
  const value = input.value.trim();

  if (value === "") {
    alert("Please enter a task");
    return;
  }

  if (edditingTask !== null) {
    edditingTask.firstChild.textContent = value;
    edditingTask = null;
    input.value = "";
    addBtn.innerText = "Add Task";
    saveTasks(); // update localStorage
    return;
  }

  const newTask = document.createElement("li");
  newTask.textContent = value;
  taskList.appendChild(newTask);
  input.value = "";
  input.focus();
  updateTask(newTask);
  deleteTask(newTask);
  saveTasks(); // save new task //DOM me jo bhi changes hue → array me save → localStorage updated

};

const deleteTask = (task) => {
  const deleteBtn = document.createElement("button");
  deleteBtn.style.backgroundColor = "red";
  deleteBtn.style.color = "white";
  deleteBtn.innerText = "Delete";

  task.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", () => {
    task.remove();
    saveTasks(); // update after delete
  });
};

const updateTask = (task) => {
  const updateBtn = document.createElement("button");
  updateBtn.style.backgroundColor = "blue";
  updateBtn.style.color = "white";
  updateBtn.textContent = "Update";
  task.appendChild(updateBtn);

  updateBtn.addEventListener("click", () => {
    input.value = task.firstChild.textContent;
    edditingTask = task; // reference store
    addBtn.textContent = "Done";
    input.focus();
  });
};

// Load tasks on page load
window.addEventListener("DOMContentLoaded", loadTasks);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

addBtn.addEventListener("click", addTask);
