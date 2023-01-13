import { Circle, Group } from '@shopify/react-native-skia';
import React from 'react';
import { SkiaBaseIndicator, type RenderComponentArgType } from '../Base';
import { IndicatorEnum } from '../SkiaIndicatorTypes';
import { useRenderIndicator } from './hooks';
import {
  defaultProps,
  type RenderIndicatorHookReturnType,
  type RenderIndicatorPropsType,
  type SkiaRotationCircleIndicatorPropsType,
} from './SkiaRotationCircleIndicatorType';

const RenderIndicator = ({
  color,
  circleColor,
  ...rest
}: RenderIndicatorPropsType): React.ReactElement => {
  const {
    cx,
    cy,
    r,
    isFilled,
    transformCx,
    transformCy,
    opacityLocal,
  }: RenderIndicatorHookReturnType = useRenderIndicator({
    color,
    circleColor,
    ...rest,
  });

  return (
    <Group origin={{ x: cx, y: cy }}>
      <Circle
        cx={isFilled ? transformCx : cx}
        cy={isFilled ? transformCy : cy}
        r={r}
        color={isFilled ? circleColor : color}
        opacity={opacityLocal}
      />
    </Group>
  );
};

const SkiaRotationCircleIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  circleColor,
  direction,
  ...rest
}: SkiaRotationCircleIndicatorPropsType): React.ReactElement => {
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
            circleColor,
            direction,
          }}
          key={`${IndicatorEnum.ROTATION_CIRCLE}-${args.index}`}
        />
      )}
      {...rest}
      count={2}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaRotationCircleIndicator.defaultProps = defaultProps;

export default SkiaRotationCircleIndicator;
