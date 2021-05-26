import { Todo, todosModel } from './model.js';
import { createTodoNode } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // nodes
  const addInputNode = document.querySelector('#addTodo');
  const todoListNode = document.querySelector('#todoList');

  //  INIT VIEW WITH PERSISTED MODEL

  const todos = todosModel.todosList;
  todos.forEach((todo) => {
    const todoNode = createTodoNode(todo);
    todoListNode.appendChild(todoNode);
  });

  //  ADD TODO
  function onSubmitController(event) {
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
    .addEventListener('submit', onSubmitController);

  // REMOVE TODO

  function onRemoveController(event) {
    // remove node from dom
    event.target.parentNode.parentNode.remove();

    // remove todo from model
    const id = Number(event.target.parentNode.parentNode.id);
    todosModel.findAndDelete(id);
  }

  // no se subscribe a nodos futuros
  //   document.querySelectorAll('.remove').forEach((button) => {
  //     button.addEventListener('click', onRemoveController);
  //   });
  todoListNode.addEventListener('click', function (event) {
    if (event.target.matches('.remove')) {
      onRemoveController(event);
    }
  });
});
