import calculateColorAreas from "../calculateColorAreas";

export default function calculatePaintForCopies(
  length: string,
  width: string,
  numberOfCopies: number,
  coveragePerLiter: number
): {
  lightPurplePaint: number;
  darkPurplePaint: number;
  totalPaint: number;
} {
  const areas = calculateColorAreas(length, width);
  
  if (isNaN(areas.totalArea) || numberOfCopies <= 0 || coveragePerLiter <= 0) {
    return {
      lightPurplePaint: NaN,
      darkPurplePaint: NaN,
      totalPaint: NaN
    };
  }

  // Paint needed per copy
  const lightPurplePerCopy = areas.sideTrianglesArea / coveragePerLiter;
  const darkPurplePerCopy = areas.centralArea / coveragePerLiter;
  
  // Total paint for all copies
  const lightPurplePaint = lightPurplePerCopy * numberOfCopies;
  const darkPurplePaint = darkPurplePerCopy * numberOfCopies;
  const totalPaint = lightPurplePaint + darkPurplePaint;

  return {
    lightPurplePaint,
    darkPurplePaint,
    totalPaint
  };
}
