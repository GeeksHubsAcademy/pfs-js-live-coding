const sym1 = Symbol('a');
const sym2 = Symbol('a');
const sym3 = sym1;

console.log(sym1 === sym2); // false
console.log(sym1 === sym1); // true
console.log(sym1 === sym3); // true

console.log(typeof sym1); // 'symbol'
const obj = {
  key: 'value',
  [sym1]: 'anything',
};

console.log(obj);

for (const key in obj) {
  console.log(key, obj[key]);
}

export default obj;

const symGlobal = Symbol.for('x');
console.log(symGlobal === Symbol.for('x'));

console.log(Symbol('x') === Symbol('x'));

console.log(Symbol.keyFor(symGlobal));
