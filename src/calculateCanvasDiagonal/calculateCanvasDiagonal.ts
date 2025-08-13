export default function calculateCanvasDiagonal(length: string, width: string): number {
  const l = parseFloat(length);
  const w = parseFloat(width);

  // Return NaN if inputs are not numbers or if any input is <= 0
  if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) {
    return NaN;
  }

  return Math.sqrt(l ** 2 + w ** 2);
}