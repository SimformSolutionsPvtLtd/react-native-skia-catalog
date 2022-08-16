import type { Color, SkiaValue } from "@shopify/react-native-skia";
import { Colors } from "../../../theme";
import type {
  BaseIndicatorPropsType,
  OmitChildComponentProps,
  RenderComponentArgType,
} from "../Base";

export type SkiaRotationHoleIndicatorPropsType = BaseIndicatorPropsType & {
  trackWidth?: number;
  circleColor?: Color;
  direction?: "clockwise" | "counter-clockwise";
};

export const defaultProps = {
  trackWidth: 8,
  color: Colors.orange,
  circleColor: Colors.orange,
  direction: "counter-clockwise",
  progressDuration: 8000,
};

export type RenderIndicatorPropsType = RenderComponentArgType &
  Omit<SkiaRotationHoleIndicatorPropsType, OmitChildComponentProps>;

export type RenderIndicatorHookReturnType = {
  cx: number;
  cy: number;
  r: number;
  isFilled: boolean;
  trackW?: number;
  transformCx: SkiaValue<number>;
  transformCy: SkiaValue<number>;
  opacityLocal: SkiaValue<number>;
};
