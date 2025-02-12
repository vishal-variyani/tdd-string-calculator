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
    expect(add("1,a,3")).toBeNaN();
  });

  test("should handle large numbers", () => {
    expect(add("100,200,300")).toBe(600);
  });

  test("should handle , as well as \n separated numbers", () => {
    expect(add("1,2,3 \n 4")).toBe(10);
  });
});
