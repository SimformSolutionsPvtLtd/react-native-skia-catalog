import type { SkiaValue, SkSVG } from "@shopify/react-native-skia";

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

export interface WifiSignalsProps {
  size: Range<150, 351>;
  opacityOfWifiWave: SkiaValue<number>;
  wifiWaveColor: string;
  curveSvg: SkSVG | null;
}
