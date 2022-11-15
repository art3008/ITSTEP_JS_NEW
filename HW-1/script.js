const changeBalance = (balance,amount) => balance + amount;


const balanceAndLogger = (balance) => {
    console.log(`В коробке ${balance}`);
    if(balance > 0) {
        console.log("Полная коробка");
    } else if(balance === 0) {
        console.log("Пустая коробка");
    } else {
        console.log("Кредитная коробка");
    }
}

let amountApple = 0;

balanceAndLogger(amountApple)

amountApple = changeBalance(amountApple,1000)
balanceAndLogger(amountApple)

amountApple = changeBalance(amountApple,4000)
balanceAndLogger(amountApple)

amountApple = changeBalance(amountApple,-1000)
balanceAndLogger(amountApple)


// console.log(`В коробке ${amountApple} яблок`);

// if(amountApple > 0) {
//     console.log("Полная коробка");
// } else if (amountApple === 0){
//     console.log("Пусто");
// } else {
//     console.log("Кредитная коробка");
// }

// amountApple += 2000;

// console.log(`В коробке ${amountApple} яблок`);

// if(amountApple > 0) {
//     console.log("Полная коробка");
// } else if (amountApple === 0){
//     console.log("Пусто");
// } else {
//     console.log("Кредитная коробка");
// }

// amountApple -= 100;
// console.log(`В коробке ${amountApple} яблок`);

// if(amountApple > 0) {
//     console.log("Полная коробка");
// } else if (amountApple === 0){
//     console.log("Пусто");
// } else {
//     console.log("Кредитная коробка");
// }

// amountApple -= 2000;
// console.log(`В коробке ${amountApple} яблок`);

// if(amountApple > 0) {
//     console.log("Полная коробка");
// } else if (amountApple === 0){
//     console.log("Пусто");
// } else {
//     console.log("Кредитная коробка");
// }



