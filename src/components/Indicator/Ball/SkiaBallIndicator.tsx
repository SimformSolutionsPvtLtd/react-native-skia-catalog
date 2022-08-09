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
import { defaultProps } from "./SkiaBallIndicatorType";
import type {
  RenderIndicatorPropsType,
  SkiaBallIndicatorPropsType,
} from "./SkiaBallIndicatorType";

const RenderIndicator = ({
  index,
  count,
  progress,
  width,
  height,
  borderRadius,
  opacity,
  color,
}: RenderIndicatorPropsType): JSX.Element => {
  const { cx, cy, r } = useMemo<CirclePropsType>(() => {
    const aRadius: number = borderRadius - 10;

    const angle: number = (2 * Math.PI) / count;
    const centerX: number = aRadius * Math.cos(angle * index) + width / 2;
    const centerY: number = aRadius * Math.sin(angle * index) + height / 2;
    return { cx: centerX, cy: centerY, r: aRadius };
  }, [borderRadius, count, index, height, width]);

  const inputRange = useMemo<number[]>(
    () => Array.from(new Array(count + 1), (_item, i: number) => i / count),
    [count]
  );

  const outputRange = useMemo<number[]>(() => {
    const output: number[] = Array.from(
      new Array(count),
      (_item, i: number) => 1.2 - (0.5 * i) / (count - 1)
    );
    for (let j: number = 0; j < index; j++) {
      output.unshift(output.pop()!);
    }
    output.unshift(...output.slice(-1));
    return output;
  }, [count, index]);

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        scale: interpolate(progress.current, inputRange, outputRange),
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
    <Group transform={transform} origin={{ x: cx, y: cy }}>
      <Circle cx={cx} cy={cy} r={r / 5} color={color} opacity={opacityLocal} />
    </Group>
  );
};

const SkiaBallIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  ...Other
}: SkiaBallIndicatorPropsType): JSX.Element => {
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
          key={`Ball-${args.index}`}
        />
      )}
      {...Other}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaBallIndicator.defaultProps = defaultProps;

export default SkiaBallIndicator;
