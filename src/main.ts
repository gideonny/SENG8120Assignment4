import calculateColorAreas from "./calculateColorAreas";
import calculatePaintForCopies from "./calculatePaintForCopies";

function main() {
  // Inputs
  const length = "10";          // meters
  const width = "20";           // meters
  const numberOfCopies = 5000;     // e.g., 5 copies
  const coveragePerLiter = 11.4; // m² per liter

  // Step 1: calculate areas of the rectangle parts
  const areas = calculateColorAreas(length, width);

  // Step 2: calculate paint required for all copies
  const paintRequired = calculatePaintForCopies(
    length,
    width,
    numberOfCopies,
    coveragePerLiter
  );

  // Step 3: log the results
  console.log(`For ${numberOfCopies} copies of a ${length}x${width} canvas:`);
  console.log(`- Light color (side triangles): ${paintRequired.lightPurplePaint.toFixed(2)} liters`);
  console.log(`- Dark color (central area): ${paintRequired.darkPurplePaint.toFixed(2)} liters`);
  console.log(`- Total paint: ${paintRequired.totalPaint.toFixed(2)} liters`);
}

main();
