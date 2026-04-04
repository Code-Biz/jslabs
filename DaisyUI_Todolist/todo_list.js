const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clrCompletionBtn = document.getElementById("clrCompletedBtn");
const clrAllBtn = document.getElementById("clrAllBtn");
// debugger;

let tasks = [];

function addTask() {

    const taskText = taskInput.value.trim();
    if (taskText !== "") {

        tasks.push({ text: taskText });
        taskInput.value = "";
        displayTasks();
    }
}


function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {

        const li = document.createElement("li");
        li.innerHTML = `<div class="flex items-center gap-3"> <span class="font-bold">${index + 1}.</span>   
        <input type="checkbox" class="checkbox checkbox-md checkbox-success" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}" class="text-lg"> ${task.text}</label></div>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    })
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks()
}


function clrCompletedTasks() {

    tasks = tasks.filter(task => !task.completed);

    displayTasks();
}

function clrAllTask() {
    //tasks= tasks=[];      correct
    //tasks=[];      correct
    tasks.length = 0;
    displayTasks();
}
addTaskBtn.addEventListener("click", addTask);
clrCompletionBtn.addEventListener("click", clrCompletedTasks);
clrAllBtn.addEventListener("click", clrAllTask);

displayTasks();