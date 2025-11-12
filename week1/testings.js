"use strict";

console.log("TESTINGS");

// swap function
console.log("Swap Tests");
console.log(`Swap 5 and 10: ${swap(5, 10)}`);
console.log(`Swap 0 and -7: ${swap(0, -7)}`);
console.log(`Swap 100 and 100: ${swap(100, 100)}`);

// even or odd
console.log("Even or Odd or Prime tests");
console.log(`346: ${isEven(346)}, ${isPrime(346)}`);
console.log(`-900: ${isEven(-900)}, ${isPrime(-900)}`);
console.log(`0: ${isEven(0)}, ${isPrime(0)}`);

// array sum
console.log("Array Sum");
console.log(`Array:[1,2,3,4] ${arraySum([1,2,3,4])}`);
console.log(`Array:[10, -10, 5, 5] ${arraySum([10, -10, 5, 5])}`);
console.log(`Array:[] ${arraySum([])}`);
console.log(`Array:[100] ${arraySum([100])}`);

// Reserve string, list
console.log("reverse string or list tests");
console.log(`1234 reserved = ${reverseString("1234")}`);

const testStrings = ["Hello World", "", "hello1234"];
testStrings.forEach(str => {
    console.log(`"${str}" reversed = "${reverseString(str)}"`);
});

const testLists = [["apple", "banana", "cherry"], [], ["one"], ["a","b","c","d"]]; // [] --> ?
testLists.forEach(list => {
    console.log(`[${list}] reversed = ${reverseList(list)}`);
});

// Greatest number
console.log("greatest number tests");
const testGreatest = [[1,2,3,4,5], [100, 23, 54, 12], [-10, -3, -20], [7]];
testGreatest.forEach(arr => {
    console.log(`Greatest in [${arr}] = ${greatestNumber(arr)}`);
});
