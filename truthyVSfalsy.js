var types = [
  true,
  false,
  undefined,
  0,
  1,
  NaN,
  '',
  'a',

  null,
  {},
  { a: 1 },

  [],
  [1, 2],
];

for (const type of types) {
  if (type) {
    console.log(type, 'is truthy');
  } else {
    console.log(type, 'is falsy');
  }
}
