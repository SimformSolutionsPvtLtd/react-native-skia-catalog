import type { SkiaValue, SkPoint, Vector } from '@shopify/react-native-skia';

export interface StrikePropsType {
  primaryLineStartingCoordinate: Vector;
  primaryLineEndingCoordinate: SkiaValue<SkPoint>;
  secondaryLineEndingCoordinate: SkiaValue<SkPoint>;
  secondaryLineStartingCoordinate: Vector;
  primaryLineColor: string;
  singleLineStrokeWidth: number;
}
