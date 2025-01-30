class Person {
    constructor(first_name, last_name, age) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    updateInfo(newFirstName, newLastName, newAge) {
        this.first_name = newFirstName;
        this.last_name = newLastName;
        this.age = newAge;
    }

    greet() {
        return `Hello, my name is ${this.first_name} ${this.last_name}, and I am ${this.age} years old.`;
    }
}

let person1 = new Person("Ahsanul", "Mostakin", 25);
console.log(person1.greet());

person1.updateInfo("Shah", "Alam", 30);
console.log(person1.greet());
