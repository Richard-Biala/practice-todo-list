//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event){
    //Prevents for from submitting
    event.preventDefault();
    
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);

    //TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('completed-btn');
    todoDiv.appendChild(trashButton);


}