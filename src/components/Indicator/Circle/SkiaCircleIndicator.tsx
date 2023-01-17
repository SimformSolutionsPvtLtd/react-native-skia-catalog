import { Group, Paint, Path } from '@shopify/react-native-skia';
import React from 'react';
import { SkiaBaseIndicator, type RenderComponentArgType } from '../Base';
import { IndicatorEnum } from '../SkiaIndicatorTypes';
import { useRenderIndicator } from './hooks';
import {
  defaultProps,
  type RenderIndicatorHookReturnType,
  type RenderIndicatorPropsType,
  type SkiaCircleIndicatorPropsType,
} from './SkiaCircleIndicatorTypes';

const RenderIndicator = ({
  width,
  height,
  color,
  trackWidth,
  ...rest
}: RenderIndicatorPropsType): React.ReactElement => {
  const {
    path,
    circleHeight,
    transform,
    opacityLocal,
  }: RenderIndicatorHookReturnType = useRenderIndicator({
    width,
    height,
    color,
    trackWidth,
    ...rest,
  });
  return (
    <Group transform={transform} origin={{ x: width / 2, y: height / 2 }}>
      <Path path={path} color={'transparent'} start={0} end={0.8}>
        <Paint
          style={'stroke'}
          strokeWidth={trackWidth ?? circleHeight / 8}
          strokeCap={'round'}
          color={color}
          opacity={opacityLocal}
        />
      </Path>
    </Group>
  );
};

const SkiaCircleIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  trackWidth,
  ...rest
}: SkiaCircleIndicatorPropsType): React.ReactElement => {
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
          key={`${IndicatorEnum.CIRCLE}-${args.index}`}
        />
      )}
      {...rest}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaCircleIndicator.defaultProps = defaultProps;

export default SkiaCircleIndicator;
