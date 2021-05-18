function max(...args) {
  let max = -Infinity;

  //   let args = arguments;
  console.log(...args);
  for (const num of args) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

const numbers = [1, 22, 33];
console.log(max(numbers));

const arr = [...numbers, ...numbers];

console.log(arr);

const obj = { a: 1, b: 2, c: 3, d: { e: true } };

const obj2 = { ...obj };

//obj2.a = obj.a;
// ...
//obj2.d = obj.d;

// obj.d.e = false;

console.log(obj);
console.log(obj2);
console.log(obj.d === obj2.d);

// const cloneObj = (obj) => JSON.parse(JSON.stringify(obj));

const obj3 = { a: 1, b: 2, c: 3 };
const obj4 = { b: 4 };

const obj5 = { ...obj3, ...obj4 };
delete obj5.c;
// { a: 1, b: 2, c: 3 , b:4};
console.log(obj5);

const chars = [...'hola mundo'];
console.log(chars);
