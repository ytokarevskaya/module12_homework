// 12.3 Task 4
// Общие параметры приборов
function Device(status, power) {
    this.status = status;
    this.power = power;
}

// Включен ли прибор в розетку
Device.prototype.isPluggedIn = function () {
    if (this.status === 'sleep') {
        return `${this.name} ${this.brand} is sleeping`
    } else {
        return `${this.name} ${this.brand} is plugged ${this.status}`
    }
};

// Потребляемая мощность в зависимости от статуса
Device.prototype.currentPower = function () {
    if (this.status === "in") {
        return `${this.name} ${this.brand} is plugged in, power consumption - ${this.power} W`;
    } else if (this.status === 'sleep') {
        this.power = this.power / 2;
        return `${this.name} ${this.brand} is plugged in, power consumption - ${this.power} W`
    } else {
        return `${this.name} ${this.brand} is plugged out, power consumption - 0 W`;
    }
};

// Описание ноутбука
function Laptop(status, power, brand, diagonal, operatingSystem) {
    this.name = "Laptop";
    this.status = status;
    this.power = power;
    this.brand = brand;
    this.diagonal = diagonal;
    this.operatingSystem = operatingSystem;
}

Laptop.prototype = new Device();

// Проверка установленной операционной системы
Laptop.prototype.infoOS = function () {
    return `Operating system is ${this.operatingSystem}`;
};

// Описание настольной лампы
function TableLamp(status, power, brand, socle) {
    this.name = "Table Lamp";
    this.status = status;
    this.power = power;
    this.brand = brand;
    this.socle = socle;
}

TableLamp.prototype = new Device();

// Проверка типа цоколя
TableLamp.prototype.infoSocle = function () {
    return `Lamp socle is ${this.socle}`;
};

const asus = new Laptop('out', 300, "Asus", 15.6, 'Linux');
const unnamedLamp = new TableLamp('in', 40, 'Unnamed', 'E46');

console.log(asus.isPluggedIn());
console.log(unnamedLamp.infoSocle());
