import { it , describe , expect } from "vitest";
import { arraySum } from "../src/question3";

describe("arraySum must find the sum of an array", () => {
    it("find the sum inside an array", () => {
        expect(arraySum([2,4,5])).toBe(11);
        expect(arraySum([100, 100])).toBe(200);
        expect(arraySum([2,4,0])).toBe(6);
    })
});