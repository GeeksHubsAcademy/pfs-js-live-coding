import { Todo, todosModel } from './model.js';
import { createTodoNode } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // nodes
  const addInputNode = document.querySelector('#addTodo');
  const todoListNode = document.querySelector('#todoList');

  //  Init view with persisted model

  const todos = todosModel.todosList;
  todos.forEach((todo) => {
    const todoNode = createTodoNode(todo);
    todoListNode.appendChild(todoNode);
  });

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

    //  append node
    todoListNode.appendChild(node);

    // empty value
    addInputNode.value = '';
  }

  document
    .querySelector('form')
    .addEventListener('submit', onSubmit);
});
