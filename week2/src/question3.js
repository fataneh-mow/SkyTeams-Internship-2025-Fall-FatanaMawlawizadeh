/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 16th, 2025

    * Question: Write a function to calculate the area and perimeter of a rectangle

*/

export function areaPerimeter (length, width) {
    length = Number(length);
    width = Number(width);

    let area = length * width;

    let perimeter = 2*(length + width);

    return {area,  perimeter};
    
};