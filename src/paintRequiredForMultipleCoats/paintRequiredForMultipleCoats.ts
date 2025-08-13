export default function paintRequiredForMultipleCoats(
  area: number,
  coveragePerLiter: number,
  coats: number
): number {
  if (area <= 0 || coveragePerLiter <= 0 || coats < 0) {
    return NaN;
  }

  if (coats === 0) {
    return 0;
  }

  return (area / coveragePerLiter) * coats;
}
