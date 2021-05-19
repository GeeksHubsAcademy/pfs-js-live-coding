const set = new Set([99, 0, 1, 2, 3, 3, 3, 2]);
console.log(set);

const myArray = [...set];
console.log({ myArray });

set.forEach((value) => {
  console.log(value);
});

console.log(set.has(1));
console.log(set.has(4));
set.delete(2);

// set.clear();
// console.log(set);

const a = { a: 1 };
set.add(a);
set.add(a);
// set.add({ a: 1 });

console.log(set);

// weakSet

var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo); // false, foo no se ha agregado al set

ws.delete(window); // remove window del set
ws.has(window); // false, window se ha eliminado
