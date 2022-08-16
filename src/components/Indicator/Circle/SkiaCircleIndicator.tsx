import { Group, Paint, Path } from "@shopify/react-native-skia";
import React from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaCircleIndicatorTypes";
import type {
  RenderIndicatorPropsType,
  SkiaCircleIndicatorPropsType,
  RenderIndicatorHookReturnType,
} from "./SkiaCircleIndicatorTypes";
import { IndicatorEnum } from "../SkiaIndicatorTypes";
import { useRenderIndicator } from "./hooks";

const RenderIndicator = ({
  width,
  height,
  color,
  trackWidth,
  ...rest
}: RenderIndicatorPropsType): JSX.Element => {
  const {
    path,
    circleHeight,
    transform,
    opacityLocal,
  }: RenderIndicatorHookReturnType = useRenderIndicator({
    width,
    height,
    color,
    trackWidth,
    ...rest,
  });

  return (
    <Group transform={transform} origin={{ x: width / 2, y: height / 2 }}>
      <Path path={path} color={"transparent"} start={0} end={0.8}>
        <Paint
          style={"stroke"}
          strokeWidth={trackWidth ?? circleHeight / 8}
          strokeCap={"round"}
          color={color}
          opacity={opacityLocal}
        />
      </Path>
    </Group>
  );
};

const SkiaCircleIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  trackWidth,
  ...rest
}: SkiaCircleIndicatorPropsType): JSX.Element => {
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
          key={`${IndicatorEnum.CIRCLE}-${args.index}`}
        />
      )}
      {...rest}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaCircleIndicator.defaultProps = defaultProps;

export default SkiaCircleIndicator;
