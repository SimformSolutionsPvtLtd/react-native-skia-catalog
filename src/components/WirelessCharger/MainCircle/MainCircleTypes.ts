import type {
  AnimatedProp,
  SkiaValue,
  Transforms2d,
} from "@shopify/react-native-skia";

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

export interface MainCircleProps {
  size: Range<150, 351>;
  halfSize: number;
  wifiWaveColor: string;
  thunderColor: string;
  circleAnimation: AnimatedProp<Transforms2d | undefined, any>;
  signalOpacity: SkiaValue<number>;
  outerSignalOpacity: SkiaValue<number>;
}
