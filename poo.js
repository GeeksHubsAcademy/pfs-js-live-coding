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

const tarea = new Tarea('aprender poo', 1, '2021-03-28'); //

console.log(tarea.fecha);
tarea.fechaHoy();

console.log(tarea.fecha);
tarea.logId();

console.log(tarea.texto);
tarea.texto = 'aprender Js';
console.log(tarea.texto);
tarea.texto = 1;

console.log(tarea.texto);
