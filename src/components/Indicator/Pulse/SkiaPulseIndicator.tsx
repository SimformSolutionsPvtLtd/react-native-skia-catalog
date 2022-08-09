import {
  Circle,
  Group,
  interpolate,
  Transforms2d,
  useComputedValue,
} from "@shopify/react-native-skia";
import React, { useMemo } from "react";
import { SkiaBaseIndicator } from "../Base";
import type { CirclePropsType, RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaPulseIndicatorType";
import type {
  RenderIndicatorPropsType,
  SkiaPulseIndicatorPropsType,
} from "./SkiaPulseIndicatorType";

const RenderIndicator = ({
  index,
  progress,
  width,
  height,
  borderRadius,
  opacity,
  color,
}: RenderIndicatorPropsType): JSX.Element => {
  const { cx, cy, r } = useMemo<CirclePropsType>(() => {
    const aBorderRadius: number = borderRadius - 5;

    const centerX: number = width / 2;
    const centerY: number = height / 2;
    return { cx: centerX, cy: centerY, r: aBorderRadius };
  }, [borderRadius, height, width]);

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        scale: interpolate(
          progress.current,
          [0, 0.67, 1],
          index ? [0.4, 0.6, 0.4] : [0.4, 0.6, 1.0]
        ),
      },
    ];
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return interpolate(
      progress.current,
      [0, 0.67, 1],
      index ? [1.0, 1.0, 1.0] : [0.5, 0.5, 0.0]
    );
  }, [progress, opacity]);

  return (
    <Group transform={transform} origin={{ x: cx, y: cy }}>
      <Circle cx={cx} cy={cy} r={r} color={color} opacity={opacityLocal} />
    </Group>
  );
};

const SkiaPulseIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  ...Other
}: SkiaPulseIndicatorPropsType): JSX.Element => {
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
          }}
          key={`Pulse-${args.index}`}
        />
      )}
      {...Other}
      count={2}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaPulseIndicator.defaultProps = defaultProps;

export default SkiaPulseIndicator;
