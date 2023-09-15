$(document).ready(function () {
    const todoForm = $("#todo-form");
    const inputUser = $("#input-user");
    const listGroup = $("#list-group");

    // Event listener untuk pengiriman formulir
    todoForm.on("submit", function (event) {
        event.preventDefault();

        const task = inputUser.val();
        if (task) {
            addTask(task);
            inputUser.val("");
        }
    });

    // Menambahkan tugas menggunakan jQuery
    function addTask(task) {
        const taskItem = $("<li>").addClass("list-group-item");
        taskItem.html(`
            <span>${task}</span>
            <button class="btn-delete" type="button">X</button>
        `);
        listGroup.append(taskItem);

        // Menyimpan tugas ke localStorage
        saveTasksToLocalStorage();
    }

    // Menghapus tugas menggunakan jQuery
    function deleteTask(taskItem) {
        if (confirm("Apakah Anda yakin ingin menghapus tugas ini?")) {
            taskItem.remove();
            // Menyimpan tugas ke localStorage
            saveTasksToLocalStorage();
        }
    }

    // Memuat tugas dari localStorage menggunakan jQuery
    function loadTasksFromLocalStorage() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(function (task) {
            addTask(task);
        });
    }

    // Menyimpan tugas ke localStorage menggunakan jQuery
    function saveTasksToLocalStorage() {
        const tasks = listGroup.find("li").map(function () {
            return $(this).find("span").text();
        }).get();
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Event untuk penghapusan tugas
    listGroup.on("click", ".btn-delete", function () {
        const taskItem = $(this).closest("li");
        deleteTask(taskItem);
    });

    // Memuat tugas dari localStorage saat dokumen siap
    loadTasksFromLocalStorage();
});

//fungsi untuk membuat animasi latar belakang canvas
function createCanvasAnimation() {
    const canvas = document.getElementById("canvas-background");
    const ctx = canvas.getContext("5d");
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const colors = ['#092b5e', '#2d84c3', '#5cb85c', '#f0ad4e', '#dc3545'];
    let currentIndex = 10;
    let x = 20;
    let y = 50;

    function animateBackground() {
        ctx.fillStyle = colors[currentIndex];
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        currentIndex = (currentIndex + 1) % colors.length;

        // Menggeser posisi elemen canvas secara horizontal
        x = (x + 1) % canvasWidth;
        canvas.style.transform = `translateX(${x}px)`;

        requestAnimationFrame(animateBackground);
    }
    setTimeout(animateBackground, 100000); // 1000ms (1 detik)

    animateBackground();
}

createCanvasAnimation();
