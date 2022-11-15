const logBalance = (balance) => {

    console.log(`В коробке ${balance} яблок`);

    if(balance > 0) {
        console.log("Полная коробка");
    } else if (balance === 0){
        console.log("Пусто");
    } else {
        console.log("Кредитная коробка");
    } 

}

//Модуль бизнес логики

const changeBalance = (balance, amount) => balance + amount
const getTaxApplicator = tax => amount => amount * (1 + tax) 


//Модуль конкретного использования

let applyTax = getTaxApplicator(0.1) 

let balance = 0;

//logBalance(balance)

balance = changeBalance(balance,1000)
//logBalance(balance)

balance = changeBalance(balance,applyTax(-1000))
//logBalance(balance)



//Модуль тестирования

const balanceChangeLogger = (inputLogger, outputLogger) => 
    
(balance, amount) => {
        inputLogger && inputLogger(balance, amount)
        
        balance = changeBalance(balance, amount)
        
        outputLogger && outputLogger(balance)

    return balance
}




    
const changeAndLogBalance = balanceChangeLogger(
    (balance,amount) => console.log("Старый баланс: " + balance + " Изменяем на: " + amount),
    (balance) => console.log("Новый баланс: " + balance)
) 

console.log(changeAndLogBalance);

applyTax = getTaxApplicator(0.1);

balance = 0; 
balance = changeAndLogBalance(balance, 1500); // balance = balance + 500;
balance = changeAndLogBalance(balance, applyTax(-1000)); // balance = balance - 1000;
balance = changeAndLogBalance(balance, applyTax(-200)); // balance = balance - 1000;