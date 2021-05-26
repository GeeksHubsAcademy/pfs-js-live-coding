class Todo {
  text = '';
  completed = false;
  created = null;
  updated = null;
  constructor(text) {
    this.text = text;
    this.created = this.#newDate();
    this.updated = this.created;
  }
  #newDate() {
    return new Date().toISOString();
  }

  set created(value) {}

  set text(text) {
    this.text = text;
    this.updated = this.#newDate();
  }
  toggleCompleted() {
    this.completed = !this.completed;
    this.updated = this.#newDate();
  }
}

class ListTodo {
  constructor() {
    this.todosList = [];
  }
  add(todo) {
    this.todosList.push(todo);
  }
}

const todosModel = new ListTodo();
