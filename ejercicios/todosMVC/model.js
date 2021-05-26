export class Todo {
  text = '';
  completed = false;
  created = null;
  updated = null;
  id = null;
  constructor(text) {
    this.text = text;
    this.created = this.#newDate();
    this.updated = this.created;
    this.id = Date.now();
  }
  #newDate() {
    return new Date().toISOString();
  }

  set created(value) {
    // do nothing
  }

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
    this.todosList =
      JSON.parse(localStorage.getItem('todos')) || [];
  }
  add(todo) {
    this.todosList.push(todo);

    this.persist();
  }
  findAndDelete(id) {
    this.todosList = this.todosList.filter(
      (todo) => todo.id !== id,
    );
    this.persist();
  }
  persist() {
    localStorage.setItem(
      'todos',
      JSON.stringify(this.todosList),
    );
  }
}

export const todosModel = new ListTodo();
