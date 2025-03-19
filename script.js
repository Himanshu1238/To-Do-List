function addTask() {
    const inputField = document.getElementById('inputTask');
    const taskText = inputField.value.trim();

    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";0
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        newTask.remove();0
    };
    
    newTask.appendChild(taskContent);
    newTask.appendChild(deleteBtn);
    newTask.onclick = function () {
        newTask.classList.toggle("checked");
    };
    
    taskList.appendChild(newTask);
    inputField.value = "";
}

document.getElementById("inputTask").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


