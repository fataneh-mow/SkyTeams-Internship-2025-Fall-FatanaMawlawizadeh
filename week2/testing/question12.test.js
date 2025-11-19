/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 19th, 2025

    * Question 11:  Simple Calculator using switch-case 
    Description: Input two numbers and an operator (+, -, *, /) and compute the result. 
    Example: 
    Input: 
    5, 3, + 
    Output: 
    8     
   
*/

import { describe, it, expect } from "vitest";
import { trafficLight } from "../src/question12";

describe("trafficLight function decides to return Stop, Ready or Go based on the color it takes as input", () => {
    it("Does not check for unapplicable colors", () => {
        expect(trafficLight(12)).toBe("12 is not applicable");
        expect(trafficLight(null)).toBe("null is not applicable");
        expect(trafficLight(undefined)).toBe("undefined is not applicable");
        expect(trafficLight("Orange")).toBe("Orange is not applicable");
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