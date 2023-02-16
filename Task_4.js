/* Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. 
Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :) */

function ElectricalDevice(power, isConnected){
    this.power = power,
    this.isConnected = isConnected,
    this.whereUsed = "everywhere",
    this.getPower = function(){
        return this.power;
    }
    this.showPower = function(){
        console.log(`Power consumption is ${this.getPower} Watt`)
    }
}

ElectricalDevice.prototype.getConnectionInfo = function(){
    return this.isConnected;
}

function HomeElectricalDevice(power, isConnected){
    this.power = power,
    this.isConnected = isConnected,
    this.whereUsed = "home"
}

function MobileElectricalDevice(power, isConnected, hasBattery, chargePercentage){
    this.power = power,
    this.isConnected = isConnected,
    this.hasBattery = hasBattery,
    this.chargePercentage = chargePercentage,
    this.getChargePercentage = function(){
        return this.hasBattery ? this.chargePercentage : undefined;
    }
    this.showChargePercentage = function(){
        const percentage = this.getChargePercentage();
        if (percentage === undefined) {
            console.log("This is wired device without battery");
            return
        }
        let message = this.chargePercentage <= 15 ? `The charge is ${this.chargePercentage}. Your battery is low. Please recharge.` : `The charge is ${this.chargePercentage}. Have a nice day!`;
        return message;
    }
}

HomeElectricalDevice.prototype = new ElectricalDevice();
MobileElectricalDevice.prototype =  new ElectricalDevice();

const tableLamp = new HomeElectricalDevice(60, false);
const laptop = new MobileElectricalDevice(1000, true, true, 100);
const fridge = new HomeElectricalDevice(200, true);
const mobilePhone = new MobileElectricalDevice(25, true, true, 25);

let arrElectricDevices = [];
arrElectricDevices.push(tableLamp, laptop, fridge, mobilePhone);
let powerConsumption = 0;
arrElectricDevices.forEach(device => {
    if (!device.isConnected) {
        return;
    }
    if (device.chargePercentage === 100) {
        return;
    }
    powerConsumption += device.getPower();
});

console.log(powerConsumption);