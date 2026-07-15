let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let editIndex = localStorage.getItem("editIndex");

const taskForm = document.getElementById("taskForm");

// Agar Edit mode hai to form fill karo
if (editIndex !== null && tasks[editIndex]) {
    document.getElementById("title").value = tasks[editIndex].title;
    document.getElementById("description").value = tasks[editIndex].description;
    document.getElementById("priority").value = tasks[editIndex].priority;
    document.getElementById("dueDate").value = tasks[editIndex].dueDate;
} else {
    editIndex = null;
    localStorage.removeItem("editIndex");
}

taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const task = {
    id: editIndex !== null
        ? tasks[editIndex].id
        : Date.now(),

    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    priority: document.getElementById("priority").value,
    dueDate: document.getElementById("dueDate").value,

    status: editIndex !== null
        ? tasks[editIndex].status
        : "Pending"
};

    if (editIndex !== null) {

        tasks[editIndex] = task;

        localStorage.removeItem("editIndex");

        alert("Task Updated Successfully!");

    } else {

        tasks.push(task);

        alert("Task Added Successfully!");

    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

    window.location.href = "mytask.html";

});