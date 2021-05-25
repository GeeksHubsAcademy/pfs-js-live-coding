function assert(value) {
  if (!value) {
    throw new Error('not valid value');
  }
}

function askAge() {
  const age = Number(prompt('cual es tu edad?'));
  try {
    assert(age > 18);
  } catch (error) {
    throw new InvalidAge(age + 'is not a valid age');
  }
  return age;
}

// var error = new Error('message text');
// console.log(error.message);
// console.log(error.stack);

class InvalidAge extends Error {}

try {
  askAge();
} catch (error) {
  if (error instanceof InvalidAge) {
    askAge();
  } else {
    throw error;
  }
}

// finally
function finallyAlwaysRuns() {
  try {
    // ñlkjsad();
    return 10;
  } catch (error) {
    console.log('error', error);
    return 20;
  } finally {
    console.log('finally always runs');
    return 30;
  }
}

console.log(finallyAlwaysRuns());

//  instanceof
////////////////////////////////////////////////////////////////
// try {
//   const err = new Error('ups');

//   throw err;
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

// try {
//   const err = 1

//   throw err;
// } catch (error) {
//   console.log(error);
// }

try {
  guardaEnBD();
} catch (error) {
  console.log(error);
  if (error instanceof ReferenceError) {
    console.log('error es of class ReferenceError');
  }
  if (error instanceof Error) {
    console.log('error es of class Error');
  }
}
