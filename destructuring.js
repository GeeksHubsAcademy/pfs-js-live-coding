const arr = [1, 2, 3, 4];

// const one = arr[0];
// const two = arr[1];
const [one, two, ...rest] = arr;

console.log(one, two, rest);

const obj = { a: 1, b: 2 };

// const { a: a, b: b } = obj;
const { a, b } = obj;
// const a = obj.a;
// const b = obj.b;

console.log(a, b);

const { a: A, b: B } = obj;
// const A = obj.a;
// const B = obj.b;
console.log(A, B);

const complexObject = { z: 1, d: 1, e: { f: { g: true } } };
const { x } = complexObject;

console.log(x);

const {
  e: { f: F },
  d,
} = complexObject;
console.log(F, d);

const { z, ...restObj } = complexObject;

console.log(z, restObj);

// const getNameFromPerson = (person) => person.name;
// const getNameFromPerson = (person) => {
//   var { name } = person;
//   return name;
// };
// const getNameFromPerson = ({ name: nombre }) => nombre;
const getNameFromPerson = ({ name = 'anonymous' }) => name;

console.log(getNameFromPerson({ name: 'garn' }));
console.log(getNameFromPerson({ age: 18 }));

// const getSecondItem = (array) => array[1];
const getSecondItem = ([, second]) => second;

console.log(getSecondItem([1, 2]));

const str = 'hola mundo';
// const secondChar = str.charAt(1);
// const secondChar = str[1];
const [, secondChar] = str;
console.log(secondChar);

const { y = 5 } = { x: 1, z: 2 };

console.log(y);
const [g = 1] = [9];
console.log(g);
