// Function Scope vs Block Scope


// Function Scope

function myFunc(){
    if(true){
        var name = 'JavaScript';
        console.log(name);
    
    }

    console.log(name); // access name variable due to function scope
}
myFunc();



// Block Scope


function myFunc1(){
    if (true){
        let greet = 'hi';
        const course = 'JavaScript';
        
        console.log(greet);
        console.log(course);

    }

    console.log(greet); // greet is not defines
}

myFunc1();
