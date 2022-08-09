import {
  Circle,
  Extrapolate,
  Group,
  interpolate,
  Paint,
  Transforms2d,
  useComputedValue,
} from "@shopify/react-native-skia";
import React, { useMemo } from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaWaveIndicatorType";
import type {
  CirclePropsType,
  RenderIndicatorPropsType,
  SkiaWaveIndicatorPropsType,
} from "./SkiaWaveIndicatorType";

const floatEpsilon = Math.pow(2, -23);

const RenderIndicator = ({
  index,
  progress,
  width,
  height,
  borderRadius,
  opacity,
  color,
  waveFactor,
  waveMode,
}: RenderIndicatorPropsType): JSX.Element => {
  const fill: boolean = waveMode === "fill";
  const factor: number = useMemo<number>(
    () => Math.max(1 - Math.pow(waveFactor ?? 0.54, index), floatEpsilon),
    [index, waveFactor]
  );

  const { cx, cy, r, borderWidth } = useMemo<CirclePropsType>(() => {
    const aBorderWidth: number = fill ? 0 : Math.floor(borderRadius / 5);

    const centerX: number = width / 2;
    const centerY: number = height / 2;
    return {
      cx: centerX,
      cy: centerY,
      r: borderRadius - 2,
      borderWidth: aBorderWidth,
    };
  }, [borderRadius, fill, height, width]);

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        scale: interpolate(
          progress.current,
          [factor, 1],
          [0, 1],
          Extrapolate.CLAMP
        ),
      },
    ];
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return interpolate(progress.current, [0, factor, 1], [0, 1, 0]);
  }, [progress, opacity]);

  return (
    <Group
      transform={transform}
      origin={{ x: cx, y: cy }}
      color={"transparent"}
    >
      <Circle cx={cx} cy={cy} r={r}>
        <Paint
          color={color}
          style={fill ? "fill" : "stroke"}
          strokeWidth={borderWidth}
          opacity={opacityLocal}
        />
      </Circle>
    </Group>
  );
};

const SkiaWaveIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  waveFactor,
  waveMode,
  ...Other
}: SkiaWaveIndicatorPropsType): JSX.Element => {
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
            waveFactor,
            waveMode,
          }}
          key={`Wave-${args.index}`}
        />
      )}
      {...Other}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaWaveIndicator.defaultProps = defaultProps;

export default SkiaWaveIndicator;
