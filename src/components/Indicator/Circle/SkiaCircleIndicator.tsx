import {
  Group,
  interpolate,
  Paint,
  Path,
  Skia,
  SkPath,
  Transforms2d,
  useComputedValue,
} from "@shopify/react-native-skia";
import React, { useMemo } from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaCircleIndicatorType";
import type {
  RenderIndicatorPropsType,
  SkiaCircleIndicatorPropsType,
} from "./SkiaCircleIndicatorType";

const RenderIndicator = ({
  progress,
  width,
  height,
  opacity,
  color,
  trackWidth,
}: RenderIndicatorPropsType): JSX.Element => {
  const circleHeight: number = useMemo<number>(() => {
    const animSize: number = Math.min(width, height);
    return animSize - 12;
  }, [height, width]);

  const path: SkPath = Skia.Path.Make();
  path.addArc(
    {
      x: width / 2 - circleHeight / 2,
      y: height / 2 - circleHeight / 2,
      width: circleHeight,
      height: circleHeight,
    },
    0,
    360
  );

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        rotate: interpolate(progress.current, [0, 1], [0, 360]),
      },
    ];
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return 1;
  }, [opacity]);

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
  ...Other
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
          key={`Circle-${args.index}`}
        />
      )}
      {...Other}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaCircleIndicator.defaultProps = defaultProps;

export default SkiaCircleIndicator;
