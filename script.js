// 1
const hello = 'Hello';
const world = 'World';
const helloWorld = `${hello} ${world}`;
console.log(helloWorld);

// 2
const multiply = (a, b = 1) => a * b;

// 3
const calcAverage = (...numbers) => {
                      const reducer = (accumulator, currentValue) => accumulator + currentValue;
                      const sum = numbers.reduce(reducer);
                      const average = sum / numbers.length;
                      return average;
                    }