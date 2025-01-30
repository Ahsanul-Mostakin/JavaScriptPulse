class Father {
    static greet() {
        console.log("Hello from Father!");
    }
}

class Son extends Father {}

Son.greet();  
