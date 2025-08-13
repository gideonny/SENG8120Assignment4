export default function calculatePaintCost(
  paintRequired: number | string,
  costPerLiter: number | string
): number {
  const paint = parseFloat(paintRequired as any);
  const cost = parseFloat(costPerLiter as any);

  // Return NaN if inputs are not numbers or negative
  if (isNaN(paint) || isNaN(cost) || paint < 0 || cost < 0) {
    return NaN;
  }

  // Return 0 if either input is 0
  if (paint === 0 || cost === 0) {
    return 0;
  }

  return paint * cost;
}
