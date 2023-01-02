import { Circle, Group } from "@shopify/react-native-skia";
import React from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaRotationHoleIndicatorType";
import type {
  RenderIndicatorPropsType,
  SkiaRotationHoleIndicatorPropsType,
  RenderIndicatorHookReturnType,
} from "./SkiaRotationHoleIndicatorType";
import { IndicatorEnum } from "../SkiaIndicatorTypes";
import { useRenderIndicator } from "./hooks";

const RenderIndicator = ({
  color,
  circleColor,
  ...rest
}: RenderIndicatorPropsType): React.ReactElement => {
  const {
    cx,
    cy,
    r,
    isFilled,
    trackW,
    transformCx,
    transformCy,
    opacityLocal,
  }: RenderIndicatorHookReturnType = useRenderIndicator({
    color,
    circleColor,
    ...rest,
  });

  return (
    <Group origin={{ x: cx, y: cy }}>
      <Circle
        cx={isFilled ? transformCx : cx}
        cy={isFilled ? transformCy : cy}
        r={r}
        color={isFilled ? circleColor : color}
        opacity={opacityLocal}
        strokeWidth={trackW}
        style={isFilled ? "fill" : "stroke"}
      />
    </Group>
  );
};

const SkiaRotationHoleIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  circleColor,
  trackWidth,
  direction,
  ...rest
}: SkiaRotationHoleIndicatorPropsType): React.ReactElement => {
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
            circleColor,
            trackWidth,
            direction,
          }}
          key={`${IndicatorEnum.ROTATION_HOLE}-${args.index}`}
        />
      )}
      {...rest}
      count={2}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaRotationHoleIndicator.defaultProps = defaultProps;

export default SkiaRotationHoleIndicator;
