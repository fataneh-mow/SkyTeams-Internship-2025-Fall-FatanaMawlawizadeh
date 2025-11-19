/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 19th, 2025

    * Question: Write a function to calculat grade (0–100 → A–F)      
    Description: Input a student’s marks (0–100) and print the grade based on a scale. 
    Example: 
    Input: 
    85 
    Output: 
    B 
*/

export function calculateGrade (input) {
    const score = Number(input);

    if (isNaN(score)) {
        return `${input} is not checkable`;
    };

    if ( score < 0 || score > 100 ) {
        return `${input} is out of range`;
    };

    if (score >= 90) return "A+";
    if (score >= 80) return "A";
    if (score >= 70) return "B+";
    if (score >= 60) return "B";
    if (score >= 50) return "C+";
    if (score >= 40) return "C+";
    if (score >= 30) return "D";
    if (score < 30) return "F";
};

let result = calculateGrade(0);
console.log(result);