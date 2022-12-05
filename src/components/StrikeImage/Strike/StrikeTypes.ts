import type { SkiaValue, SkPoint, Vector } from "@shopify/react-native-skia";

export interface StrikePropsType {
  primaryLineStartingCoordinate: Vector;
  getEndingCoordinate: (isFilledLine: boolean) => SkiaValue<SkPoint>;
  secondaryLineStartingCoordinate: Vector;
  primaryLineColor: string;
  singleLineStrokeWidth: number;
}
