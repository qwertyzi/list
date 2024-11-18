const taskInput = document.querySelector(".form-task");
const addBtn = document.querySelector(".button");
const taskList = document.querySelector(".task-list");

function addNewtask(event) {
    event.preventDefault();
    
    console.log(event);
    
    
}

addBtn.addEventListener("click", addNewtask)

