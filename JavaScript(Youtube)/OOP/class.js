class Person {
    constructor() {
        this.first_name = "Ahsanul";
        this.last_name = "Mostakin";
        this.age = 25;
        this.city = "Dhaka";
        this.isBangladeshi = true;
    }

    getName() {
        return `My full name is ${this.first_name} ${this.last_name}`;
    }
}

let PersonObj = new Person();
console.log(PersonObj.getName()); 

