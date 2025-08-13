export default function convertAreaToSquareFeet(area: number): number {
  const conversionFactor = 10.7639;

  if (area < 0) {
    return NaN; // Negative areas are invalid
  }

  if (area === 0) {
    return 0; // Zero area stays zero
  }

  return area * conversionFactor;
}
