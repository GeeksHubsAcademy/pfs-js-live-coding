// declaración

function suma(a, b) {
  console.log('a', a);
  console.log('b', b);
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('no valid inputs');
  }
  return a + b;
}

// ejecución

console.log(suma(1, 2, 3)); // 3

// arguments

function printMyArguments() {
  console.log('arguments', arguments);
}

printMyArguments(null, undefined, {});

// función anónima
var myFun = function () {
  console.log('arguments', arguments);
};

// function myFun() {
//   console.log('arguments', arguments);
// }

// IIFE
(function () {
  console.log('a', 1);
  var notGlobal = 1;
  console.log(notGlobal);
})();

// var iife = function () {
//   console.log('a', 1);
//   var notGlobal = 1;
//   console.log(notGlobal);
// };
// iife();
