const randomInt = (min, max) => min + Math.floor(Math.random() * (max - min))

const createRandomArray = (min, max, n) => {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(randomInt(min,max))
    }
    return arr
}

const onlyPositive = array => {
    let positive = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            positive.push(array[i])
        }
    }

    return positive
}

const onlyNegative = array => {
    let negative = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            negative.push(array[i])
        }
    }

    return negative
}

const suminArray = array => {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        counter += array[i]
    }
    return counter
}

const changeBalance = (balance, amount) => balance + amount

const balanceChangeLogger = (inputLogger, outputLogger) => 
    
    (balance, amount) => {
        inputLogger(balance, amount)
        balance = changeBalance(balance, amount)
        outputLogger(balance)
    
        return balance
    }

const logger = balanceChangeLogger(
    
    (balance, amount) => amount > 0 
    ? console.log(`Было ${balance} получили ${amount}`) 
    : console.log(`Было ${balance} потеряли ${amount}`),
    (balance) => console.log(`Теперь в коробке ${balance}`)
)


let amounts = createRandomArray(-5,20,30);
let positiveTransact = onlyPositive(amounts);
let negativeTransact = onlyNegative(amounts);
let sumPositTransact = suminArray(positiveTransact);
let sumNegativeTransact = suminArray(negativeTransact);
let averagePositiveTransact = sumPositTransact / positiveTransact.length ;
let averageNegativeTransact = sumNegativeTransact / negativeTransact.length;

console.log(amounts);


console.log(`Доход ${positiveTransact}`);
console.log(`Расход ${negativeTransact}`);
console.log(`Сумма дохода ${sumPositTransact}`);
console.log(`Сумма расхода ${sumNegativeTransact}`);

console.log(`Средний доход ${averagePositiveTransact}`);
console.log(`Средний расход ${averageNegativeTransact}`);


let balance = 0;

console.log('-----------------------');
while(balance < 100) {

    
    let amount = amounts.shift()
    balance = logger(balance,amount)
    console.log('-----------------------');
}

console.log(`Ура мы накопили ${balance}`);