// Я горжусь своими яблоками

// 1 яблоком
// 2 яблоками
// 3..10 яблоками
// 11.20 яблоками
// 21 яблоком


const nNounRus = (form1, form2) => {

    return (n) => {
        let word;

        if(n % 10 === 1 && n % 100 !== 11) {
            word = form1;
        } else {
            word = form2
        }

        return n + " " + word
    }
}

const printWeHaveSomething = (f) => (n) => {
    console.log(`Я горжусь ${f(n)}`);
}


const printApples = printWeHaveSomething(nNounRus('яблоком',"яблоками"))


let apples = 0;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 110;
printApples(apples)
