// by value in primary types

var text = 'hello world';

// var otherText = 'hello world';
var otherText = text;

console.log(otherText === text);

// by reference in object types

var obj1 = { a: 2, o: { x: 33 } };

var obj2 = obj1;

console.log(obj1 === obj2);
console.log(obj1 == obj2);

obj1.b = 3;
obj2.a = 1;
console.log(obj1);
console.log(obj2);

// var obj3 = obj1.o;
// console.log(obj3);

//  working with functions

var obj4 = { y: 3 };

function mutateArg(arg) {
  //   var arg = obj4;
  arg.y = 1;
  // arg = 5;
}

mutateArg(obj4);

console.log(obj4);

// comparar objectos

var obj5 = { a: 1 };
var obj6 = { a: 1 };

console.log(obj5 === obj6);
console.log(JSON.stringify(obj5), ' === ', JSON.stringify(obj6));
console.log(JSON.stringify(obj5) === JSON.stringify(obj6));
