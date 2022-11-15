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
