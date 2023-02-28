import { Circle, Group } from '@shopify/react-native-skia';
import React from 'react';
import { SkiaBaseIndicator, type RenderComponentArgType } from '../Base';
import { IndicatorEnum } from '../SkiaIndicatorTypes';
import { useRenderIndicator } from './hooks';
import {
  defaultProps,
  type RenderIndicatorHookReturnType,
  type RenderIndicatorPropsType,
  type SkiaBreathingIndicatorPropsType,
} from './SkiaBreathingIndicatorType';

const RenderIndicator = ({
  color,
  ...rest
}: RenderIndicatorPropsType): React.ReactElement => {
  const {
    cx,
    cy,
    r,
    trackW,
    transform,
    opacityLocal,
  }: RenderIndicatorHookReturnType = useRenderIndicator({ color, ...rest });

  return (
    <Group transform={transform} origin={{ x: cx, y: cy }}>
      <Circle
        cx={cx}
        cy={cy}
        r={r}
        style={'stroke'}
        strokeWidth={trackW}
        color={color}
        opacity={opacityLocal}
      />
    </Group>
  );
};

const SkiaBreathingIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  trackWidth,
  ...rest
}: SkiaBreathingIndicatorPropsType): React.ReactElement => {
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
          key={`${IndicatorEnum.BREATHING}-${args.index}`}
        />
      )}
      {...rest}
      count={1}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaBreathingIndicator.defaultProps = defaultProps;

export default SkiaBreathingIndicator;
