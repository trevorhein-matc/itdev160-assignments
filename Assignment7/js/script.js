// Array to hold tasks
var tasks = [];

// Task status 'enum'
var taskStatus = {
  active: 'active',
  completed: 'completed'
}

// Task constructor function

// Parameters
function Task (id, name, status) {
  this.id = id;
  this.name = name;
  this.status = status;
}

// Creates a new task element and adds it to the DOM
function addTaskElement (task) {
  // Create elements
  var listEl = document.getElementById('active-list');
  var taskEl = document.createElement('li');
  var textEl = document.createTextNode(task.name);

  // Set attributes in this case the element's id = task.id
  taskEl.setAttribute('id', task.id);

  // Add test to task element
  taskEl.appendChild(textEl);

  // Add task element to list
  listEl.appendChild(taskEl);
}

// Click handler to add a new task
function addTask (event) {
  // Get Input
  var inputEl = document.getElementById('input-task')
  if (inputEl.value != '') {
    // Create a unique id
    var id = 'task-' + tasks.length;

    // Create a new tasks
    var task = new Task(id, inputEl.value, taskStatus.active);
    tasks.push(task);

    // Add the task to the DOM
    addTaskElement(task);

    // Reset input
    inputEl.value = '';
  }
}

// Click handler to complete a task
function completeTask (event) {
  // Get the task element
  var taskEl = event.target;
  var id = taskEl.id;

  // Find corresponding task in the tasks array and update taskStatus
    for (var i=0; i < tasks.length; i++){
      if (tasks[i].id === id) {
        tasks[i].status = taskStatus.completed;
        break;
      }
    }
    // Move task element from active list to completed listEl
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

function init () {
  // Wire up the add task button click handler using the addTask function as a variable
  document.getElementById('add-task').onclick = addTask;

  // Wire up the task complete list item click handler
  document.getElementById('active-list').onclick = completeTask;
}

init();
