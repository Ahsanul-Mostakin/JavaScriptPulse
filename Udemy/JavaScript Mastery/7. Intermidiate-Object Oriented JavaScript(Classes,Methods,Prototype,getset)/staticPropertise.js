class Car {
    static carCount = 0;

    constructor(make) {
        this.make = make;
        Car.carCount++;
    }

    display() {
        console.log(this.make);
    }

    static displayCount() {
        console.log(Car.carCount);
    }
}

let car1 = new Car('Toyota');
car1.display();          // Toyota
Car.displayCount();      // 1
