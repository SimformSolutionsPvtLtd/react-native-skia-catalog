import type {
  SkiaMutableValue,
  SkiaValue,
  SkImage,
  SkPath,
  Transforms2d,
} from "@shopify/react-native-skia";

export interface UseCircularCheckMarkReturnType {
  circularCenterImageScale: SkiaMutableValue<Transforms2d>;
  topBorderTransform: SkiaMutableValue<Transforms2d>;
  rightBorderTransform: SkiaMutableValue<Transforms2d>;
  bottomBorderTransform: SkiaMutableValue<Transforms2d>;
  leftBorderTransform: SkiaMutableValue<Transforms2d>;
  arcPath: SkPath;
}
export interface CircularCheckMarkType {
  size: number;
  value: SkiaValue<number>;
  multiColor: boolean;
  borderColor: string;
  topBorderColor: string;
  rightBorderColor: string;
  bottomBorderColor: string;
  leftBorderColor: string;
  centerImage: SkImage | null;
  centerImageColor: string;
  centerImageOpacity: SkiaMutableValue<number>;
}
