const changeBalance = (balance, amount) => balance + amount
const printInfo = (balance) => {

    console.log(`В коробке ${balance}`);

    if(balance > 0) {
        console.log('Полная коробка');
    } else if(balance < 0) {
        console.log('Ушли в минус');
    } else {
        console.log('Пустая коробка');
    }
}

let balance = 0;
printInfo(balance)

balance = changeBalance(balance, 1000)
printInfo(balance)



const loggerApples = (inputLogger, outputLogger) => 
    (balance, amount) => {
        inputLogger(balance, amount)
        balance = changeBalance(balance, amount)
        outputLogger(balance)

        return balance
    }

const newApples = loggerApples(
    (balance, amount) => console.log(`Старое значение ${balance} изменяем на ${amount}`),
    (balance) => console.log(`Новое значение ${balance}`)
)


console.log('---Логгирование---');

balance = 0
balance = newApples(balance, 1000)
balance = newApples(balance, 2000)
balance = newApples(balance, 3000)
