var a = undefined;

console.log(typeof a === 'undefined');
// console.log(a === undefined);

// function

// var f =
function f() {}

console.log(typeof f);

//
function run(f) {
  f('hola');
}

run(console.error);

// variable declaration restrictions
var hola; // ok
var _hola; // ok
var $hola; // ok
var hola2; // ok
var hola_4; // ok

// var 2hola // bad
// var ho-la // bad
// var ho.la // bad

//  Object

var object = {
  key1: 'value1',
  key2: 'value2',
  '2key3': 'value3',
  o: {
    f: 4,
  },
  n: 34,
  a: [1, 2, 3],
  f: function () {},
  color: '#000000',
};

object.key1; // 'value1'

object['2key3']; // 'value3'

function generateKey() {
  return 'o';
}
object.o.f;
object[generateKey()].f;
object['o']['f'];

var key = 'else';

console.log(object[key]);
console.log(object.else);

var any = 1;
console.log(any.toString());
