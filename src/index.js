document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.getElementById("create-task-form");
  let taskList = document.getElementById('tasks');
  
  taskForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let value = document.getElementById("new-task-description").value;
    let newTask = document.createElement("li");
    newTask.textContent = value;

    let deleteButton = document.createElement("button")
    deleteButton.textContent = "X";
    deleteButton.style.marginLeft = "10px"
    deleteButton.addEventListener("click", ()=>{
      deleteButton.parentNode.remove()
    });

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.marginLeft = "10px";
    editButton.addEventListener("click", () => {
       let updatedTask = prompt("Edit task:", newTask.textContent);
      if (updatedTask) {
        newTask.textContent = updatedTask;
        newTask.appendChild(editButton); 
        newTask.appendChild(deleteButton);
      }
    });

    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask)
    taskForm.reset();
    
  });
});
