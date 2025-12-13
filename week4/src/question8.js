/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 5nd, 2025

    Question 8.Menu-Based ATM System 
    Description: Handle options for balance, withdraw, deposit, exit. 
    Example: "100 withdrawn successfully"

*/

let account = 10000;

export function menuOptions(option, acc, amount) {
    switch(option) {
        case 1:
            return balanceAccount(acc);
        case 2:
            return withdrawFromAccount(amount, acc);
        case 3:
            return depositToAccount(amount, acc);
        case 4:
            return exitFromATM(acc);
        default:
            throw new Error(`Error: Invalid option
            Make sure you choose options avaliable from 1 to 4`);
    }
}
export function balanceAccount (acc) {
    return acc;
}

export function withdrawFromAccount (withdrawnAmount, acc) {
    if (withdrawnAmount > acc) {
        throw new Error(`This amount is greater than your account budget`);
    }

    acc -= withdrawnAmount;
    return acc;  
}

export function depositToAccount (depositAmount, acc) {
    acc += depositAmount
    return acc;
}

export function exitFromATM (acc) {
    return `Final status of your account ${acc}, Thank you for using ATM`
}