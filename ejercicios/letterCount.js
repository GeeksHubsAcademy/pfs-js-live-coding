function countLetters(str) {
  const result = {};
  for (const letra of str) {
    // result[letra] = result[letra] ? result[letra] + 1 : 1;
    result[letra] = (result[letra] || 0) + 1;
  }
  return result;
}

console.log(countLetters('hola mundo, adios mundo'));
