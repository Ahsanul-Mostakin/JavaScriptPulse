
let person = Object();


person.first_name = "Ahsanul";
person.last_name = "Mostakin";
person.age = 25
person.city = "Dhaka"
person.isBangladeshi = true


person.getName=()=>{
    return `My name is ${person.first_name} ${person.last_name}`
}


console.log(person.getName());