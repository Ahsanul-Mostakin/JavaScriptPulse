class Father {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

    greet() {
        console.log(`Hello, I am ${this.first_name} ${this.last_name}, the Father.`);
    }
}

class Son extends Father {
    constructor(first_name, last_name, age) {
        super(first_name, last_name);  
        this.age = age;
    }

    greet() {
        console.log(`Hello, I am ${this.first_name} ${this.last_name}, the Son, and I am ${this.age} years old.`);
    }
}

const father = new Father('Ahsanul', 'Mostakin');
father.greet();  

const son = new Son('X', 'Y', 0);
son.greet();  
