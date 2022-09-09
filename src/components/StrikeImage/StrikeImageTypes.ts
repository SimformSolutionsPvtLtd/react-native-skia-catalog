import type {
  SkiaValue,
  SkImage,
  SkPoint,
  TouchHandler,
} from "@shopify/react-native-skia";
import type { ImageSourcePropType } from "react-native";

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

interface StrikeImagePropsType {
  size?: Range<50, 351>;
  strikeWidth?: Range<8, 59>;
  color?: string;
  source?: string | ImageSourcePropType;
  onChangeStrike?: (strikeVisibility: boolean) => void;
}

interface StrikeImageReturnType {
  getEndingCoordinate: (isFilledLine: boolean) => SkiaValue<SkPoint>;
  image: SkImage | null;
  opacity: SkiaValue<number>;
  primaryLineStartingCoordinate: SkPoint;
  secondaryLineStartingCoordinate: SkPoint;
  singleLineStrokeWidth: number;
  touchHandler: TouchHandler;
  dimension: number;
}

export { StrikeImagePropsType, StrikeImageReturnType };
