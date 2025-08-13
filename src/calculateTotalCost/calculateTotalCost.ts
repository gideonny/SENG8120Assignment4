export default function calculateTotalCost(paintCost: number, laborCost: number): number {
  // Return NaN if either cost is negative
  if (paintCost < 0 || laborCost < 0) {
    return NaN;
  }

  return paintCost + laborCost;
}