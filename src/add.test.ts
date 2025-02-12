import { add } from "./app";

describe("add function", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the sum of comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("should return the sum of a single number", () => {
    expect(add("5")).toBe(5);
  });

  test("should handle invalid numbers", () => {
    expect(() => add("1,a,3")).toThrow("Invalid input a");
  });

  test("should handle large numbers", () => {
    expect(add("100,200,300")).toBe(600);
  });

  test("should handle , as well as \n separated numbers", () => {
    expect(add("1,2,3 \n 4")).toBe(10);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => add("1,-2,-4")).toThrow("negative numbers not allowed -2, -4");
  });

  test("should handle a different delimiter", () => {
    expect(add("//[;]\n1;2")).toBe(3);
  });

  test("should ignore number greater than 1000", () => {
    expect(add("1001, 2")).toBe(2);
  });

  test("should handle different delimiter of length more than one char", () => {
    expect(add("//[;;]\n1;;2")).toBe(3);
  });

  test("should handle multiple different delimiter of length more than one char", () => {
    expect(add("//[;][%]\n1;2%3")).toBe(6);
  });
});
