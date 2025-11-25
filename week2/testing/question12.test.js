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

import { describe, it, expect } from "vitest";
import { trafficLight } from "../src/question12";

describe("trafficLight function decides to return Stop, Ready or Go based on the color it takes as input", () => {
    it("Does not check for unapplicable colors", () => {
        expect(trafficLight(12)).toBe("Input must be color");
        expect(trafficLight(null)).toBe("Input must be color");
        expect(trafficLight(undefined)).toBe("Input must be color");
        expect(trafficLight("Orange")).toBe("Color must be red, green or yellow");
    });
    it("Returns valuse based on switch case properly", () => {
        expect(trafficLight("     RED")).toBe("Stop");
        expect(trafficLight("     RED      ")).toBe("Stop");
        expect(trafficLight("     ReD    ")).toBe("Stop");
        expect(trafficLight("     greeN   ")).toBe("Go");
        expect(trafficLight("     YeLLOw")).toBe("Ready");
        expect(trafficLight("     YeLLOw       ")).toBe("Ready");
        expect(trafficLight("   yELLOW ")).toBe("Ready");
    });
});