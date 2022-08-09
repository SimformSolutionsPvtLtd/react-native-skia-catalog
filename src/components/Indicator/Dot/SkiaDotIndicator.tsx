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
import { defaultProps } from "./SkiaDotIndicatorType";
import type {
  RenderIndicatorPropsType,
  SkiaDotIndicatorPropsType,
} from "./SkiaDotIndicatorType";

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
    const centerWidthWithGap: number = borderRadius / (count + count / 2 - 1);
    let centerR: number = borderRadius / count;
    const centerGap: number = centerR - centerWidthWithGap;
    centerR = (centerR - centerGap) / 2;

    const centerX: number =
      width / 2 - (centerR * count) / 2 - (centerGap * (count / 2)) / 2;
    const centerY: number = height / 2;

    return { cx: centerX, cy: centerY, r: centerR };
  }, [borderRadius, count, width, height]);

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        scale: interpolate(
          progress.current,
          [
            0.0,
            (index + 0.5) / (count + 1),
            (index + 1.0) / (count + 1),
            (index + 1.5) / (count + 1),
            1.0,
          ],
          [1.0, 1.36, 1.56, 1.06, 1.0]
        ),
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
    <Group
      transform={transform}
      origin={{
        x: cx + index * (2 * r) + (index !== 0 ? index * r : 0),
        y: cy,
      }}
    >
      <Circle
        cx={cx + index * (2 * r) + (index !== 0 ? index * r : 0)}
        cy={cy}
        r={r}
        color={color}
        opacity={opacityLocal}
      />
    </Group>
  );
};

const SkiaDotIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  reverse,
  ...Other
}: SkiaDotIndicatorPropsType): JSX.Element => {
  return (
    <Group
      transform={[{ rotate: reverse ? Math.PI : 0 }, { translateX: -2.5 }]}
      origin={{
        x: width / 2,
        y: height / 2,
      }}
    >
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
            key={`Dot-${args.index}`}
          />
        )}
        {...Other}
        animating={animating}
        progressDuration={progressDuration}
      />
    </Group>
  );
};

SkiaDotIndicator.defaultProps = defaultProps;

export default SkiaDotIndicator;
