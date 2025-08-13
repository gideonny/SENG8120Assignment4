export default function calculateCanvasPerimeter(
  length: string,
  width: string
) {
  return 2 * (parseInt(length) + parseInt(width));
}
