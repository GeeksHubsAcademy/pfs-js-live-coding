document.addEventListener('DOMContentLoaded', () => {
  // nodes
  const addInputNode = document.querySelector('#addTodo');
  const todoListNode = document.querySelector('#todoList');

  // utils
  function createNode(html) {
    const node = document.createElement('div');
    node.innerHTML = html.trim();
    return node.firstChild;
  }

  function createTodoNode(todo) {
    const newNode = createNode(`
  <div class="todo">
    <div class="text">${todo.text}</div>
    <div class="updated">${todo.updated}</div>
    <div class="created">${todo.created}</div>
  </div>`);

    return newNode;
  }

  //  ADD TODO
  function onSubmit(event) {
    event.preventDefault();

    // read input value

    const text = addInputNode.value.trim();

    if (!text) return;

    // create todo
    const newTodo = new Todo(text);

    // add todo to model

    todosModel.add(newTodo);

    // render todo

    const node = createTodoNode(newTodo);
    // console.log(node);

    //  append node
    todoListNode.appendChild(node);

    // empty value
    addInputNode.value = '';
  }

  document
    .querySelector('form')
    .addEventListener('submit', onSubmit);
});
