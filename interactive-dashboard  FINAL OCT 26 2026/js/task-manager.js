// Weekly Goal Calculator
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;

    document.getElementById("goal-message").innerHTML =
        userName + ", your weekly task goal is " + totalGoal + " tasks.";
}

document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();

    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});


// Task Manager
let tasks = [];
let nextTaskId = 1;

let taskList = document.getElementById("task-list");
let userTasks = document.createElement("ul");

userTasks.id = "user-tasks";
document.getElementById("enter-task").after(userTasks);


// Add a task dynamically
function addTask(name, priority, isImportant) {
    let task = {
        id: nextTaskId++,
        name: name,
        priority: priority,
        isImportant: isImportant,
        isCompleted: false
    };

    tasks.push(task);
    displayTasks();
    console.log(JSON.stringify(tasks));
}


// Display tasks
function displayTasks() {
    userTasks.innerHTML = "";

    tasks.forEach(function(task) {
        let item = document.createElement("li");
        let taskText = document.createElement("span");

        taskText.textContent = task.name + " - Priority: " + task.priority;

        // Style based on priority
        if (task.priority === "High") {
            item.style.fontWeight = "bold";
        } else {
            item.style.fontWeight = "normal";
        }

        // Highlight important tasks in red
        if (task.isImportant) {
            taskText.style.color = "red";
        } else {
            taskText.style.color = "black";
        }

        // Strikethrough completed tasks
        if (task.isCompleted) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none";
        }

        // Complete button
        let completeButton = document.createElement("button");
        completeButton.type = "button";
        completeButton.textContent = task.isCompleted ? "Undo Complete" : "Complete";
        completeButton.className = "btn btn-sm btn-success ms-2 me-1";

        completeButton.addEventListener("click", function() {
            markTaskComplete(task.id);
        });

        // Delete button
        let deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-sm btn-danger";

        deleteButton.addEventListener("click", function() {
            deleteTask(task.id);
        });

        item.appendChild(taskText);
        item.appendChild(completeButton);
        item.appendChild(deleteButton);

        userTasks.appendChild(item);
    });
}


// Mark a task complete or incomplete
function markTaskComplete(taskId) {
    let task = tasks.find(function(item) {
        return item.id === taskId;
    });

    if (task) {
        task.isCompleted = !task.isCompleted;
        displayTasks();
        console.log(JSON.stringify(tasks));
    }
}


// Delete an individual task
function deleteTask(taskId) {
    tasks = tasks.filter(function(task) {
        return task.id !== taskId;
    });

    displayTasks();
    console.log(JSON.stringify(tasks));
}


// Delete the entire task list
function deleteTaskList() {
    tasks = [];
    displayTasks();
    console.log(JSON.stringify(tasks));
}


// Add Task button event listener
document.getElementById("add-task-btn").addEventListener("click", function(event) {
    event.preventDefault();

    let name = document.getElementById("task-name").value.trim();
    let priority = document.getElementById("priority-level").value;
    let isImportant = document.getElementById("task-important").checked;

    if (name === "") {
        alert("Please enter a task name.");
        return;
    }

    addTask(name, priority, isImportant);

    // Reset form inputs
    document.getElementById("task-name").value = "";
    document.getElementById("priority-level").value = "High";
    document.getElementById("task-important").checked = false;
});


// Delete List button event listener
document.getElementById("delete-list").addEventListener("click", function(event) {
    event.preventDefault();
    deleteTaskList();
});