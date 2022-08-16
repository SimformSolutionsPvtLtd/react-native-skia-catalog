import type { Color, SkiaValue } from "@shopify/react-native-skia";
import { Colors } from "../../../theme";
import type {
  BaseIndicatorPropsType,
  OmitChildComponentProps,
  RenderComponentArgType,
} from "../Base";

export type SkiaRotationCircleIndicatorPropsType = BaseIndicatorPropsType & {
  circleColor?: Color;
  direction?: "clockwise" | "counter-clockwise";
};

export const defaultProps = {
  color: Colors.orange,
  circleColor: Colors.orange,
  direction: "counter-clockwise",
  progressDuration: 8000,
};

export type RenderIndicatorPropsType = RenderComponentArgType &
  Omit<SkiaRotationCircleIndicatorPropsType, OmitChildComponentProps>;

export type RenderIndicatorHookReturnType = {
  cx: number;
  cy: number;
  r: number;
  isFilled: boolean;
  transformCx: SkiaValue<number>;
  transformCy: SkiaValue<number>;
  opacityLocal: SkiaValue<number>;
};
