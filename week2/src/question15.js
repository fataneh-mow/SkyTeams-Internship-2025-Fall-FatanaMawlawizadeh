/**
    * Author: Fatana Mawlawizadeh
    
    * Date: Nov, 19th, 2025

    * Question 15. Triangle validity and type 
    Description: Given three sides, determine if they form a valid triangle and if it’s equilateral, 
    isosceles, or scalene. 
    Rule: Sum of any two sides > third side. 
    Example: 
    Input: 
    3, 4, 5 
    Output: 
    Valid triangle, Scalene

 */

export function triangleValidityAndType(side1, side2, side3) {
    const a = Number(side1);
    const b = Number(side2);
    const c = Number(side3);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return "Sides must be numbers";
    }

    // Triangle validity
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle";
    }

    // Triangle type
    if (a === b && b === c) return "Valid triangle, Equilateral";
    if (a === b || a === c || b === c) return "Valid triangle, Isosceles";
    else return "Valid triangle, Scalene";
}

console.log(triangleValidityAndType(3, "4", 5));
console.log(triangleValidityAndType(6, 6, 6));   
console.log(triangleValidityAndType(3, 3, 5));   
console.log(triangleValidityAndType(1, 2, 3));   
console.log(triangleValidityAndType(1, "x", 3)); 