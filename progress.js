// Local Storage se tasks lao
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Total Tasks
let totalTasks = tasks.length;

// Completed Tasks
let completedTasks = tasks.filter(task => task.status === "Completed").length;

// Pending Tasks
let pendingTasks = totalTasks - completedTasks;

// HTML me values show karo
document.getElementById("totalTasks").innerText = totalTasks;
document.getElementById("completedTasks").innerText = completedTasks;
document.getElementById("pendingTasks").innerText = pendingTasks;

// Percentage calculate karo
let percentage = 0;

if (totalTasks > 0) {
    percentage = Math.round((completedTasks / totalTasks) * 100);
}

// Progress Bar update karo
document.getElementById("progressBar").style.width = percentage + "%";

// Percentage text update karo
document.getElementById("percentage").innerText = percentage + "% Completed";