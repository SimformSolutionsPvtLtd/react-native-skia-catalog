type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

export type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export interface Coordinates {
  x: number;
  y: number;
}
export type CoordinatesOfCubicTo = {
  cpx1: number;
  cpy1: number;
  cpx2: number;
  cpy2: number;
  x: number;
  y: number;
};

export type CoordinatesOfThunder = {
  x: number;
  y: number;
  cpx1?: number;
  cpy1?: number;
  cpx2?: number;
  cpy2?: number;
};
