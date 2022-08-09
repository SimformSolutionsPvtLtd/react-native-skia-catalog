export function getOutputRange(
  base: number,
  index: number,
  count: number,
  samples: number
): number[] {
  const range: number[] = Array.from(
    new Array(samples),
    (_item, i: number) =>
      base * Math.abs(Math.cos((Math.PI * i) / (samples - 1)))
  );

  for (let j: number = 0; j < index * (samples / count); j++) {
    range.unshift(range.pop() || 0);
  }

  range.unshift(...range.slice(-1));

  return range;
}
