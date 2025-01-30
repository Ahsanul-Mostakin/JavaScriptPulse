class Father {
    greet() {
        console.log("Hello from Father!");
    }
}

class Son extends Father {
    greet() {
        console.log("Hello from Son!");  
    }
}

const father = new Father();
father.greet();  

const son = new Son();
son.greet();  
