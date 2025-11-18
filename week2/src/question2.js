/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 16th, 2025

    * Question: Write a function that finds greatest and largest of 3 numbers

*/

export function minMax (a, b, c) {
    items = [a, b, c];

    let max = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i] > max) {
            max = items[i];
        };
    };

    let min = items[0];
    for ( i = 0; i < items.length; i++) {
        if (min > items[i]){
            min = items[i];
        };
    };
};
