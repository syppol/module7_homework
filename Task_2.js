/* Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false. */

const car = {
    model: "Ford",
    year: 2018,
    signal: function() {
      console.log("beep!");
    }
};

function hasProperty(str, obj){
    for (const key in obj) {
        if (key === str){
            return true;
        }
    }
    return false;
}

console.log(hasProperty('year', car));

/* OR */

/* function hasProperty(str, obj){
    return str in obj;
} */