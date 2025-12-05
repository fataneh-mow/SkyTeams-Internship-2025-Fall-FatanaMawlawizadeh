/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 8.Menu-Based ATM System 
    Description: Handle options for balance, withdraw, deposit, exit. 
    Example: "100 withdrawn successfully"

*/
let account = 10000;

export function balanceAccount (acc) {
    return acc;
}

export function withdrawFromAccount (withdrawnAmount, acc) {
    if (withdrawnAmount > acc) {
        throw new Error(`${withdrawnAmount} is greater than your account budget`);
    }

    acc -= withdrawnAmount;
    return acc;  
}

export function depositToAccount (depositAmount, acc) {
    acc += depositAmount
    return acc;
}

export function exitFromATM (acc) {
    let finalAmountOfAccount = acc;
    return `Final status of your account ${finalAmountOfAccount}, Thank you for using ATM`
}

console.log(balanceAccount());
console.log(withdrawFromAccount(500, account));
console.log(depositToAccount(100));
console.log(exitFromATM());