
const todos = JSON.parse(localStorage.getItem('todos')) || [];

let todosUl = document.getElementsByClassName("todos")[0];
let addTodoForm = document.getElementsByClassName("add-todo-form")[0];

populateList(todos);

function addTodo(e){
  e.preventDefault();
  let textField = document.getElementsByName("add-todo")[0];
  let todo = {value: textField.value, done: false};
  todos.push(todo);
  textField.value = ("");

  localStorage.setItem('todos', JSON.stringify(todos));

  populateList(todos);
}

addTodoForm.addEventListener("submit", (e) => {
  addTodo(e);
});

function populateList(todos){
  todosUl.innerHTML = "";
  
  let todoLIs = todos.map((todo, idx) => {
    let checkedness;
    if (todo.done) {
      checkedness = "checked";
    } else {
      checkedness = "";
    }
    let inner = `<label><input type="checkbox" ${checkedness} data-idx=${idx}>${todo.value}</label>`;
    console.log(inner);
    let wrapper = document.createElement("li");
    wrapper.innerHTML = inner;
    return wrapper;
  });
  todoLIs.forEach((li) => {
    todosUl.append(li);
  });
}

todosUl.addEventListener("click", (e) => {
  if (e.target.type === 'checkbox') {
    let checkbox = e.target;
    let boxInList = todos[checkbox.getAttribute('data-idx')];
    boxInList.done = !boxInList.done;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
});