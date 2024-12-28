//logical OR ||
//return true if the both operators is true

let highIncome = false;
let goodCreditScore = false;

let eligiableForLoan = highIncome || goodCreditScore ;

console.log('Eligible',eligiableForLoan);

let applicationRefued = ! eligiableForLoan;

console.log('Application Refused', applicationRefued);
