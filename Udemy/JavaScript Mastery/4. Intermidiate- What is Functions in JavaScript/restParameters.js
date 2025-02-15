// Rest Parameters in Functions




// calculate sum using rest parameters

/*function calculateSum(...numbers){
    let sum = 0;

    for(let num of numbers){
        sum = sum+num;
    }
    return sum;
}

const sum1 = calculateSum(10,20,30,40,50,60,70,80);
console.log(sum1);

*/


// concat a string with rest parameters

// function concateString(saperator,...strings){
//     return strings.join(saperator);
// }

// const concatStr = concateString('-','apple','banana', 'mango','watermelon','orange');
// const concatStr1 = concateString('|','apple','banana', 'mango','watermelon','orange');

// console.log(concatStr);
// console.log(concatStr1);


// find maximum number among all arguments

function findMax(...rest){
    return Math.max(...rest);
}

const max1 = findMax(10,3,20,40,53,111,121);

console.log(max1);

