function person (){
    this.first_name = "Ahsanul"
    this.last_name = "Mostakin"
    this.age = 25
    this.city = "Dhaka"
    this.isBangladeshi = true

    this.getName = () => {
        return `My name is ${this.first_name} ${this.last_name}`;
    }
    
}

let PersonInstance = new person();


console.log(PersonInstance);