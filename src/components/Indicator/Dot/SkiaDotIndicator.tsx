import { Circle, Group } from "@shopify/react-native-skia";
import React from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaDotIndicatorTypes";
import type {
  RenderIndicatorPropsType,
  SkiaDotIndicatorPropsType,
  RenderIndicatorHookReturnType,
} from "./SkiaDotIndicatorTypes";
import { IndicatorEnum } from "../SkiaIndicatorTypes";
import { useRenderIndicator } from "./hooks";

const RenderIndicator = ({
  index,
  color,
  ...rest
}: RenderIndicatorPropsType): JSX.Element => {
  const { cx, cy, r, transform, opacityLocal }: RenderIndicatorHookReturnType =
  useRenderIndicator({ index, color, ...rest });

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
  ...rest
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
            key={`${IndicatorEnum.DOT}-${args.index}`}
          />
        )}
        {...rest}
        animating={animating}
        progressDuration={progressDuration}
      />
    </Group>
  );
};

SkiaDotIndicator.defaultProps = defaultProps;

export default SkiaDotIndicator;
