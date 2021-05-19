class Tarea {
  #id = 0;
  #texto = 'nothing';
  #fecha = null;
  constructor(texto, id, fecha) {
    console.log('tarea instanciada! con el texto:', texto);
    this.#texto = texto;
    this.#id = id;
    this.#fecha = new Date(fecha);
  }
  logId() {
    console.log(this.#id);
  }
  get texto() {
    return this.#texto;
  }
  set texto(text) {
    if (typeof text !== 'string') {
      return; // do nothing
      //   throw new Error('not valid text:' + text);
    }
    this.#texto = text;
  }
  get fecha() {
    console.count();
    return this.#fecha;
  }

  fechaHoy() {
    this.#fecha = new Date();
  }
}

// const tarea = new Tarea('aprender poo', 1, '2021-03-28'); //

// console.log(tarea.fecha);
// tarea.fechaHoy();

// console.log(tarea.fecha);
// tarea.logId();

// console.log(tarea.texto);
// tarea.texto = 'aprender Js';
// console.log(tarea.texto);
// tarea.texto = 1;

// console.log(tarea.texto);

// HERENCIA

class Shape {
  constructor(name) {
    this.name = name;
  }
  sayProps() {
    console.log(this);
  }
}
class Rectangle extends Shape {
  width = 0;
  length = 0;

  constructor(name, length, width = 0) {
    super(name);
    this.name = name.toUpperCase();
    this.length = length ?? this.length;
    this.width = width;
  }
  bigger(amount) {
    this.length += amount;
    this.width += amount;
    return { width: this.width, length: this.length };
  }
  sayProps() {
    console.log('rectangle', this.length, this.width);
    super.sayProps();
  }
  get area() {
    return this.length * this.width;
  }
}

const rec = new Rectangle('campo de futbol', 100, 80);

rec.sayProps();
console.log(rec.area);

class Square extends Rectangle {
  constructor(name, width) {
    super(name, width, width);
  }
}

class Cube extends Square {
  get volume() {
    return this.area * this.width;
  }
  bigger(amount) {
    const { width } = super.bigger(amount);
    this.height = width;
  }
}

const cube = new Cube('dado', 10);

console.log(cube.volume);
cube.bigger(1);
console.log(cube.volume);

cube.sayProps();
// console.log(cube);

// static

class Zoo {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log('hello');
    console.log(this);
  }

  static hola() {
    console.log('hola');
    console.log(this);
  }
}

const park = new Zoo('jurassic park');
const park2 = new Zoo('jurassic park 2');
const park3 = new Zoo('bio');

park.hello();
Zoo.hola();

// SINGLETON

let instance = null;
class Singleton {
  constructor(state) {
    if (!instance) {
      instance = this;
    }

    this._type = 'SingletonModuleScopedInstance';
    this.time = new Date();
    this.state = state;

    return instance;
  }
}

const a = new Singleton('hola');
const b = new Singleton('hola2');
console.log(a);
console.log(b);
console.log(b === a);

//   function a Class

// class Vehicle {
//   constructor(name, speed = 0) {
//     this.name = name;
//     this.speed = speed;
//   }
//   break() {
//     this.speed = 0;
//   }
//   accelerate(amount) {
//     this.speed += amount;
//   }
// }

function Vehicle(name, speed = 0) {
  this.name = name;
  this.speed = speed;
  this.break = function () {
    this.speed = 0;
  };
  this.accelerate = function (amount) {
    this.speed += amount;
  };
}

const honda = new Vehicle('civic', 100);
console.log(honda);
honda.break();
console.log(honda);
