const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clrCompletionBtn = document.getElementById("clrCompletedBtn");
const clrAllBtn = document.getElementById("clrAllBtn");
debugger;

let tasks = [];

function addTask() {

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}


function displayTasks(){
    taskList.innerHTML ="";
    tasks.forEach((task, index)=>{
        const li=document.createElement("li");
        li.innerHTML=`<input type="checkbox" id="task-${index}" ${task.completed? "checked":""}>
        <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change",()=>toggleTask(index));
        taskList.appendChild(li);
    })
}

function toggleTask(index){
    tasks[index].completed=!tasks[index].completed;
    displayTasks()
}


function clrCompletedTasks()
{
tasks= tasks.filter(task=>!task.completed);
displayTasks();
}

function clrAllTask(){
    //tasks= tasks=[];      correct
    //tasks=[];      correct
tasks.length=0;
    displayTasks();
}
addTaskBtn.addEventListener("click",addTask);
clrCompletedBtn.addEventListener("click",clrCompletedTasks);
clrAllBtn.addEventListener("click", clrAllTask);

displayTasks();