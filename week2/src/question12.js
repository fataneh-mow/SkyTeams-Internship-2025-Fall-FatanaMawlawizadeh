/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 19th, 2025

    * Question 12. Traffic Light System using switch-case 
    Description: Input a color (Red, Yellow, Green) and display an action (Stop, Ready, Go). 
    Example: 
    Input: 
    Green 
    Output: 
    Go   
   
*/

export function trafficLight (color) {
    if (typeof color !== "string") {
        return `Input must be color`;
    };

    switch (color.toLocaleLowerCase().trim()) {
        case "red":
            return "Stop"; 
        case "yellow":
            return "Ready";  
        case "green":
            return "Go";
        default:
            return `Color must be red, green or yellow`;
    };
};