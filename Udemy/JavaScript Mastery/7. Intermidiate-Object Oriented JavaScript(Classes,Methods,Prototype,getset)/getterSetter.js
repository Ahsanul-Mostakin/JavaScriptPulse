class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter for full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter for full name
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

const person = new Person('John', 'Doe');

// Using the getter
console.log(person.fullName);  // Output: John Doe

// Using the setter
person.fullName = 'Jane Smith';
console.log(person.firstName);  // Output: Jane
console.log(person.lastName);   // Output: Smith
console.log(person.fullName);   // Output: Jane Smith
