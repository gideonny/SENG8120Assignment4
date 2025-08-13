export default function estimatePaintingTime(area: number, paintingSpeed: number): number {
  // Negative area or non-positive speed is invalid
  if (area < 0 || paintingSpeed <= 0) {
    return NaN;
  }

  // Zero area → zero time
  if (area === 0) {
    return 0;
  }

  return area / paintingSpeed;
}
