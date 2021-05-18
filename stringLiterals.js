const name = 'garn';

const x = `Hola ${name}!`; // 'Hola garn!'

console.log(`Hola ${3 * 4}!`);
console.log(`Hola ${{ a: 1 }}!`);
console.log(`Hola ${Math.random() > 0.5 ? 'juan' : name}!`);
console.log(
  `Hola ${Math.random() > 0.5 ? 'juan' : `G${'a' + 'rn'}`}!`,
);

console.log(`hola
esto
es un
string
mutilinea
`);
console.log(`hola\nesto\nes\nun\nstring\nmutilinea`);

function parseString(texts, ...interpolations) {
  let result = texts[0];
  interpolations.forEach((element, index) => {
    result +=
      (typeof element === 'object'
        ? JSON.stringify(element)
        : element.toString()) + texts[index + 1];
  });
  return result;
}

const textParsed = parseString`hola ${1} mundo${{ a: 1 }}!`;

console.log({ textParsed });
