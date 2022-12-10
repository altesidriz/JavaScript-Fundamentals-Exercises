function readFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
const fullName = readFullName("John", "Smith");
console.log(fullName)// John Smith

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function isValid(arr, index) {
  if (index <= arr.length) {
    return true;
  } else {
    return false;
  }
}
isValid([1, 2, 3, 4], 6);
console.log(isValid());