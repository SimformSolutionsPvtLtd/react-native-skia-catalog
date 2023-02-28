import { Circle, Group, Paint } from '@shopify/react-native-skia';
import React from 'react';
import { SkiaBaseIndicator, type RenderComponentArgType } from '../Base';
import { IndicatorEnum } from '../SkiaIndicatorTypes';
import { useRenderIndicator } from './hooks';
import {
  defaultProps,
  type RenderIndicatorHookReturnType,
  type RenderIndicatorPropsType,
  type SkiaWaveIndicatorPropsType,
} from './SkiaWaveIndicatorTypes';

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
      color={'transparent'}>
      <Circle cx={cx} cy={cy} r={r}>
        <Paint
          color={color}
          style={fill ? 'fill' : 'stroke'}
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
