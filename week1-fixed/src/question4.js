/**
 * Author: Fatana Mawlawizadeh
 
* Date: Nov, 13rd, 2025

* Question: Write a function to reverse a string or list

*/

// string
export function reverseString (str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}
//list
export function reverseList (array){
    let reversed = "";

    for(let i = array.length - 1; i>= 0; i--) {
        reversed += " " + array[i];
    }
    return reversed;
}
