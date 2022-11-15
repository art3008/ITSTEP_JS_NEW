// const padRightWhile = (char, length) => s => {

//     while(s.length < length) {
//         s += char
//     }

//     return s
// }


// const padRightFor = (char, length) => s => {

//     for(; s.length < length;) {
//         s += char
//     }
    
//     return s

// }


// const padW = padRightWhile('*', 10)
// const padF = padRightFor('*', 10)

// let s = 'abcd'

// console.log(padW(s));
// console.log(padF(s));

// let length = 2;
// let char = '*'

// while(s.length < length) {
//     s += char
// }

// console.log(s, s.length);

// Вывод в обратном порядке

// let n = 20;

// for(let i = n; i >= 0; i--) {
//     console.log(i);
// }


// while(n >= 0) {
//     console.log(n);
//     n -= 1
// }


// const isLeapYear = (year) => year % 400 === 0 || (year % 4 ===0 && year % 100 !== 0)

// let startYear = 1900;
// let n = 20;

//Високосный год

// while(n > 0) {

//     isLeapYear(startYear) === true ? console.log(startYear) : null
//     n--
//     startYear++
// }

// const endYear = startYear + n

// for(let i = startYear; i < endYear; i++) {
//     isLeapYear(i) === true ? console.log(i) : null
// } 

//let idx = 0

// while(idx < n) {
//     if(isLeapYear(startYear)) {
//         idx++
//         console.log(startYear);
//     }
//     startYear++
// }

// for(let i = startYear,idx = 0;idx < 20;i++) {
//     if(isLeapYear(i)) {
//         idx++
//         console.log(i);
//     }

// }


// let leapYears = 0;
// let year = startYear;

// while(true) {
//     if(isLeapYear(year)){
//         leapYears++;
//         console.log(year);
//     }

//     if (leapYears >= 20) {
//         break;
//     }
//     year++;
// }

// Перебор строки (по символьно)

// let str = "abcdefgh"

//let idx = 0

// while(idx < str.length) {
//     console.log(str[idx]);
//     idx++
// }

// for(let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// Перебор строки (по символьно) в обратном порядке

// for(let i = str.length-1; i >= 0; i--) {
//     console.log(str[i]);
// }


//FizzBuzz
// Fizz - делится на 3
// Buzz - делится на 5
// FizzBuzz - Делится на 3 и на 5 

// const fizzBuzz = num => {
    
//     if(num % 15 === 0) {
//         return 'FizzBuzz';
//     } else if(num % 3 === 0) {
//         return 'Fizz';
//     } else if(num % 5 === 0 ) {
//         return 'Buzz';
//     } else {
//         return num;
//     }

// }

// const fizzBuzzNew = num =>
//     (num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz') || num

// let idx = 1
// while(idx <= 100) {

//    console.log(fizzBuzzNew(idx)); 
   
//    idx++
// }

//
let n = 123124
let sum = 0;
while(n != 0) {
    sum += n % 10;
    n = Math.trunc(n / 10)
}

//123 % 10 = 3
// sum += 3
// n = 123 / 10 = 12.3
// n = Math.trunc(12.3) = 12

//12 % 10 = 2
// sum += 2
// n = 12 / 10 = 1.2
// n = Math.trunc(1.2) = 1

//1 % 10 = 1
// sum += 1
// n = 1 / 10 = 0
// n = Math.trunc(0) = 0



console.log(sum);