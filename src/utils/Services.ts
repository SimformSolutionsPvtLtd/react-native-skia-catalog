export const getSizeWithinRange = (
  lowerRange: number,
  higherRange: number,
  size: number
): number => {
  const setSizeInRage = size < lowerRange ? lowerRange : higherRange;
  return size >= lowerRange && size <= higherRange ? size : setSizeInRage;
};
