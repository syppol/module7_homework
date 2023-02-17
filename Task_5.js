/* Задание 5.
Переписать консольное приложение из предыдущего юнита на классы. */

class ElectricalDevice {
    constructor (power, isConnected) {
        this.power = power,
        this.isConnected = isConnected,
        this.whereUsed = "everywhere"
    }
    getPower(){
        return this.power;
    }
    showPower(){
        console.log(`Power consumption is ${this.getPower()} Watt`)
    }
    getConnectionInfo(){
        return this.isConnected;
    }
}

class HomeElectricalDevice extends ElectricalDevice{
    constructor(power, isConnected, category) {
        super(power, isConnected),
        this.category = category,
        this.whereUsed = "home"
    }
}

class MobileElectricalDevice extends ElectricalDevice{
    constructor(power, isConnected, hasBattery, chargePercentage) {
        super(power, isConnected),
        this.hasBattery = hasBattery,
        this.chargePercentage = chargePercentage
    }
    getChargePercentage(){
        return this.hasBattery ? this.chargePercentage : undefined;
    }
    showChargePercentage(){
        const percentage = this.getChargePercentage();
        if (percentage === undefined) {
            console.log("This is wired device without battery");
            return
        }
        let message = this.chargePercentage <= 15 ? `The charge is ${this.chargePercentage}. Your battery is low. Please recharge.` : `The charge is ${this.chargePercentage}. Have a nice day!`;
        return message;
    }
}

const tableLamp = new HomeElectricalDevice(60, false, "home office");
const laptop = new MobileElectricalDevice(1000, true, true, 100);
const fridge = new HomeElectricalDevice(200, true, "kitchen");
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