import calculateColorAreas, { ColorAreas } from './calculateColorAreas';

describe('calculateColorAreas', () => {
  it('calculates areas correctly for valid numeric strings', () => {
    const result: ColorAreas = calculateColorAreas('9', '6');
    
    expect(result.totalArea).toBe(54);
    
    expect(result.sideTrianglesArea).toBe(18);
    
    expect(result.centralArea).toBe(36);
  });

  it('returns NaN for non-numeric input', () => {
    const result: ColorAreas = calculateColorAreas('abc', '6');
    expect(result.totalArea).toBeNaN();
    expect(result.sideTrianglesArea).toBeNaN();
    expect(result.centralArea).toBeNaN();
  });

  it('returns NaN for negative or zero values', () => {
    const result1 = calculateColorAreas('-5', '6');
    expect(result1.totalArea).toBeNaN();
    
    const result2 = calculateColorAreas('5', '0');
    expect(result2.centralArea).toBeNaN();
  });

  it('handles decimal string inputs correctly', () => {
    const result = calculateColorAreas('4.5', '3.2');

    const totalArea = 4.5 * 3.2;
    const singleTriangle = 0.5 * (4.5 / 3) * 3.2;
    const sideTriangles = 2 * singleTriangle;
    const central = totalArea - sideTriangles;

    expect(result.totalArea).toBeCloseTo(totalArea);
    expect(result.sideTrianglesArea).toBeCloseTo(sideTriangles);
    expect(result.centralArea).toBeCloseTo(central);
  });
});
