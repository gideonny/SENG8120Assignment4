import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  test("returns correct perimeter for valid numbers", () => {
    const result = calculateCanvasPerimeter("10", "100");
    expect(result).toEqual(220);
  });

  test("returns NaN if inputs are not numbers", () => {
    expect(calculateCanvasPerimeter("a", "100")).toBeNaN();
    expect(calculateCanvasPerimeter("10", "foo")).toBeNaN();
  });

  test("handles decimal inputs", () => {
    const result = calculateCanvasPerimeter("1.5", "2.5");
    expect(result).toEqual(8);
  });

  test("returns NaN if any input is 0", () => {
    expect(calculateCanvasPerimeter("0", "10")).toBeNaN();
    expect(calculateCanvasPerimeter("10", "0")).toBeNaN();
    expect(calculateCanvasPerimeter("0", "0")).toBeNaN();
  });
});