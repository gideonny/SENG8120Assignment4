import calculatePaintForCopies, { PaintRequirements } from './calculatePaintForCopies';

describe('calculatePaintForCopies', () => {
  it('calculates paint requirements correctly for valid inputs', () => {
    const result: PaintRequirements = calculatePaintForCopies('9', '6', 2, 9);

    const expectedLightPerCopy = 18 / 9; // 2 liters
    const expectedDarkPerCopy = 36 / 9;  // 4 liters

    expect(result.lightPurplePaint).toBeCloseTo(expectedLightPerCopy * 2); // 4 liters
    expect(result.darkPurplePaint).toBeCloseTo(expectedDarkPerCopy * 2);   // 8 liters
    expect(result.totalPaint).toBeCloseTo(12);
  });

  it('returns NaN for non-numeric length or width', () => {
    const result = calculatePaintForCopies('abc', '6', 3, 10);
    expect(result.lightPurplePaint).toBeNaN();
    expect(result.darkPurplePaint).toBeNaN();
    expect(result.totalPaint).toBeNaN();
  });

  it('returns NaN for zero or negative numberOfCopies', () => {
    const result1 = calculatePaintForCopies('5', '6', 0, 10);
    expect(result1.totalPaint).toBeNaN();

    const result2 = calculatePaintForCopies('5', '6', -2, 10);
    expect(result2.totalPaint).toBeNaN();
  });

  it('returns NaN for zero or negative coveragePerLiter', () => {
    const result1 = calculatePaintForCopies('5', '6', 2, 0);
    expect(result1.totalPaint).toBeNaN();

    const result2 = calculatePaintForCopies('5', '6', 2, -5);
    expect(result2.totalPaint).toBeNaN();
  });

  it('handles decimal inputs correctly', () => {
    const length = '4.5';
    const width = '3.2';
    const numberOfCopies = 1.5;
    const coveragePerLiter = 5.5;

    // Areas from calculateColorAreas:
    const totalArea = 4.5 * 3.2;
    const sideTrianglesArea = 2 * (0.5 * (4.5 / 3) * 3.2);
    const centralArea = totalArea - sideTrianglesArea;

    const expectedLight = (sideTrianglesArea / coveragePerLiter) * numberOfCopies;
    const expectedDark = (centralArea / coveragePerLiter) * numberOfCopies;
    const expectedTotal = expectedLight + expectedDark;

    const result = calculatePaintForCopies(length, width, numberOfCopies, coveragePerLiter);

    expect(result.lightPurplePaint).toBeCloseTo(expectedLight);
    expect(result.darkPurplePaint).toBeCloseTo(expectedDark);
    expect(result.totalPaint).toBeCloseTo(expectedTotal);
  });
});
