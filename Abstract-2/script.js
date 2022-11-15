const randomInt = (min, max) =>
    min + Math.floor(Math.random() * (max - min))


// console.log(randomInt(5,20));


// let n = 9.1
// console.log(Math.floor(n)); // Округление вниз = к ближайшему снизу числу
// console.log(Math.ceil(n));  // Округление вверх = к ближайщему сверху числу
// console.log(Math.trunc(n)); // Отбрасывает все после запятой
// console.log(Math.round(n)); // Математическое округление


let n = 15;

let i = 0; // Инициализация

while(i < n)  { //Условие продолжения цикла
    
    console.log(i); // Тело цикла
    
    i += 1 // Инкремент
}

console.log('Done');

for(let i = 0; i < n; i++) {
    console.log(i);
}
console.log('Done');

for(let i = 0; i < n; i += 2) {
    console.log(i);
}

console.log('Done');
 

