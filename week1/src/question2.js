/**
 * Author: Fatana Mawlawizadeh
 
* Date: Nov, 13rd, 2025

* Question: Write a function to check for even, odd or prime numbers

*/
export function isEven(number) {
    if (typeof number !== "number" || isNaN(number)) {
      return `${number} is unchekable, insert another number`;
    }

    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

export function isPrime(number) {
  if (typeof number !== "number" || isNaN(number)) {
    return `${number} is unchekable, insert another number`;
  }

  if (number < 2) {
    return `${number} is unchekable, insert another number`
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}
