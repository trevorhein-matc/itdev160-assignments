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

  // Saves the user input as a text node
  var textEl = document.createTextNode(task.name);

  // Creates a variable that will recieve the user input text node
  var taskEl = document.createElement('h3');
  var taskDivEl = document.createElement('div');
  var taskDivBoxEl = document.createElement('div');
  var listEl = document.createElement('li');
  var listSetterEl = document.getElementById('active-list');

  var att = document.createAttribute("class");
  att.value = "row";
  taskDivEl.setAttributeNode(att);

  var box = document.createAttribute("class");
  box.value = "box";
  taskDivBoxEl.setAttributeNode(box);


  // Set attributes in this case the element's id = task.id
  listEl.setAttribute('id', task.id);

  // Puts the user input text node into a li element that is created by taskEl
  taskEl.appendChild(textEl);
  taskDivEl.appendChild(taskEl);
  taskDivBoxEl.appendChild(taskDivEl);
  listEl.appendChild(taskDivBoxEl);

  // Add task element to list
  listSetterEl.appendChild(listEl);
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
  var listEl = event.target;
  var id = listEl.id;

  // Find corresponding task in the tasks array and update taskStatus
    for (var i=0; i < tasks.length; i++){
      if (tasks[i].id === id) {
        tasks[i].status = taskStatus.completed;
        break;
      }
    }
    // Move task element from active list to completed listEl
    listEl.remove();

    //listEl.remove(listEl.);
    document.getElementById('completed-list').appendChild(listEl);
}

function init () {

  // Wire up the add task button click handler using the addTask function as a variable
  document.getElementById('add-task').onclick = addTask;

  // Wire up the task complete list item click handler
  document.getElementById('active-list').onclick = completeTask;
}

init();
