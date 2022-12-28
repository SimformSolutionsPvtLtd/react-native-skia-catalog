import type { Color } from "@shopify/react-native-skia";

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

export interface AnimatedCardProps {
  id: number;
  originX: number;
  originY: number;
  cardNumber: number;
  color: Color[];
  size: Range<50, 270>;
}

export interface UseAnimatedCardProps {
  cardNumber?: number;
}
