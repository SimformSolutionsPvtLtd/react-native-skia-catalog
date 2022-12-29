import { Color, Easing, SkiaMutableValue } from "@shopify/react-native-skia";

type OmitParentComponentProps =
  | "width"
  | "height"
  | "borderRadius"
  | "opacity"
  | "color";
export type OmitChildComponentProps = "animationEasing";

export type CirclePropsType = {
  cx: number;
  cy: number;
  r: number;
  trackW?: number;
};

export type BaseIndicatorPropsType = {
  animationEasing?: (t: number) => number;
  animating: boolean;
  width: number;
  height: number;
  borderRadius: number;
  color: Color;
  progressDuration?: number;
  opacity?: SkiaMutableValue<number>;
};

export type RenderComponentArgType = {
  index: number;
  count: number;
  progress: SkiaMutableValue<number>;
};

export type SkiaBaseIndicatorPropsType = Omit<
  BaseIndicatorPropsType,
  OmitParentComponentProps
> & {
  renderComponent: ({
    index,
    count,
    progress,
  }: RenderComponentArgType) => React.ReactElement;
  count: number;
};

export const defaultProps = {
  animationEasing: Easing.linear,
  progressDuration: 1200,
  animating: true,
  count: 1,
};

export type SkiaBaseIndicatorHookReturnType = {
  renderChildComponent: (item: any, index: number) => React.ReactElement;
};
