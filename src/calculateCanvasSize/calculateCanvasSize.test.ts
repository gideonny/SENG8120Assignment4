import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct area for valid numbers", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(1000); 
  });

  test("handles decimal inputs correctly", () => {
    const result = calculateCanvasSize("1.5", "2.5");
    expect(result).toEqual(3.75); 
  });

  test("returns NaN if inputs are not numbers", () => {
    expect(calculateCanvasSize("a", "100")).toBeNaN();
    expect(calculateCanvasSize("10", "foo")).toBeNaN();
    expect(calculateCanvasSize("a", "b")).toBeNaN();
  });

  test("returns NaN if any input is 0", () => {
    expect(calculateCanvasSize("0", "10")).toBeNaN();
    expect(calculateCanvasSize("10", "0")).toBeNaN();
    expect(calculateCanvasSize("0", "0")).toBeNaN();
  });

  test("returns NaN for negative inputs", () => {
    expect(calculateCanvasSize("-10", "100")).toBeNaN();
    expect(calculateCanvasSize("10", "-100")).toBeNaN();
    expect(calculateCanvasSize("-10", "-100")).toBeNaN();
  });
});
