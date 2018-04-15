// 1
const hello = 'Hello';
const world = 'World';
const helloWorld = `${hello} ${world}`;
console.log(helloWorld);

// 2
const multiply = (a, b = 1) => a * b;

// 3
const calcAverage = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue) / numbers.length;

// const calcAverage = (...numbers) => {
//                       const reducer = (accumulator, currentValue) => accumulator + currentValue;
//                       const sum = numbers.reduce(reducer);
//                       const average = sum / numbers.length;
//                       return average;
//                     }

// 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const calcAverageGrade = (...gradesArray) => gradesArray.reduce((accumulator, currentValue) => accumulator + currentValue) / gradesArray.length;

calcAverageGrade(...grades);

// const calcAverageGrade = (...gradesArray) => {
//                           let total = 0;
//                           gradesArray.forEach(x => total += x);
//                           return total / gradesArray.length;
//                         }

// const calcAverageGrade = (...gradesArray) => {
//                   const sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue);
//                   const average = sum / grades.length;
//                   return average;
//                 }

// 5

const arrayMix = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, ,] = arrayMix;
const [, , , , lastName] = arrayMix;

// let firstName;
// let lastName;
// [, , firstName, , lastName] = arrayMix;