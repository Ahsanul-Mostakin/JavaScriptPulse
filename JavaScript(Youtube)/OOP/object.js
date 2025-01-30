let person = {
    first_name: "Ahsanul",
    last_name: "Mostakin",
    age: 25,
    city: "Dhaka",
    isBangladeshi: true,

    getName:function (){
        return `My full name is ${this.first_name} ${this.last_name}`;
    }

}

console.log(person.getName());
