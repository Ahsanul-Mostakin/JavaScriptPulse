// Lexical Scope

// const num = 30;
// function outer(){

// //    const num = 20;

//     function inner(){
//         // const num = 10;
//         console.log(num); // inner function num

//     }

//     inner();
// }


// outer();


let num1 = 20; // Global enviroment

function outer(){
    console.log(num1);
     
     const num2 = 40 ;
    function inner(){
        console.log(num2);
    }
    inner();
}


outer();