// Function inside function

// function outerFunc(){
//     innerFunction();
//     console.log("Outer Function is executed");


//     function innerFunction(){
//         console.log('Inner function is executed');
//     }
// }


// outerFunc();


function outerFunc(){
    console.log("Outer Function is executed");


    function innerFunction(){
        console.log('Inner function is executed');
    }
    return innerFunction;
}

outerFunc()();