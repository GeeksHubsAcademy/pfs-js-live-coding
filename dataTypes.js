var a = undefined;

console.log(typeof a === 'undefined');
// console.log(a === undefined);

// numbers

var num1 = 100.0;
var num2 = 1e2;

console.log(num1, num1 === num2);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 4);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// octal

var num3 = 8;
var num4 = 0o10;
console.log(num4, num3);
console.log(num4 === num3);
var num5 = 2;
var num6 = 0b10;
console.log(num5, num6);

console.log(1 / 0 === Infinity);

// function

// // var f =
// function f() {}

// console.log(typeof f);

// //
// function run(f) {
//   f('hola');
// }

// run(console.error);

// // variable declaration restrictions
// var hola; // ok
// var _hola; // ok
// var $hola; // ok
// var hola2; // ok
// var hola_4; // ok

// // var 2hola // bad
// // var ho-la // bad
// // var ho.la // bad

// //  Object

// var object = {
//   key1: 'value1',
//   key2: 'value2',
//   '2key3': 'value3',
//   o: {
//     f: 4,
//   },
//   n: 34,
//   a: [1, 2, 3],
//   f: function () {},
//   color: '#000000',
// };

// object.key1; // 'value1'

// object['2key3']; // 'value3'

// function generateKey() {
//   return 'o';
// }
// object.o.f;
// object[generateKey()].f;
// object['o']['f'];

// var key = 'else';

// console.log(object[key]);
// console.log(object.else);

// var any = 1;
// console.log(any.toString());
