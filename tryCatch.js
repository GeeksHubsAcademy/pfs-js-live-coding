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
// assert(age > 18);

// finally
function finallyAlwaysRuns() {
  try {
    ñlkjsad();
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
