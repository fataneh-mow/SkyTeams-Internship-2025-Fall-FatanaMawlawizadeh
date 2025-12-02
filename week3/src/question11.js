/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 26th, 2025 *

    Question 11. Generate all prime numbers up to N 
    Description: List all prime numbers up to a given limit using a loop. 
    Example: 
    Input: 
    10 
    Output: 
    2, 3, 5, 7

*/

export function listPrimes (number) {
    if (isNaN(Number(number)) || number === undefined || number === null) {
        throw new Error("Input must be number");
    }

    if (number < 2) {
        throw new Error(`${number} is uncheckable`);
    }

    let primes = [];

    for (let i = 2; i <= number; i++) {
        let isPrime = true;

        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) { 
            primes.push(i);
        }
    };

    return `${number} list of primes are ${primes}`;
};