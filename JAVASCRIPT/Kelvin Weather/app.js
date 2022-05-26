// Set Kelvin
const kelvin = 293;
// Calculate celsius from Kelvin
const celsius = kelvin - 273;
// Calculate fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Round Fahrenheit down
fahrenheit = Math.floor(fahrenheit);
// Log temperature using string interpolation.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
