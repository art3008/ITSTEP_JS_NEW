console.log('Функции');

let numbers = [1,13,45,2,-1,0];

const createArray = (mapFunction = index => index) => length => 
    Array.from({length}, (_, index) =>mapFunction(index));
    //Array.from({length}.map((_), index) => index)


let number = createArray() (10);
console.log('Генерируем массив', number);



//const randomInt = (min, max) =>min + Math.floor(Math.random() * (max - min));

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

//const createRandomArray = (min, max, length) => {let arr = [];for (let i = 0; i < length; i++){arr.push(randomInt(min, max));}return arr;};
const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);



const isLeapYearEvery = array => array.every(isLeapYear);
const isLeapYearSome = array => array.some(isLeapYear);

//let randYear = createRandomArray(1900,2000,10)

// console.log(randYear);
// console.log(isLeapYearEvery(randYear));
// console.log(isLeapYearSome(randYear));


// const getSquares = numbers => {
//     const squares = [];
//     for (let i = 0; i < numbers.length; i++) {
//         squares.push(numbers[i] * numbers[i])
//     }
//     return squares
// }

const getSquares = numbers => numbers.map(n => n * n)

console.log(numbers);
console.log(getSquares(numbers));


const randomInt = (min, max) =>
    min + Math.floor(Math.random() * (max - min))





const range = (start, end, step = 1) => createArray(index => start + index * step) (Math.ceil(end - start)/ step);

console.log((range(0,-10, -1)));
console.log((range(0,-10, -1)
.map(n => n * n))
.map(n => n / 2)
.map(n => Math.floor(n))
.filter(n => n % 4 === 0)
.map(n => ''.padStart(n, '*')));



// const createRandomArray = (min, max, n) => {
//     // let arr = []
//     // for (let i = 0; i < n; i++) {
//     //     arr.push(randomInt(min,max))
//     // }
//     // return arr
// }

const createRandomArray = (min, max) => 
    createArray(() => randomInt(min, max));



// const copy = array => Array.from(array) 


console.log(createRandomArray(-5, 10) (20));

const tmp = createRandomArray(0, 10) (20);
const copy = Array.from(tmp)

console.log(tmp);

// console.log(tmp.sort((a,b) => b - a));
console.log(tmp.sort());

console.log(tmp);
console.log(copy);


const getSum = number => number.reduce((sum, number) => sum + number ,0)
const getProduct = number => number.reduce((product, number) => product * number ,1)

console.log(getSum(range(0, 5)));
console.log(getProduct(range(1, 5)));

const map = mappingFunction => array => 
    array.reduce((mapped, element) => {
        mapped.push(mappingFunction(element));
        return mapped
    },[])
    

console.log(map(n => n * n) (range(0, 5)));