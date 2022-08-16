import { Circle, Group } from "@shopify/react-native-skia";
import React from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaBreathingIndicatorType";
import type {
  RenderIndicatorPropsType,
  SkiaBreathingIndicatorPropsType,
  RenderIndicatorHookReturnType,
} from "./SkiaBreathingIndicatorType";
import { IndicatorEnum } from "../SkiaIndicatorTypes";
import { useRenderIndicator } from "./hooks";

const RenderIndicator = ({
  color,
  ...rest
}: RenderIndicatorPropsType): JSX.Element => {
  const {
    cx,
    cy,
    r,
    trackW,
    transform,
    opacityLocal,
  }: RenderIndicatorHookReturnType = useRenderIndicator({ color, ...rest });

  return (
    <Group transform={transform} origin={{ x: cx, y: cy }}>
      <Circle
        cx={cx}
        cy={cy}
        r={r}
        style={"stroke"}
        strokeWidth={trackW}
        color={color}
        opacity={opacityLocal}
      />
    </Group>
  );
};

const SkiaBreathingIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  trackWidth,
  ...rest
}: SkiaBreathingIndicatorPropsType): JSX.Element => {
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
          key={`${IndicatorEnum.BREATHING}-${args.index}`}
        />
      )}
      {...rest}
      count={1}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaBreathingIndicator.defaultProps = defaultProps;

export default SkiaBreathingIndicator;
