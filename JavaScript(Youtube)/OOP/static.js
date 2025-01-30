class Person{
    static first_name = "Ahsanul"
    static last_name = "Mostakin"


    static getName(){
        return `My name is ${this.first_name} ${this.last_name}`
    }

}


//let PersonObj = new Person();

console.log(Person.first_name);
console.log(Person.last_name);
console.log(Person.getName());