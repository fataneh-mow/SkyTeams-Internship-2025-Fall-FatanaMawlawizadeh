/*
    * Author: Fatana Mawlawizadeh *

    * Date: Nov, 27th, 2025 *

    Question 20. Body Mass Index (BMI) Calculator 
    Description: Given weight (kg) and height (m), calculate BMI using: 
    BMI = weight / (height * height) 
    Then categorize it into: 
    • Underweight: BMI < 18.5 
    • Normal weight: 18.5 ≤ BMI < 25 
    • Overweight: 25 ≤ BMI < 30 
    • Obese: BMI ≥ 30 
    Example: 
    Input: 
    70, 1.75 
    Output: 
    BMI = 22.86 (Normal weight)

*/

export function findBMI(weight, height) {
    if (isNaN(Number(weight)) || isNaN(Number(height)) || weight === undefined || weight === null || height === undefined || height === null) {
        throw new Error(`Error: Invalid input
        Make sure input is not one of the following
        String, undefined, null`);
    }

    if (weight <= 0 || height <= 0) {
        throw new Error("Input must not be zero");
    }
    
    // BMI = weight / (height * height) 
    const BMI = weight / (height * height);

    let category = "";
    //  • Underweight: BMI < 18.5 
    // • Normal weight: 18.5 ≤ BMI < 25 
    // • Overweight: 25 ≤ BMI < 30 
    // • Obese: BMI ≥ 30

    if (BMI < 18.5) {
        category = "Underweight";
    } else if (BMI < 25 && BMI >= 18.5) {
        category = "Normal weight";
    } else if (BMI < 30 && BMI >= 25) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // BMI = 22.86 (Normal weight)
    return `BMI = ${BMI.toFixed(2)} (${category})`;
};
console.log(findBMI(54, 1.59));
console.log(findBMI(70, 1.60));
console.log(findBMI(87, 1.70));