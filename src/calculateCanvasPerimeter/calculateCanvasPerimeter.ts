export default function calculateCanvasPerimeter(length: string, width: string): number {
  const l = parseFloat(length);
  const w = parseFloat(width);

  // Return NaN if inputs are not numbers, zero, or negative
  if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) {
    return NaN;
  }

  return 2 * (l + w);
}