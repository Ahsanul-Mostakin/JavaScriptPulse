class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}

class Cat extends Animal {
    speak() {
        console.log("The cat meows.");
    }
}

const animal = new Animal();
animal.speak();  

const dog = new Dog();
dog.speak();  

const cat = new Cat();
cat.speak();  