// Make STR uppercase

function makeUpperCase(str) {
  str = str.toUpperCase();
  return str;
}

console.log(makeUpperCase('hiMert'));

// !best answer

// const makeUpperCase = (str) => str.toUpperCase();

// Remove the spaces from the string, then return the resultant string.
function noSpace(x) {
  for (let i = 0; i < 3; i++) {
    console.log(`number: ${i}`);
  }
}

noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');

// !Sum Arrays

// Sum Numbers
function sum(numbers) {
  return numbers.reduce((a, b) => a + b);
}
