let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("taskList");

// Tasks Display Function
function displayTasks(taskArray) {

    taskList.innerHTML = "";

    taskArray.forEach(function(task, index) {

        taskList.innerHTML += `
        <div class="task-card">

            <h3>${task.title}</h3>

            <p><strong>Description:</strong> ${task.description}</p>

            <p><strong>Priority:</strong> ${task.priority}</p>

            <p><strong>Due Date:</strong> ${task.dueDate}</p>

            <p>
                <strong>Status:</strong>
                <span style="color:${task.status === 'Completed' ? 'green' : 'red'};">
                    ${task.status || "Pending"}
                </span>
            </p>

            <button class="btn" onclick="editTask(${index})">✏️ Edit</button>

            <button class="btn" onclick="deleteTask(${index})">🗑 Delete</button>

            ${
                task.status !== "Completed"
                ? `<button class="btn" onclick="completeTask(${index})">✅ Complete</button>`
                : ""
            }

        </div>
        `;
    });
}

// Pehli baar saare tasks dikhao
displayTasks(tasks);

// Search Function
function searchTask() {

    let keyword = document.getElementById("searchTask").value.toLowerCase();

    let filteredTasks = tasks.filter(function(task) {
        return task.title.toLowerCase().includes(keyword);
    });

    displayTasks(filteredTasks);
}

// Edit
function editTask(index) {
    localStorage.setItem("editIndex", index);
    window.location.href = "addtask.html";
}

// Delete
function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks(tasks);
}

// Complete
function completeTask(index) {

    tasks[index].status = "Completed";

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks(tasks);
}