const MAX_SAFE_INTEGER = 9007199254740991;

console.log(MAX_SAFE_INTEGER + 4);

const BIG_INT = 9007199254740991n;

console.log(BIG_INT + 4n);
console.log(BIG_INT + BigInt(4));

console.log(5 / 6);
console.log(5n / 6n);
console.log(BigInt(Math.floor(4.1)));
console.log(String(33n));

console.log(9007199254740991n + 100n);
