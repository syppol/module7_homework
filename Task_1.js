/* Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */
const car = {
    model: "Ford",
    year: 2018,
    signal: function() {
      console.log("beep!");
    }
};

const premiumCar = Object.create(car);
premiumCar.model = "Audi";
premiumCar.color = "blue";
premiumCar.price = 100000;

const BMWCar = Object.create(premiumCar);
BMWCar.model = "BMW";
BMWCar.horsePower = 200;

function getAllKeysAndValues(obj){
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key: ${key} and value: ${obj[key]}`);
        }
    }
}

getAllKeysAndValues(BMWCar);