//zadanie pierwsze

const a = "Hello ";
const b = "World!";

const c = `${a} ${b}`;

console.log(c);

//zadanie drugie

const multiply = (a = 1, b = 1) => (a * b);
multiply(2,4);

//zadanie trzecie

const average = (...items) => items.reduce((a,b) => a+b,0)/items.length;
average(1,2,3,4,5,6,7,8,9);

//zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(…grades);

//zadanie piąte

const dane = [1, 4,'Iwona', false, 'Nowak'];
const [, , third, , fifth] = dane;
const fullName= {
    firstName: third,
    secondName: fifth
};
console.log(fullName);
