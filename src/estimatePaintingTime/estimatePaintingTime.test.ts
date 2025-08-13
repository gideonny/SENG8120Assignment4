import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should calculate painting time correctly for positive values', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(200, 20)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });

  test('should return NaN for painting speed of 0', () => {
    expect(estimatePaintingTime(100, 0)).toBeNaN();
  });

  test('should return 0 for area of 0', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });

  test('should return NaN for negative area', () => {
    expect(estimatePaintingTime(-100, 10)).toBeNaN();
  });

  test('should return NaN for negative painting speed', () => {
    expect(estimatePaintingTime(100, -10)).toBeNaN();
  });

  test('should return NaN if both area and speed are negative', () => {
    expect(estimatePaintingTime(-100, -10)).toBeNaN();
  });
});
