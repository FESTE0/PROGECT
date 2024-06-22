document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const allTasksButton = document.getElementById('allTasks');
    const completedTasksButton = document.getElementById('completedTasks');
    const pendingTasksButton = document.getElementById('pendingTasks');
  
    let tasks = [];
  
    addTaskButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        const task = {
          id: Date.now(),
          text: taskText,
          completed: false
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
      }
    });
  
    taskList.addEventListener('click', (e) => {
      const target = e.target;
      const parentLi = target.closest('li');
      const taskId = parentLi.getAttribute('data-id');
      
      if (target.classList.contains('delete')) {
        tasks = tasks.filter(task => task.id != taskId);
      } else if (target.classList.contains('toggle')) {
        tasks = tasks.map(task => {
          if (task.id == taskId) {
            task.completed = !task.completed;
          }
          return task;
        });
      }
      renderTasks();
    });
  
    allTasksButton.addEventListener('click', () => {
      renderTasks();
    });
  
    completedTasksButton.addEventListener('click', () => {
      renderTasks(true);
    });
  
    pendingTasksButton.addEventListener('click', () => {
      renderTasks(false);
    });
  
    function renderTasks(filter = null) {
      taskList.innerHTML = '';
      const filteredTasks = filter === null ? tasks : tasks.filter(task => task.completed === filter);
      filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
          ${task.text}
          <div>
            <button class="toggle">${task.completed ? 'Невыполненная' : 'Выполненная'}</button>
            <button class="delete">Удалить</button>
          </div>
        `;
        taskList.appendChild(li);
      });
    }
  });
window.onload = function(){
    let audio = document.getElementById('background-music');
    document.body.addEventListener('click',function(){
        audio.play().catch(error => {
            console.log('rr'+ error);
        })
                           })
                                   }
  
