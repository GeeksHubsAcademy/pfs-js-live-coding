class AgeTooYoungError extends Error {}
class AgeTooOldError extends Error {}
class NotAnAgeError extends Error {}

function getAge() {
  // promp to user
  // should return a valid number age, or throw an error
  var age = Number(prompt('cual es tu edad?'));
  if (Number.isNaN(age)) {
    throw new NotAnAgeError();
  }
  if (age < 18) {
    throw new AgeTooYoungError();
  }
  if (age > 50) {
    throw new AgeTooOldError();
  }
  return age;
}

function getAccessToDisco() {
  // ask age
  // tell user (logs) if the age is too low, too old or if invalid ask again
  // return true or false
  try {
    var age = getAge();
    return true;
  } catch (error) {
    if (error instanceof NotAnAgeError) {
      return getAccessToDisco();
    }
    if (error instanceof AgeTooYoungError) {
      return false;
    }
    if (error instanceof AgeTooOldError) {
      return false;
    }
  }
}

if (getAccessToDisco()) {
  console.log('welcome to the party!');
} else {
  console.log('go home!');
}
