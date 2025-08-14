export interface ColorAreas {
  sideTrianglesArea: number;
  centralArea: number;
  totalArea: number;
}

export default function calculateColorAreas(length: string, width: string): ColorAreas {
  const l = parseFloat(length);
  const w = parseFloat(width);

  if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) {
    return {
      sideTrianglesArea: NaN,
      centralArea: NaN,
      totalArea: NaN
    };
  }

  // Total rectangle area
  const totalArea = l * w;
  
  // Each side triangle: base = length/3, height = width
  const singleTriangleArea = 0.5 * (l / 3) * w;
  const sideTrianglesArea = 2 * singleTriangleArea; // Two triangles
  
  // Central area is what's left
  const centralArea = totalArea - sideTrianglesArea;

  return {
    sideTrianglesArea,
    centralArea,
    totalArea
  };
}