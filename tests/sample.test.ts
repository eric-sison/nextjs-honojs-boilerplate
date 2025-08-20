import { describe, expect, it } from "vitest";

const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

describe("Simple test", () => {
  it("Should return 2", () => {
    const total = sum(1, 1);
    expect(total).toEqual(2);
  });
});
