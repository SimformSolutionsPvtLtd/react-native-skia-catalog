import type {
  AnimatedProp,
  SkiaValue,
  SkSVG,
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

export interface WireLessChargerProps {
  size: Range<150, 351>;
  outerCircleColor: string;
  wifiWaveColor: string;
  thunderColor: string;
}

export interface GetExploreCircleProps {
  isOuter: boolean;
}

export interface WifiSignalsProps {
  size: Range<150, 351>;
  opacityOfWifiWave: SkiaValue<number>;
  wifiWaveColor: string;
  curveSvg: SkSVG | null;
}

interface itemObject {
  cx: number;
  cy: number;
  key: string;
  r: number;
}

export interface OuterCirclesProps {
  halfSize: number;
  transformationValue: AnimatedProp<Transforms2d | undefined, any>;
  circleItem: itemObject;
  outerCircleColor: string;
  circleOpacity?: number;
}

export interface MainCircleProps {
  size: Range<150, 351>;
  halfSize: number;
  wifiWaveColor: string;
  thunderColor: string;
  circleAnimation: AnimatedProp<Transforms2d | undefined, any>;
  signalOpacity: SkiaValue<number>;
  outerSignalOpacity: SkiaValue<number>;
}

export interface UseWirelessChargerProps {
  size: Range<150, 351>;
}
