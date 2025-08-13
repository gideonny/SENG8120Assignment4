export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
  // Return NaN if area or coverage is zero or negative
  if (area <= 0 || coveragePerLiter <= 0) {
    return NaN;
  }

  return area / coveragePerLiter;
}
