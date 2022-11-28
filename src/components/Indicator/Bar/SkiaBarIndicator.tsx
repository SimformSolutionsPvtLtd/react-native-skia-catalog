import { Group, Paint, RoundedRect } from "@shopify/react-native-skia";
import React from "react";
import type { RenderComponentArgType } from "../Base";
import { SkiaBaseIndicator } from "../Base";
import { IndicatorEnum } from "../SkiaIndicatorTypes";
import { useRenderIndicator } from "./hooks";
import type {
  RenderIndicatorHookReturnType,
  RenderIndicatorPropsType,
  SkiaBarIndicatorPropsType,
} from "./SkiaBarIndicatorTypes";
import { defaultProps } from "./SkiaBarIndicatorTypes";

const RenderIndicator = ({
  index,
  color,
  ...rest
}: RenderIndicatorPropsType): JSX.Element => {
  const {
    x,
    y,
    w,
    h,
    r,
    gap,
    paint,
    opacityLocal,
    transformTop,
    transformBottom,
  }: RenderIndicatorHookReturnType = useRenderIndicator({
    index,
    color,
    ...rest,
  });

  return (
    <Group>
      <Paint paint={paint} opacity={opacityLocal} color={color} />
      <Group transform={transformTop}>
        <RoundedRect
          x={x + index * w + (index !== 0 ? index * gap : 0)}
          y={y}
          width={w}
          height={h}
          r={r}
          paint={paint}
        />
      </Group>
      <Group transform={transformBottom}>
        <RoundedRect
          x={x + index * w + (index !== 0 ? index * gap : 0)}
          y={y}
          width={w}
          height={h}
          r={r}
          paint={paint}
        />
      </Group>
    </Group>
  );
};

const SkiaBarIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  ...rest
}: SkiaBarIndicatorPropsType): JSX.Element => {
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
          key={`${IndicatorEnum.BAR}-${args.index}`}
        />
      )}
      {...rest}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaBarIndicator.defaultProps = defaultProps;

export default SkiaBarIndicator;
