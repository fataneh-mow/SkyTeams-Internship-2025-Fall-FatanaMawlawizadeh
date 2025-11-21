import { it, describe, expect } from "vitest";
import { swap } from "../src/question1";

describe("swap function", () => {
  it("swaps two values", () => {
    expect(swap(2, 3)).toEqual([3, 2]);
  });

  it("works with zero", () => {
    expect(swap(0, 10)).toEqual([10, 0]);
  });
});