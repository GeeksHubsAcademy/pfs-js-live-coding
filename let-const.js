// let
let Pikachu = 40;
var Charmander = 60;

{
  let Pikachu = 0.4;
  var Charmander = 0.6;

  console.log(Pikachu, Charmander);
  // Pikachu: 0.4, Charmander: 0.6
}

console.log(Pikachu, Charmander);

// for (let index = 0; index < 3; index++) {
//   setTimeout(function () {
//     console.log(index);
//   }, 1000);
// }

// for (var index = 0; index < 3; index++) {
//   setTimeout(function () {
//     console.log(index);
//   }, 1000);
// }

function myScope() {
  var a = 1;
  let b = 2;
  if (true) {
    var c = 1;
    let d = 2;
  }
}
// console.log(a); // error a is not defined

// const

const a = 18;
// a = 19; // TypeError: Assignment to constant variable.

const myObject = { b: 33 };

myObject.b = 35;

console.log(myObject);

const myArray = [1, 2, 3];

myArray[0] = 100;
myArray.push(99);
console.log(myArray);

const i = 0;
i++; // TypeError: Assignment to constant variable.

// for (let index = 0; index < 3; index++) {
//   console.log(index);
// }

const PI = 3.14;
const arrayNumber = [1, 23];

// for of
const films = [
  { title: 'P tinto', id: 1 },
  { title: 'superman', id: 2 },
  { title: 'batman', related: [{ a: 1 }, { b: 2 }] },
];
for (const film of films) {
  // const film = arr[i];
  console.log(film.related?.[0]?.a);
}

{
  const film = arr[0];
}
{
  const film = arr[1];
}
{
  const film = arr[2];
}
