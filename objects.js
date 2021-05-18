const key = 'c';
const key2 = 'd';

// const obj = { a: 1, b: 2 };
// obj[key] = 3;

const obj = { a: 1, b: 2, [key]: 3 };

// const obj2 = { key: key };
const obj2 = { key };

console.log(obj2); // {key:'c'}

const persona = {
  name: 'juan',
  age: 38,
  // getName: () => this.name,
  getName: function () {
    return this.name;
  },
  //   getName() {
  //     return this.name;
  //   },
};

console.log(persona.getName());
