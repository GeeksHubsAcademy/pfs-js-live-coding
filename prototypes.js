// Number.prototype

var myNumber = 33;

console.log(myNumber.toString() === '33'); // true
console.log(myNumber === 33); // true

console.log((3).toFixed(4));
console.log((3).toPrecision(4));
console.log((1000).toExponential());

// String.prototype

var myString = 'Lorem Ipsum kljhsada asda asdfasd sadf';

console.log(myString.charAt(0), myString[0]);
console.log(myString.charAt(1));

console.log(myString.charCodeAt(0));
console.log(myString.indexOf('rem') === 2);
console.log(myString.concat('123124312'));
console.log(myString.length);
console.log(myString.split(''));
console.log(myString.split(' '));
console.log(myString.split('Ipsum'));

console.log(myString.replace('Ipsum', '******'));

console.log(myString.replace(' a', 'SPACE__A'));
console.log(myString.replaceAll(' a', 'SPACE__A'));
console.log(myString.replace(/\sa/g, 'SPACE__A'));
console.log(myString.match(/\sa/g));

// Boolean.prototype
var myBoolean = true;
console.log(myBoolean.toString());

//  Array.prototype

var myArray = [10, 20];
console.log(myArray.push(33, 44));
myArray[myArray.length] = 55;

console.log(myArray);

console.log(myArray.join('---'));
console.log([true, 33, [5, 6], { a: 3 }].join('---'));

console.log('hola adios yee'.split(' ').join('_'));

console.log(myArray);
console.log(myArray.splice(2, 2));
console.log(myArray);

console.log(myArray.slice(0, 2));
console.log(myArray);

var array2 = ['b', 'a', 'C', 'D'];
array2.sort();
console.log(array2);

var array3 = [111111, 1, 20, 9, 8888888];
array3.sort(function (a, b) {
  return b - a;
});
console.log(array3);

var array4 = [{ age: 19 }, { age: 29 }, { age: 34 }];
array4.sort(function (a, b) {
  return b.age - a.age;
});
console.log(array4);

var array5 = ['a', 'b'];

array5.forEach(function (item, index, array) {
  console.log(item, index, array);
});
