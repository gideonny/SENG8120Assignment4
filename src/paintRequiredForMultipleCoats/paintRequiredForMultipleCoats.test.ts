import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test('should calculate paint required correctly for positive values', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
    expect(paintRequiredForMultipleCoats(200, 20, 3)).toBe(30);
    expect(paintRequiredForMultipleCoats(150, 15, 4)).toBe(40);
  });

  test('should return 0 if number of coats is 0', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 0)).toBe(0);
  });

  test('should return NaN for area of 0 or negative', () => {
    expect(paintRequiredForMultipleCoats(0, 10, 2)).toBeNaN();
    expect(paintRequiredForMultipleCoats(-100, 10, 2)).toBeNaN();
  });

  test('should return NaN for coveragePerLiter of 0 or negative', () => {
    expect(paintRequiredForMultipleCoats(100, 0, 2)).toBeNaN();
    expect(paintRequiredForMultipleCoats(100, -10, 2)).toBeNaN();
  });

  test('should return NaN for negative number of coats', () => {
    expect(paintRequiredForMultipleCoats(100, 10, -2)).toBeNaN();
  });
});
