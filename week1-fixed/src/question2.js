/**
 * Author: Fatana Mawlawizadeh
 
* Date: Nov, 13rd, 2025

* Question: Write a function to check for even, odd or prime numbers

*/
export function isEven(n) {
    if (n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

export function isPrime(number) {
  if (number < 2) return;

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}
