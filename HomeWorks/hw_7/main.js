const createArray = (mapFunction = index => index) => length => 
    Array.from({length}, (_, index) =>mapFunction(index));
    //Array.from({length}.map((_), index) => index)

const randomInt = (min, max) =>
    min + Math.floor(Math.random() * (max - min))

const createRandomArray = (min, max) => 
    createArray(() => randomInt(min, max));

const nNounRus = (form1, form2, form3) => {
    return (n) => {
        let absN = Math.abs(n)

        //123456
        let lastDigt = n % 10;
        let secondToLastDigits = Math.trunc((n / 10) % 10) //12345 % 10 = 5

        let word;
        if(secondToLastDigits === 1) {
            word = form3
        } else {
            if(lastDigt === 1) {
                word = form1;
            } else if (2 <= lastDigt && lastDigt <= 4){
                word = form2
            } else {
                word = form3
            }
        }
        return absN + " " + word
    }
}

const getSum = array => array.reduce((a,b) => a + b,0)

const getAverage = numbers => getSum(numbers) / numbers.length

const logBoxState = box => {
    console.log(`В ящике ${nApples(box)}`);

    if(box > 0) {
        console.log(`Полная коробка`);
    } else if(box === 0) {
        console.log(`Пустая коробка`);
    } else { // box < 0
        console.log(`Кредитная коробка`);
    }
}

const nApples = nNounRus('яблоко','яблока','яблок')
const logTransaction = amount => {
    console.log('----------');
    if(amount >= 0) {
        console.log(`Получили ${nApples(amount)}`);
    } else {
        console.log(`Потеряли ${nApples(Math.abs(amount))}`);
    }
}

const logResult = (box, goal) => {
    
    console.log('----------');
    if(box >= goal) {
        
        console.log(`Ура мы накопили ${nApples(box)}!`);
    } else {
        console.log(`Не повезло, не фартануло. Мы накопили только ${nApples(box)}!`);   
    }
}

const areAllPositive = array => array.every(item => item > 0)

const arrRevers = array => array.reverse()

const logStatistics = transactions => {
    let gains = transactions.filter(item => item > 0)
    let loses = transactions.filter(item => item < 0)

    console.log(`Суммарный доход ${getSum(gains)}`);
    console.log(`Суммарный расход ${getSum(loses)}`);

    console.log(`Средний доход ${getAverage(gains)}`);
    console.log(`Средний расход ${getAverage(loses)}`);
    console.log('----------');
}



const getIncomeOrExpense = transactions => transactions.map(item => item > 0 ? console.log('Доход: ' + item) : console.log('Расход: ' + item))

// -------
let goal = 50

let box = 0;
logBoxState(box);

let amounts = createRandomArray(-10, 30) (30);

console.log(amounts);

let transactions = []

while(box < goal && amounts.length > 0) {

    let amount = amounts.shift();
    box += amount;

    transactions.push(amount)

    logTransaction(amount)
    logBoxState(box);
}

logResult(box, goal)
logStatistics(transactions);
console.log(transactions);
const rvrsTransact = arrRevers(transactions);
console.log(rvrsTransact);
getIncomeOrExpense(rvrsTransact)
console.log(areAllPositive(transactions) === true ? 'О, у нас все положительные транзакции' : 'Увы, но ни одной положительной транзакции');