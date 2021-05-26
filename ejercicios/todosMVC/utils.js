// utils
function createNode(html) {
  const node = document.createElement('div');
  node.innerHTML = html.trim();
  return node.firstChild;
}

export function createTodoNode({ id, text, updated, created }) {
  const newNode = createNode(`
  <div class="todo" id="${id}">
    <div class="text">${text}</div>
    <div class="date updated">${updated}</div>
    <div class="date created">${created}</div>
    <div class="actions">
        <button class="remove">remove</button>
    </div>
  </div>`);
  return newNode;
}
