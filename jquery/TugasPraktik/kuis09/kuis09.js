$(document).ready(function() {
    const taskInput = $('#task');
    const taskList = $('#task-list');

    function createTaskElement(taskText) {
        const listItem = $('<li>');
        const taskTextElement = $('<span>').text(taskText);
        const deleteButton = $('<button>').text('Hapus').addClass('delete-task');
        const completeButton = $('<button>').text('Selesai').addClass('complete-task');

        listItem.append(taskTextElement, deleteButton, completeButton);
        return listItem;
    }

    $('#add-task').click(function() {
        const taskText = taskInput.val().trim();
        if (taskText !== '') {
            const listItem = createTaskElement(taskText);
            taskList.append(listItem);
            taskInput.val('');
        }
    });

    taskList.on('click', '.delete-task', function() {
        const listItem = $(this).closest('li');
        listItem.remove();
        alert('Apakah Kamu Yakin mau menghapus tugas?'); 
    });

    taskList.on('click', '.complete-task', function() {
        const listItem = $(this).closest('li');
        listItem.toggleClass('complete');
        if (listItem.hasClass('complete')) {
            $(this).text('Batal');
            alert(' Tugas Kamu telah diselesaikan.'); 
        } else {
            $(this).text('Selesai');
            alert('Tugas dibatalkan.'); 
        }
    });
});
