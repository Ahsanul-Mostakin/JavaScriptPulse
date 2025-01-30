class Person {
    constructor(first_name, last_name, age) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.first_name} ${this.last_name}, and I am ${this.age} years old.`;
    }
}

let person1 = new Person("Ahsanul", "Mostakin", 25);
console.log(person1.greet());

let person2 = new Person("Shah", "Alam", 30);
console.log(person2.greet());
