// Traditional Method
// Arrow function ( react.js) - reduce the size of code

// find number is Eben or not

// function isEven(n){
//     if(n%2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const isEven1 = isEven(10); // boolean
// console.log(isEven1);

// const isEven = num => num%2==0; //arrow function

// const isEven1 = isEven(11); // boolean
// console.log(isEven1);


// 1. Check number is odd or even

// const isOdd = num =>  num%2 !== 0;


// const isOdd1 = isOdd(10);
// console.log(isOdd1);


// 2. Concat two arrays
// traditional array methods
// function concatArray ( array1, array2){
//     return array1.concat(array2);
// }

// const array1 = [1,2,3,4,5];
// const array2 = [7,8,9];

// const newArray = concatArray(array1,array2);

// console.log(newArray);

//arrow function

// const concatArray = (array1, array2) => array1.concat(array2);


// const array1 = [1,2,3,4,5];
// const array2 = [7,8,9];

// const newArray = concatArray(array1,array2);

// console.log(newArray);

function multiplyArray(array, num){
    const array2 = [];
    for(let i = 0; i<array.length; i++ ){
       array2[i] = array[i]*num;
    }

    return array2;
}

const newArr = multiplyArray([2,3,4,5], 10);
console.log(newArr);

