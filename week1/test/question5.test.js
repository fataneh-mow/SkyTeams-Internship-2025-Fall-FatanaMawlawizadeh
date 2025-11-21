import { describe, it, expect} from "vitest";
import { greatestNumber } from "../src/question5";

describe("gratestNumber finds the biggest numbers in an array", () => {
    it("must find the gratest number in a list or array", () => {
        expect(greatestNumber([43, 50, 98, 65])).toBe(98);
        expect(greatestNumber([789, 0, 10.1])).toBe(789);
        expect(greatestNumber([4.1, -19, -18.54])).toBe(4.1);
        expect(greatestNumber([-43, -50, 0, -65])).toBe(0);
        expect(greatestNumber([])).toBe(null);
        expect(greatestNumber(null)).toBe(null);

    })
})