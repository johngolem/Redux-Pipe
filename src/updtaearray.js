const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Adding
const index = numbers.indexOf(2);

console.log(index);

//adding to the array

// the three dots (...) is the spread operator, adding 3 at the beginnnig add it to the start of the array, 4 adds to the end of the array, and 5 adds to the middle of the array

// const added = [3, ...numbers, 4, 7];

// we have spread to create a copy of the array and add to it 3 before 2, 4 after 2, and 7 in the middle of the array
const added = [...numbers.slice(0, index), 3, ...numbers.slice(index), 4];

console.log(added);

//removing from the array

const removed = numbers.filter((n) => n !== 2);

//updating

const newly = numbers.map((n) => (n === 2 ? 34 : n));
console.log(newly);
