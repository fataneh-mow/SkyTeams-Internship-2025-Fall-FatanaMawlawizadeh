/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 16th, 2025

    * Question: Write a function to calculate the area and perimeter of a rectangle

*/

export function recangleAreaPerimeter (length, width) {

    if (isNaN(Number(length)) || isNaN(Number(width)) || length === undefined || length === null || width === null || width === undefined) {
        throw new Error("Input must be numbers");
    };

    if ( length <= 0 || width <= 0) {
        throw new Error("Inputs can not be zero or less than")
    }

    let area = length * width;

    let perimeter = 2*(length + width);

    return {area,  perimeter};
};