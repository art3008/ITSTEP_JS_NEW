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



const randomInt = (min, max) =>
    min + Math.floor(Math.random() * (max - min))

let balance = 0;

console.log('-----------------------');
while(balance < 100) {
    
    balance = logger(balance,randomInt(-5,10))
    console.log('-----------------------');
}
console.log(`Ура мы накопили ${balance}`);

