const DEFAULT_IVA = 0.21;

// let getPrecioFinal = (precio, impuesto) => {
//   impuesto = impuesto ?? DEFAULT_IVA;
//   return precio + precio * impuesto;
// };
let getPrecioFinal = (precio, impuesto = DEFAULT_IVA) =>
  precio + precio * impuesto;

console.log(getPrecioFinal(100, 0.1));
console.log(getPrecioFinal(100));
console.log(getPrecioFinal(100, undefined));
console.log(getPrecioFinal(100, null));
console.log(getPrecioFinal(100, 0));
