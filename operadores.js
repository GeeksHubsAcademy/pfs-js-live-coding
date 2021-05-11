// aritméticos

console.log(19 % 12 === 7);
console.log(3 % 2 === 1);

console.log(3 ** 2 === 9);

var num = 0;
console.log(num++);
console.log(num);

console.log(++num);


console.log( +'1');
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
    fetchData(user)
}
user && fetchData(user)



console.log(false || true);
console.log(false || 1);
console.log(2 || 1);



function getAge(age) {
    age = age || 18

    return age

}

console.log(getAge(0)); // ojo con el 0


const truthy = 'a'
const falsy = ''
console.log(!truthy);
console.log(!falsy);

console.log(!(!truthy) );
console.log( Boolean(truthy) );