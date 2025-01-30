class Person {
    // Constructor to initialize properties
    constructor(first_name, last_name, age, city, isBangladeshi) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.city = city;
        this.isBangladeshi = isBangladeshi;
    }


    getName() {
        return `My name is ${this.first_name} ${this.last_name}`;
    }
}


let personInstance = new Person("Ahsanul", "Mostakin", 25, "Dhaka", true);


console.log(personInstance);  
console.log(personInstance.getName());  
