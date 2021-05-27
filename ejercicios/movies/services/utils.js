export function createNode(html) {
  const node = document.createElement('div');
  node.innerHTML = html.trim();
  return node.firstChild;
}
