var colors = ['#ffeb3b', '#8bc34a', '#03a9f4', '#e91e63', '#ff9800']; // Array of colors

document.getElementById('addTaskBtn').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var taskValue = taskInput.value.trim();
    
    if (taskValue !== '') {
        var taskList = document.getElementById('taskList');

        var taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        var colorIndex = taskList.children.length % colors.length;
        taskItem.style.backgroundColor = colors[colorIndex];
        
        var taskText = document.createElement('span');
        taskText.textContent = taskValue;
        
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            taskList.removeChild(taskItem);
        };
        
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});