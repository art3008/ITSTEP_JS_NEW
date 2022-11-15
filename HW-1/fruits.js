const nNounEng = (singular, plural) => {

    if(!plural) {
        plural = 
        singular.slice(-1) === 'y'
        ? plural = singular.slice(0,-1) + 'ies'
        : plural = singular + 's'
    }

    return (n) => n + " " + (n === 1 ? singular : plural)
}

const printWeHaveSomething = (f) => (n) => {
    console.log(`We have ${f(n)}`);
}


const printApples = printWeHaveSomething(nNoun('cherry'))

let apples = 0;
printApples(apples)

apples += 1;
printApples(apples)

apples += 1;
printApples(apples)

apples += 110;
printApples(apples)
