document.addEventListener('DOMContentLoaded', function() {
    const taskTitleInput = document.getElementById('taskTitle');
    const taskDescriptionInput = document.getElementById('taskDescription');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const pendingTasksList = document.getElementById('pendingTasksList');
    const completedTasksList = document.getElementById('completedTasksList');

    addTaskBtn.addEventListener('click', function() {
        const taskTitle = taskTitleInput.value.trim();
        const taskDescription = taskDescriptionInput.value.trim();

        if (taskTitle && taskDescription) {
            addTask(taskTitle, taskDescription);
            taskTitleInput.value = '';
            taskDescriptionInput.value = '';
        }
    });

    function addTask(title, description) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <div>
                <strong>${title}</strong>
                <p>${description}</p>
            </div>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        const completeBtn = taskItem.querySelector('.complete-btn');
        const deleteBtn = taskItem.querySelector('.delete-btn');

        completeBtn.addEventListener('click', function() {
            completeTask(taskItem);
        });

        deleteBtn.addEventListener('click', function() {
            deleteTask(taskItem);
        });

        pendingTasksList.appendChild(taskItem);
    }

    function completeTask(taskItem) {
        taskItem.querySelector('.complete-btn').remove();
        completedTasksList.appendChild(taskItem);
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
