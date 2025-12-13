/**
    Author: Fatana Mawlawizadeh
 
    Date: Dec, 9th, 2025

    This file is made to have my own functions

*/

export function utilitiesSplit (str, seperator) {
    let arrOfSplittedWords = []
    let current = ""

    for (let i = 0; i < str.length; i++) {
        if (seperator === '') {
            let chars = [];
            for (let i = 0; i < str.length; i++) {
                chars.push(str[i]);
            }
            return chars;
        }
        if (str[i] === seperator) {
            arrOfSplittedWords.push(current)
            current = ""
        } 
        else {
            current += str[i]
        }
    }
    arrOfSplittedWords.push(current)
    return arrOfSplittedWords
}

export function utilitiesInlcludes (str, target) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            return true
        }
    }
    return false
}

export function utilitiesConcat (arr1, arr2) {
    let result = []

    for (let i = 0; i < arr1.length; i++) {
        let charArr1 = arr1[i]
        result.push(charArr1)
    }

    for (let j = 0; j < arr2.length; j++) {
        let charArr2 = arr2[j]
        result.push(charArr2)
    }

    return result;
}

export function utilitiesSortMinToMax (arr) {
    let result = []

    let tempArr = []

    // copying arr inside temp arr
    for (let i = 0; i < arr.length; i++) {
        tempArr.push(arr[i]);
    }
    
    while (tempArr.length > 0) {    
        let min = tempArr[0];

        for (let i = 1; i < tempArr.length; i ++) {
            if (tempArr[i] < min) {
                min = tempArr[i]
            }
        }
        result.push(min)

        let newArr = [];
        // Removing min if it was about to get pushed more than one time
        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i] !== min || (tempArr[i] === min && newArr.includes(min))) {
                newArr.push(tempArr[i]);
            }
        }

        tempArr = newArr;
    }

    return result
}

export function utilitiesSliceString (str, start, end) {
    if (end === undefined) {
        end = str.length;
    }
    
    let result = ""

    for (let i = start; i < end; i++) {
        result += str[i];
    }

    return result
}

export function utilitiesSliceArray (arr, start, end) {
    let result = []

    for (let i = start; i < end; i++) {
        result += arr[i];
    }

    return result
}

export function utilitiesReverseString (str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed
}

export function utilitiesReverseNumber (number) {
    let reversed = 0;
    let num = Math.abs(number);

    while (num > 0) {
        let finalDigit = num % 10;
        reversed = (reversed * 10) + finalDigit;
        num = Math.floor(num /10);
    }

    return Math.sign(number) * reversed;
}

export function utilitiesGenerateSubStringsOfString(str) {
    let result = [];

    for (let start = 0; start < str.length; start++) {
        for (let end = start + 1; end <= str.length; end++) {
            result.push(utilitiesSliceString(str, start, end));
        }
    }

    return result;
}
