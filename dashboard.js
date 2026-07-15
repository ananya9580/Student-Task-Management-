let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let total = tasks.length;

let completed = tasks.filter(task => task.status === "Completed").length;

let pending = total - completed;

document.getElementById("totalTasks").innerText = total;
document.getElementById("completedTasks").innerText = completed;
document.getElementById("pendingTasks").innerText = pending;