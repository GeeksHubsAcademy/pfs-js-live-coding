// utils
function createNode(html) {
  const node = document.createElement('div');
  node.innerHTML = html.trim();
  return node.firstChild;
}

export function createTodoNode(todo) {
  const newNode = createNode(`
  <div class="todo">
    <div class="text">${todo.text}</div>
    <div class="updated">${todo.updated}</div>
    <div class="created">${todo.created}</div>
  </div>`);

  return newNode;
}
