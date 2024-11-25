const taskInput = document.querySelector(".form-task");
const addBtn = document.querySelector(".button");
const taskList = document.querySelector(".task-list");

function addNewtask(event) {
    event.preventDefault();
    let task = taskInput.value;
    
    if (!task) return;
    const newItem = document.querySelector("#template").cloneNode(true).content; 
    newItem.querySelector(".task__text").value = task;

    newItem.querySelector(".task__delete").addEventListener("click", deleteTask)

    taskList.append(newItem);
    taskInput.value = "";
    taskInput.focus();


}

function deleteTask(event) {
    const target = event.target.parentElement;
    target.remove()
}

addBtn.addEventListener("click", addNewtask)