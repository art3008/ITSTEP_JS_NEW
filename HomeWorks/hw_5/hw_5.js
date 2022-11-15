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

const randomInt = (min, max) =>min + Math.floor(Math.random() * (max - min));

const createRandomArray = (min, max, length) => {let arr = [];for (let i = 0; i < length; i++){arr.push(randomInt(min, max));}return arr;};


const filter = predicate => array => {
    let filtered = [];
    for (let i = 0; i < array.length; i++) {
        if(predicate(array[i])) {
            filtered.push(array[i])
        }
    }
    return filtered
}

const filterOnlyNegative = filter(n => n < 0);
const filterOnlyPositive = filter(n => n > 0);

const getSum = array => 
{
    let counter = 0 
    for (let i = 0; i < array.length; i++) {
        counter += array[i]
    }

    return counter
}

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

const logStatistics = transactions => {
    let gains = filterOnlyPositive(transactions)
    let loses = filterOnlyNegative(transactions)

    console.log(`Суммарный доход ${getSum(gains)}`);
    console.log(`Суммарный расход ${getSum(loses)}`);

    console.log(`Средний доход ${getAverage(gains)}`);
    console.log(`Средний расход ${getAverage(loses)}`);

}

// -------
let goal = 100

let box = 0;
logBoxState(box);

let amounts = createRandomArray(-10, 30, 30);


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
