import { Group, Paint, RoundedRect } from "@shopify/react-native-skia";
import React from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaBarIndicatorTypes";
import type {
  RenderIndicatorPropsType,
  SkiaBarIndicatorPropsType,
  RenderIndicatorHookReturnType,
} from "./SkiaBarIndicatorTypes";
import { IndicatorEnum } from "../SkiaIndicatorTypes";
import { useRenderIndicator } from "./hooks";

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
      <Paint ref={paint} opacity={opacityLocal} color={color} />
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
