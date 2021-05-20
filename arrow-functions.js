const sum = function (a, b) {
  return a + b;
};

const sumArrow = (a, b) => a + b;
const sumArrow2 = (a, b) => {
  return a + b;
};

const doble = (a) => a * 2;
const doble2 = (a) => a * 2;
const random = () => Math.random();

const createFilm = (title) => {
  return { title: title };
};

const createFilm2 = (title) => {
  return { title: title };
};
// const createFilm = (title) => {  title: title };  // error
const createFilm3 = (title) => ({ title: title });

const numbers = [1, 4, 2, 3, 99];
numbers.sort((a, b) => a - b);
console.log(numbers);

(a) => a * 2;

(a) => a * 2;
(persona) => persona.name;
(persona) => persona.name;
({ name }) => name;

const createPerson = (name, age) => ({ name: name, age });

// this
//////

// function logBrand() {
//   console.log(this.brand);
// }

// const logBrand = () => {
//   console.log(this.brand);
// };

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  brand = 'none';
  sayBrand = () => {
    console.log(this.brand);
  };

  runExternal(fn) {
    fn();
  }
}

class Bike {
  constructor(brand) {
    this.brand = brand;
  }
  brand = 'none';
  // sayBrand = () => {
  //   console.log(this.brand);
  // };
  sayBrand() {
    console.log(this.brand);
  }
}

const honda = new Car('honda');
const orbea = new Bike('Orbea');

honda.runExternal(orbea.sayBrand.bind(orbea));
