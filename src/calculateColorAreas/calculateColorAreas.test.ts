import calculateColorAreas from './calculateColorAreas';

describe('calculateColorAreas', () => {
  test('calculates areas correctly for valid numeric strings', () => {
    const result = calculateColorAreas('9', '6');

    expect(result).toEqual({
      sideTrianglesArea: 18,
      centralArea: 36,
      totalArea: 54
    });
  });

  test('returns NaN for non-numeric input', () => {
    expect(calculateColorAreas('abc', '6')).toEqual({
      sideTrianglesArea: NaN,
      centralArea: NaN,
      totalArea: NaN
    });
  });

  test('returns NaN for negative or zero values', () => {
    expect(calculateColorAreas('-5', '6')).toEqual({
      sideTrianglesArea: NaN,
      centralArea: NaN,
      totalArea: NaN
    });

    expect(calculateColorAreas('5', '0')).toEqual({
      sideTrianglesArea: NaN,
      centralArea: NaN,
      totalArea: NaN
    });
  });

  test('handles decimal string inputs correctly', () => {
    const totalArea = 4.5 * 3.2;
    const singleTriangle = 0.5 * (4.5 / 3) * 3.2;
    const sideTriangles = 2 * singleTriangle;
    const central = totalArea - sideTriangles;

    const result = calculateColorAreas('4.5', '3.2');

    expect(result.totalArea).toBeCloseTo(totalArea);
    expect(result.sideTrianglesArea).toBeCloseTo(sideTriangles);
    expect(result.centralArea).toBeCloseTo(central);
  });
});
