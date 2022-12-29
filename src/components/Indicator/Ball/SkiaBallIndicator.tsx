import { Circle, Group } from "@shopify/react-native-skia";
import React from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaBallIndicatorTypes";
import type {
  RenderIndicatorPropsType,
  SkiaBallIndicatorPropsType,
  RenderIndicatorHookReturnType,
} from "./SkiaBallIndicatorTypes";
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
  ...rest
}: SkiaBallIndicatorPropsType): React.ReactElement => {
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
          key={`${IndicatorEnum.BALL}-${args.index}`}
        />
      )}
      {...rest}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaBallIndicator.defaultProps = defaultProps;

export default SkiaBallIndicator;
