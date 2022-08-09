import {
  interpolate,
  Line,
  useComputedValue,
  vec,
} from "@shopify/react-native-skia";
import React, { useMemo } from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaUIActivityIndicatorType";
import type {
  RectanglePropsType,
  RenderIndicatorPropsType,
  SkiaUIActivityIndicatorPropsType,
} from "./SkiaUIActivityIndicatorType";

const RenderIndicator = ({
  index,
  count,
  progress,
  width,
  height,
  borderRadius,
  opacity,
  color,
  trackWidth,
}: RenderIndicatorPropsType): JSX.Element => {
  const { x, y, x1, y1 } = useMemo<RectanglePropsType>(() => {
    const aInnerBorderRadius: number = borderRadius - borderRadius / 4;
    const aOuterBorderRadius: number = borderRadius - borderRadius / 1.8;

    const angle: number = (2 * Math.PI) / count;

    const centerX: number =
      aInnerBorderRadius * Math.cos(angle * index) + width / 2;
    const centerY: number =
      aInnerBorderRadius * Math.sin(angle * index) + height / 2;

    const centerX1: number =
      aOuterBorderRadius * Math.cos(angle * index) + width / 2;
    const centerY1: number =
      aOuterBorderRadius * Math.sin(angle * index) + height / 2;

    return { x: centerX, y: centerY, x1: centerX1, y1: centerY1 };
  }, [borderRadius, count, height, index, width]);

  const inputRange = useMemo<number[]>(
    () => Array.from(new Array(count + 1), (_item, i: number) => i / count),
    [count]
  );

  const outputRange = useMemo<number[]>(() => {
    const output: number[] = Array.from(new Array(count), (_item, i: number) =>
      Math.max(1.0 - i * (1 / (count - 1)), 0)
    );
    for (let j: number = 0; j < index; j++) {
      output.unshift(output.pop()!);
    }
    output.unshift(...output.slice(-1));
    return output;
  }, [count, index]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return interpolate(progress.current, inputRange, outputRange);
  }, [progress, opacity]);

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
  ...Other
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
          key={`UIActivity-${args.index}`}
        />
      )}
      {...Other}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaUIActivityIndicator.defaultProps = defaultProps;

export default SkiaUIActivityIndicator;
