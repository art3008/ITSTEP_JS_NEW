// Я горжусь своими яблоками

// 1 яблоком
// 2 яблоками
// 3..10 яблоками
// 11.20 яблоками
// 21 яблоком

// const nNounRus = (form1, form2) => {

//     return (n) => {
//         let word;

//         if(n % 10 === 1 && n % 100 !== 11) {
//             word = form1;
//         } else {
//             word = form2
//         }

//         return n + " " + word
//     }
// }

// 1 яблоко form1 
// 2 яблока form2 
// 3 яблока form2 
// 4 яблока form2 
// 5 яблок form3 
// 6 яблок form3 
// 7 яблок form3 
// 8 яблок form3 
// 9 яблок form3 
// 10 яблок form3 
// xxxx11-19 яблок form3 
// xxxx20 яблок 
// xxxx21 яблоко 
// xxxx22 яблока 
// xxxx23 яблока 
// xxxx24 яблока 
// xxxx25 яблок 
// xxxx26 яблок 
// xxxx27 яблок 
// xxxx28 яблок 
// xxxx29 яблок 
// xxxx30 яблок

// let absN = Math.abs(n);

// let lastDigit = absN % 10;
// let word;
// let secondLastDigit = Math.trunc(absN / 10) % 10;

const nNounRus =(form1, form2, form3) => {

    return (n) => {

        let word = '';
        let lastVal = n % 10
        let secondLastVal = Math.trunc(n / 10)

        if(secondLastVal === 1) {
            word = form3
        } else {
            
            if(lastVal === 1){
                word = form1
            } else if (lastVal >= 2 && lastVal <= 4) {
                word = form2
            } else {
                word = form3
            }
        }
        return n + ' ' + word;
    }

}


const printWeHaveSomething = (f) => (n) => {
    console.log(`Я вижу ${f(n)}`);
}

// const printApples = printWeHaveSomething(nNounRus('яблоком',"яблоками"))
const printApples = printWeHaveSomething(nNounRus('яблоко',"яблока","яблок"))

let apples = 0;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)
