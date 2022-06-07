let num1 = '';
let num2 = '';
function sumTwoSmallestNumbers(numbers) {
  num1 = Math.min(...numbers);
  for (let i = 0; i < numbers.length; i++) {}
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
console.log(`'Smallest number is' ${num1}`);
