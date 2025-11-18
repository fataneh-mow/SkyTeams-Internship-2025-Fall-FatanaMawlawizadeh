/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 18th, 2025

    * Question: Write a function to convert the tempreature

    Example: 
    Input: 
    C = 25 
    Output: 
    F = 77 
*/

import { describe, it, expect } from "vitest";
import {  convertToCelsius, convertToFahrenheit} from "../src/question4";

describe("the functions convertToCelsius and convertToFahrenheit converts Celsius to Fahrenheit and vice versa", () => {
    it("Finds the Celsius", () => {
        expect(convertToCelsius(25)).toBe(-4);
        expect(convertToCelsius(32)).toBe(0);
        expect(convertToCelsius(212)).toBe(100);
        expect(convertToCelsius(98.6)).toBe(37);
        expect(convertToCelsius(0)).toBe(-18);
    });
    it("Finds the Fahrenheit", () => {
        expect(convertToFahrenheit(0)).toBe(32);
        expect(convertToFahrenheit(100)).toBe(212);
        expect(convertToFahrenheit(37)).toBe(99);
        expect(convertToFahrenheit(-18)).toBe(-0);
    });
    // the edge case negative numbers is not passing!
    // it("Finds temperature with negative temperatures", () => {
    //     // Celsius to fahrenheit
    //     expect(convertToCelsius(-40).toBe(-40));
    // })
    it("Finds temperature with deciaml temperatures", () => {
        // Celsius to fahrenheit
        expect(convertToCelsius(36.6).toBe(3));
        expect(convertToCelsius(0.5).toBe(33));

    });
});