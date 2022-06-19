const TODOS_KEY = 'todos';

const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos) );
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));
  saveTodos();
  li.remove();
}

function paintTodo(objNewTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  
  button.addEventListener('click', deleteTodo);
  button.className = 'material-icons';
  button.innerText = 'close';
  button.style.fontSize = '15px';

  span.innerText = objNewTodo.text;
  li.id = objNewTodo.id;
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const objNewTodo = {
    id: Date.now(),
    text: newTodo,
  };

  todoInput.value = '';
  paintTodo(objNewTodo);
  toDos.push(objNewTodo);
  saveTodos();
}

todoForm.addEventListener('submit', handleTodoSubmit);

const lsTodos = localStorage.getItem(TODOS_KEY);

if(lsTodos !== null) {
  const parsedTodos = JSON.parse(lsTodos);

  parsedTodos.forEach( (item) => {
    toDos.push(item);
    paintTodo(item);
  });
  saveTodos();
}


