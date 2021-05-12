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

//  switch

var num3 = 1;

switch (num3) {
  case 1:
    console.log('num is 1!');
    break;
  case 2:
    console.log('num is 2!');
    break;
  default:
    console.log('default!');

    break;
}

var num4 = 50;

switch (num4 <= 50) {
  case true:
    console.log('num is less than 50!');
    break;

  default:
    console.log('default!');

    break;
}

var num5 = 50;

switch (true) {
  case num5 <= 20:
    console.log('num is less than 20!');
    break;
  case num5 <= 50:
    console.log('num is more than 20 and less than 50!');
    break;

  default:
    console.log('default!');

    break;
}

var nota = 3;

switch (nota) {
  case 3:
    console.log('tu nota es mayor que ', 2);
  case 2:
    console.log('tu nota es mayor que ', 1);
  case 1:
    console.log('tu nota es mayor  que ', 0);
}

var nota2 = 3;

switch (nota2) {
  case (3, 4):
    console.log('tu nota es mayor que ', 2);
  // case 4:
  // case 3:
  //     console.log('tu nota es mayor que ', 2);
  case 2:
    console.log('tu nota es mayor que ', 1);
  case 1:
    console.log('tu nota es mayor  que ', 0);
}
