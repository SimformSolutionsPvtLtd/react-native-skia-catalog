import { Group, Path } from "@shopify/react-native-skia";
import React from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaMaterialIndicatorTypes";
import type {
  RenderIndicatorPropsType,
  SkiaMaterialIndicatorPropsType,
  RenderIndicatorHookReturnType,
} from "./SkiaMaterialIndicatorTypes";
import { IndicatorEnum } from "../SkiaIndicatorTypes";
import { useRenderIndicator } from "./hooks";

const RenderIndicator = ({
  color,
  ...rest
}: RenderIndicatorPropsType): JSX.Element => {
  const {
    cx,
    cy,
    r,
    trackW,
    path,
    transform,
    opacityLocal,
  }: RenderIndicatorHookReturnType = useRenderIndicator({
    color,
    ...rest,
  });

  return (
    <Group transform={transform} origin={{ x: cx + r, y: cy + r }}>
      <Path
        path={path}
        style={"stroke"}
        strokeCap={"round"}
        strokeWidth={trackW}
        color={color}
        opacity={opacityLocal}
      />
    </Group>
  );
};

const SkiaMaterialIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  trackWidth,
  direction,
  ...rest
}: SkiaMaterialIndicatorPropsType): JSX.Element => {
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
            direction,
          }}
          key={`${IndicatorEnum.MATERIAL}-${args.index}`}
        />
      )}
      {...rest}
      count={2}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaMaterialIndicator.defaultProps = defaultProps;

export default SkiaMaterialIndicator;
