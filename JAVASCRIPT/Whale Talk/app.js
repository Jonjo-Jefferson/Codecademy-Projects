/* There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.*/

let input = 'I want to translate this';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input === vowels) {
      console.log(input[j]);
    }
  }
}
