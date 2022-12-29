import { Circle, Group, Paint } from "@shopify/react-native-skia";
import React from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaWaveIndicatorTypes";
import type {
  RenderIndicatorPropsType,
  SkiaWaveIndicatorPropsType,
  RenderIndicatorHookReturnType,
} from "./SkiaWaveIndicatorTypes";
import { IndicatorEnum } from "../SkiaIndicatorTypes";
import { useRenderIndicator } from "./hooks";

const RenderIndicator = ({
  color,
  ...rest
}: RenderIndicatorPropsType): React.ReactElement => {
  const {
    cx,
    cy,
    r,
    fill,
    trackW,
    transform,
    opacityLocal,
  }: RenderIndicatorHookReturnType = useRenderIndicator({ color, ...rest });

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
          strokeWidth={trackW}
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
  ...rest
}: SkiaWaveIndicatorPropsType): React.ReactElement => {
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
          key={`${IndicatorEnum.WAVE}-${args.index}`}
        />
      )}
      {...rest}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaWaveIndicator.defaultProps = defaultProps;

export default SkiaWaveIndicator;
