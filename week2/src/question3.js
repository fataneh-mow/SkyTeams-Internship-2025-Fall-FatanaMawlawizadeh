/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 16th, 2025

    * Question: Write a function to calculate the area and perimeter of a rectangle

*/

function areaPerimeter (length, width) {
    let area = length * width;

    let perimeter = 2*(length + width);

    return `area => ${area}, perimeter => ${perimeter}`;
    
}

let result = areaPerimeter(2,4);
console.log(result);