import { Circle, Group } from "@shopify/react-native-skia";
import React from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaPulseIndicatorTypes";
import type {
  RenderIndicatorPropsType,
  SkiaPulseIndicatorPropsType,
  RenderIndicatorHookReturnType,
} from "./SkiaPulseIndicatorTypes";
import { IndicatorEnum } from "../SkiaIndicatorTypes";
import { useRenderIndicator } from "./hooks";

const RenderIndicator = ({
  color,
  ...rest
}: RenderIndicatorPropsType): React.ReactElement => {
  const { cx, cy, r, transform, opacityLocal }: RenderIndicatorHookReturnType =
    useRenderIndicator({ color, ...rest });

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
  ...rest
}: SkiaPulseIndicatorPropsType): React.ReactElement => {
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
          key={`${IndicatorEnum.PULSE}-${args.index}`}
        />
      )}
      {...rest}
      count={2}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaPulseIndicator.defaultProps = defaultProps;

export default SkiaPulseIndicator;
