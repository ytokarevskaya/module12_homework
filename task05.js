// 12.3 Task 5

class Device {
    constructor(status, power) {
        this.status = status;
        this.power = power;
    };

    isPluggedIn(){
       if (this.status === 'sleep') {
           return `${this.name} ${this.brand} is sleeping`;
       } else {
           return `${this.name} ${this.brand} is plugged ${this.status}`;
       }
    };

    currentPower(){
        if (this.status === "in") {
            return `${this.name} ${this.brand} is plugged in, power consumption - ${this.power} W`;
        } else if (this.status === 'sleep') {
            this.power = this.power / 2;
            return `${this.name} ${this.brand} is plugged in, power consumption - ${this.power} W`
        } else {
            return `${this.name} ${this.brand} is plugged out, power consumption - 0 W`;
        }
    };
}

class Laptop extends Device {
    constructor(brand, diagonal, operatingSystem, status, power) {
        super(status, power);
        this.name = 'Laptop';
        this.brand = brand;
        this.diagonal = diagonal;
        this.operatingSystem = operatingSystem;
    }

    infoOS(){
        return `Operating system is ${this.operatingSystem}`;
    }
}

class TableLamp extends Device {
    constructor(brand, socle, status, power) {
        super(status, power);
        this.name = "Table Lamp";
        this.brand = brand;
        this.socle = socle;
    }

    infoSocle(){
        return `Lamp socle is ${this.socle}`;
    }
}

const asus = new Laptop('Asus', 15.6, "Linux", 'sleep', 400);
const unnamedLamp = new TableLamp('Unnamed', 'E46', 'in', 40);

console.log(asus.isPluggedIn());
console.log(unnamedLamp.isPluggedIn());
