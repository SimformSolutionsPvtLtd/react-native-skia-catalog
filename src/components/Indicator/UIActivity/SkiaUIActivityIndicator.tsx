import { Line, vec } from "@shopify/react-native-skia";
import React from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaUIActivityIndicatorTypes";
import type {
  RenderIndicatorPropsType,
  SkiaUIActivityIndicatorPropsType,
  RenderIndicatorHookReturnType,
} from "./SkiaUIActivityIndicatorTypes";
import { IndicatorEnum } from "../SkiaIndicatorTypes";
import { useRenderIndicator } from "./hooks";

const RenderIndicator = ({
  color,
  trackWidth,
  ...rest
}: RenderIndicatorPropsType): JSX.Element => {
  const { x, y, x1, y1, opacityLocal }: RenderIndicatorHookReturnType =
    useRenderIndicator({ color, trackWidth, ...rest });

  return (
    <Line
      p1={vec(x, y)}
      p2={vec(x1, y1)}
      color={color}
      style={"stroke"}
      strokeWidth={trackWidth}
      strokeJoin={"round"}
      strokeCap={"round"}
      opacity={opacityLocal}
    />
  );
};

const SkiaUIActivityIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  trackWidth,
  ...rest
}: SkiaUIActivityIndicatorPropsType): JSX.Element => {
  return (
    <SkiaBaseIndicator
      renderComponent={(args: RenderComponentArgType) => (
        <RenderIndicator
          {...args}
          {...{
            width,
            height,
            borderRadius,
            opacity,
            animating,
            progressDuration,
            color,
            trackWidth,
          }}
          key={`${IndicatorEnum.UI_ACTIVITY}-${args.index}`}
        />
      )}
      {...rest}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaUIActivityIndicator.defaultProps = defaultProps;

export default SkiaUIActivityIndicator;
