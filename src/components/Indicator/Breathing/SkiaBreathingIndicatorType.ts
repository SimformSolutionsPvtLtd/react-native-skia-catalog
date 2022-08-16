import type { SkiaValue, Transforms2d } from "@shopify/react-native-skia";
import { Colors } from "../../../theme";
import type {
  BaseIndicatorPropsType,
  OmitChildComponentProps,
  RenderComponentArgType,
} from "../Base";

export type SkiaBreathingIndicatorPropsType = BaseIndicatorPropsType & {
  trackWidth?: number;
};

export const defaultProps = {
  color: Colors.orange,
  progressDuration: 1600,
};

export type RenderIndicatorPropsType = RenderComponentArgType &
  Omit<SkiaBreathingIndicatorPropsType, OmitChildComponentProps>;

export type RenderIndicatorHookReturnType = {
  cx: number;
  cy: number;
  r: number;
  trackW?: number;
  transform: SkiaValue<Transforms2d>;
  opacityLocal: SkiaValue<number>;
};
