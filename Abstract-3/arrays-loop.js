// let numbers = [1, 13, 45, 2, 0, 48]

const getSum = arrNum => {
    let container = 0
    for (let i = 0; i < arrNum.length; i++) {
        container += arrNum[i]
    }
    return container
}

// console.log(getSum(numbers));


// const getMin = arrNum => {
//     let minVal = Infinity
//     for (let i = 0; i < arrNum.length; i++) {
//         if(arrNum[i] < minVal) {
//             minVal = arrNum[i]
//         }
//     }

//     return minVal
// }

// console.log(getMin(numbers));

// const getMax = arrNum => {
//     let maxVal = -Infinity
//     for (let i = 0; i < arrNum.length; i++) {
//         if(arrNum[i] > maxVal) {
//             maxVal = arrNum[i]
//         }
//     }

//     return maxVal
// }


// console.log(getMax(numbers));


// const getRange = arrNum => {


//     return [getMin(arrNum), getMax(arrNum)]
// }


// console.log(getRange(numbers));

// const contains = (arrNum, num) => {
//     for (let i = 0; i < arrNum.length; i++) {
//         if(arrNum[i] === num) {
//            return true
//         } 
//     }
//     return false
// }

// console.log(contains(numbers,2));

// Третий вариант поиска пропущенного

// const getMissing2 = array => {
//     for (let n = 1; n <= array.length + 1; n++) {
//         if(!contains(array, n)) {
//             return n
//         }   
//     }
// }

// console.log(getMissing2(incomplete));

// 1 2 3    = 2 * 2 * 2 = 6

// 1 2 3 4 5 = 3 * 3 * 3 * 3 * 3 = 15 

// 1 2 3 4 = 10 / 4 = 2.5 * 2.5 * 2.5 * 2.5

// 1 2 3 5 = 11 

// Третий вариант поиска пропущенного

// const getSumN = n => n * (n + 1) / 2
// const getMissing3 = array => {
//     return getSumN(array.length + 1) - getSum(array) 
// }

// let incomplete = [1, 2, 6, 7, 3, 5, 8, 9]
// console.log(getMissing3(incomplete));
 


// // Стэк

// // Добавить в конец
// console.log(numbers.push(1000));
// console.log(numbers);

// // Удалить с конца
// console.log(numbers.pop());
// console.log(numbers);

// console.log('-----');

// // Добавить в начало
// console.log(numbers.unshift(1000));
// console.log(numbers);

// // Удалить сначала
// console.log(numbers.shift());
// console.log(numbers);

// // Стэк push + pop или unshift + shift


// // Очередь

// // Добавить в конец
// console.log(numbers.push(1000));
// console.log(numbers);

// // Удалить сначала
// console.log(numbers.shift());
// console.log(numbers);

// console.log('-----');

// // Добавить в начало
// console.log(numbers.unshift(1000));
// console.log(numbers);

// // Удалить с конца
// console.log(numbers.pop());
// console.log(numbers);

const randomInt = (min, max) =>
    min + Math.floor(Math.random() * (max - min))

const createRandomArray = (min, max, n) => {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(randomInt(min,max))
    }
    return arr
}

// console.log(createRandomArray(5,10,5));

// Set (HashSet) - набор уникальных значений


// let arrSet = [1,2,2,3,3,4,1,2]


// const createSet = array => {
//     let set = []
//     for (let i = 0; i < array.length; i++) {
//         if(!contains(set, array[i])) {
//             set.push(array[i])
//         }
//     }

//     return set
// }

// console.log(createSet(arrSet));


// const filterNegative = array => {
//     let positive =[]

//     for (let i = 0; i < array.length; i++) {
//         if(array[i] > 0) {
//             positive.push(array[i])
//         }
//     }
//     return positive
// }


// let negativeArray = [-1,3,4,5,-55,-2]

// console.log(filterNegative(negativeArray));


// const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

// let randYear = createRandomArray(1900,2000,10)

// const areAllLeapYears = array => {

//     for (let i = 0; i < array.length; i++) {
//         if(!isLeapYear(array[i])) {
//             return false
//         }   
//     }    
//     return true
// }

// console.log(areAllLeapYears([2000, 2020, 2024]));



// let sum = 0;
// while (n != 0) {
    // sum += n % 10;
    // n = Math.trunc(n / 10);
// }

// const getDigits = n => {

//     let digits = []
//     while (n != 0) {
//         digits.unshift(n%10) // получаем последний элемент
//         n = Math.trunc(n / 10) // отсекаем последний элемент
//     }

//     return digits
// }


// let digits = getDigits(123456789);
// console.log(digits);
// console.log(getSum(digits));


// let words = ["Победи", "себя", "и", "выиграешь", "тысячи", "битв"];

// const paddEven = (str, length, char =' ') => {
//     let padding = length - str.length;

//     if(padding < 0) {
//         return str
//     }


//     let paddingLeft = ''.padStart(Math.floor(padding / 2), char);
//     let paddingRight = ''.padStart(Math.ceil(padding / 2), char);

//     return paddingLeft + str + paddingRight
    

// }


// const frame = words => {

//     //Найдём самое длинное слово
//     let maxLength = 0

//     for (let i = 0; i < words.length; i++) {
//         if(words[i].length > maxLength) {
//             maxLength = words[i].length
//         }
//     }

//     //Вывести верхнюю рамку
//     let border = ''.padStart(maxLength + 4, "*")
//     console.log(border);

//     // Вывести все слова с рамками по бокам и 'padding'
//     for (let i = 0; i < words.length; i++) {
//         console.log("* " + paddEven(words[i], maxLength) +' *');
//     }


//     //Вывести нижнюю рамку
//     console.log(border);
    
// }

// frame(words)

let randoms = createRandomArray(0,11,1000)


const getAverage = numbers => getSum(numbers) / numbers.length


const analyze = (numbers, max) => {
    console.log(getAverage(numbers));

    let frequencies = [];


    for (let i = 0; i <= max; i++) {
        frequencies[i] = 0  
    }

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        frequencies[number] += 1;
    }

    console.log(frequencies);

    const averageFrequency = getAverage(frequencies)

    console.log(averageFrequency);

    let diviations = []

    for (let i = 0; i <= frequencies.length; i++) {
        diviations[i] = frequencies[i] - averageFrequency      
    }

    console.log(diviations);
}

analyze(randoms, 10);



// 
