/* There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.*/

let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  } else if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (vowels[j] === input[i]) {
      resultArray.push(input[i]);
    }
  }
}

const resultString = resultArray.join().toUpperCase();

console.log(resultString);
