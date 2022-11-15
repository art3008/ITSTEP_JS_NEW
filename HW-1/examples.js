// const isLeapYear = (year) => year % 4 === 0 || year % 400 === 0 ? "Високосный" : "Не високосный"

// console.log(isLeapYear(2020));

let email = "example@example.com"

console.log(email.indexOf("@") !== -1);
console.log(email.includes("@"));


let indexOfAt = email.indexOf("@");

if(indexOfAt !== -1) {
    console.log(email.slice(indexOfAt + 1));
} else {
    console.log("Неверный Эмайл");
}


let url = "http://example.com"

console.log(url.startsWith("http"));

const domain = (url) => {
    if(url.startsWith('http://')) {
        return url.slice(7)
    } else {
        return url.slice(8)
    }
}

// const domain = (url) => url.slice(url.indexOf(':') + 3)

console.log(domain(url));



