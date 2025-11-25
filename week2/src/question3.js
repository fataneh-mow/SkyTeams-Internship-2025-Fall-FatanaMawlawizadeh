/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 16th, 2025

    * Question: Write a function to calculate the area and perimeter of a rectangle

*/

export function areaPerimeter (length, width) {
    length = Number(length);
    width = Number(width);

    if (isNaN(Number(length)) || isNaN(Number(width)) || length === undefined || length === null) {
        return `Input must be numbers`
    };

    let area = length * width;

    let perimeter = 2*(length + width);

    return {area,  perimeter};
};