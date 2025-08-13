import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  test("should calculate paint required correctly for positive values", () => {
    const result = paintRequiredCalculator(50, 10);
    expect(result).toBe(5);

    const result2 = paintRequiredCalculator(100, 25);
    expect(result2).toBe(4);
  });

  test("should return NaN if area is 0", () => {
    expect(paintRequiredCalculator(0, 10)).toBeNaN();
  });

  test("should return NaN if paint coverage per liter is 0", () => {
    expect(paintRequiredCalculator(50, 0)).toBeNaN();
  });

  test("should return NaN for negative area", () => {
    expect(paintRequiredCalculator(-50, 10)).toBeNaN();
  });

  test("should return NaN for negative coverage per liter", () => {
    expect(paintRequiredCalculator(50, -10)).toBeNaN();
  });

  test("should return NaN if both inputs are negative", () => {
    expect(paintRequiredCalculator(-50, -10)).toBeNaN();
  });
});
