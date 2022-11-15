let numbers = [1,13,45,2,-1,0];

const randomInt = (min, max) =>min + Math.floor(Math.random() * (max - min));


console.log(numbers.includes(13));
console.log(numbers.includes(12));


// let indexOf13 = numbers.indexOf(13)
// numbers[indexOf13] = 100
// console.log(numbers);


console.log(numbers.indexOf(13));
console.log(numbers.indexOf(12));



// a1 || a2 || a3 .... || an
const includes = (array, search) => 
    array.some(item => item === search)

console.log(includes(numbers, 13));
console.log(includes(numbers, 12));

console.log('-------');

// a1 && a2 && a2
const areAllPositive = array => 
    array.every(item => item > 0)

console.log(areAllPositive(numbers));
console.log(areAllPositive([1,2,4]));


console.log('-------');

const filterNegative = array => array.filter(item => item < 0)

console.log(filterNegative(numbers));
console.log(filterNegative([-1,-2,3,-4]));

console.log('------');

const filterNumbersEqualToIndex = array => array.filter((n, index) => n === index) // Значение равно своему индексу
console.log(filterNumbersEqualToIndex([0,3,2,4,5,5])); // [0,2,5]

console.log('--------');

const createRandomArray = (min, max, length) => {let arr = [];for (let i = 0; i < length; i++){arr.push(randomInt(min, max));}return arr;};
const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);



const isLeapYearEvery = array => array.every(isLeapYear);
const isLeapYearSome = array => array.some(isLeapYear);

let randYear = createRandomArray(1900,2000,10)

console.log(randYear);
console.log(isLeapYearEvery(randYear));
console.log(isLeapYearSome(randYear));
