// Instantiation

class Player {
    constructor(name, type) {
        console.log('Player', this);

        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    
    play() {
        console.log(`Wee! I'm a ${this.type}`);
    }
}

// Creating an instance
const wizard1 = new Wizard('Ahsanul', 'Mostakin');

// Using the methods
wizard1.introduce(); // Outputs: Hi, I'm Ahsanul, I'm a Mostakin
wizard1.play();      // Outputs: Wee! I'm a Mostakin
