import { it, describe , expect} from "vitest";
import { reverseString } from "../src/question4";
import { reverseList } from "../src/question4";

describe("reverseString must reverse a string or text", () => {
    it("must reverse a string", () => {
        expect(reverseString("hello")).toBe("olleh");
        expect(reverseString("fatana")).toBe("anataf");
        expect(reverseString("black")).toBe("kcalb");
        expect(reverseString("green")).toBe("neerg");
    });
});

describe("reverseList must reverse a list", () => {
    it("must reverst a list or an array", () => {
        expect(reverseList([1,2,3])).toBe("321");
    });
});