var num = Math.random();

if (num < 0.1) {
  console.log('< .1');
} else if (num < 0.2) {
  // } else if (num >= 0.1 && num < 0.2) { // redundante
  console.log('> .1  &&  < 0.2');
} else {
  console.log('> 0.2');
}

//  IF ANIDADOS -  no recomendado  ----------------------------------------------------------------

var num1 = Math.random();
var num2 = Math.random();

if (num1 > 0.5) {
  // realmente necesario??
  if (num2 > 0.5) {
    console.log('num1 and num2 > 0.5');
  }
}
// mejor
if (num1 > 0.5 && num2 > 0.5) {
  console.log('num1 and num2 > 0.5');
}

//  early return - BEST PRACTICE

// function willItBlend(someObject) {
//   var itWillBlend;

//   if (typeof someObject === 'object') {
//     if (someObject.blendable === 'It will blend') {
//       itWillBlend = true;
//     } else {
//       itWillBlend = false;
//     }
//   } else {
//     itWillBlend = false;
//   }

//   return itWillBlend;
// }

function willItBlend(someObject) {
  if (!someObject) {
    return false;
  }
  if (typeof someObject !== 'object') {
    return false;
  }
  if (someObject.blendable === 'It will blend') {
    return true;
  }
  return false;
}

console.log(
  willItBlend({ blendable: 'It will blend' }) === true,
);
console.log(willItBlend({}) === false);
console.log(willItBlend([]) === false);
console.log(willItBlend(2) === false);
console.log(willItBlend(null) === false);
