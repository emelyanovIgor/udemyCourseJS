"use strict";

//the task 1

let money = prompt('Ваш бюджет на месяц?', '8000 uah');
let time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
let appData = {
    budget: money,
    timeData: time,
    //expenses : ,
    //optionalExpenses : ,
    //income : ,
    savings: false
};

console.log(money);
console.log(time);
console.log(appData);