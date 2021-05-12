// aritméticos

console.log(19 % 12 === 7);
console.log(3 % 2 === 1);

console.log(3 ** 2 === 9);

var num = 0;
console.log(num++);
console.log(num);

console.log(++num);

console.log(+'1');
console.log('1' + 2 + 3 === '123');
console.log(1 + 3 + '3' === '43');

// lógicos

console.log(true && false);
console.log(false && true);
console.log(true && true);

console.log(0 && 2);
console.log(1 && 2);

var user = null;
if (user) {
  fetchData(user);
}
user && fetchData(user);

console.log(false || true);
console.log(false || 1);
console.log(2 || 1);

function getAge(age) {
  age = age || 18;

  return age;
}

console.log(getAge(0)); // ojo con el 0

const truthy = 'a';
const falsy = '';
console.log(!truthy);
console.log(!falsy);

console.log(!!truthy);
console.log(Boolean(truthy));

// asignación

var a = 1;
a = 2;

a += 1; // ++a,  a = a + 1
a -= 1; // --a,  a = a - 1
a -= 2; //  a = a - 2
a *= 2; //  a = a * 2
a **= 2; //  a = a ** 2
a /= 2; //  a = a / 2

var b = 2;
b /= 2; // 1  //  b = b / 2

var c = 12;
c %= 2; //  c = c % 2

console.log(c);

// comparisons

console.log(1 === 1);
console.log(true === 1);
console.log(true == 1);
console.log(true == 2); // false ¿?¿?¿?
console.log(2 == '2'); // mala practica
console.log(2 === Number('2')); // ok
console.log(2 === +'2'); // ok
console.log(2 === Number.parseInt('2')); // ok
console.log(2 === Number.parseFloat('2')); // ok

console.log(true !== 1);
console.log(true != 1); // true
console.log(null === null);
console.log(NaN === NaN); // false ????
console.log(NaN == NaN); // false  ????

const rnd = Math.random();
console.log([] == false); // true ?????

if ([]) {
  console.log([], 'es cierto');
}

function runForGreaterThan50() {}
function runForLessThanOrEqual50() {}
// ternario

var number = 40;
// var isGreaterThan50 =  number > 50 ? true : false;
// var isGreaterThan50 =  number > 50;

var isGreaterThan50 = number > 50 ? 'si' : 'no';

// bad
number > 50
  ? runForGreaterThan50(number)
  : runForLessThanOrEqual50(number);

// good
if (number > 50) {
  runForGreaterThan50(number);
} else {
  runForLessThanOrEqual50(number);
}
