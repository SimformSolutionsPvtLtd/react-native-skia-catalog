import { Group, Path } from '@shopify/react-native-skia';
import React from 'react';
import { SkiaBaseIndicator, type RenderComponentArgType } from '../Base';
import { IndicatorEnum } from '../SkiaIndicatorTypes';
import { useRenderIndicator } from './hooks';
import {
  defaultProps,
  type RenderIndicatorHookReturnType,
  type RenderIndicatorPropsType,
  type SkiaMaterialIndicatorPropsType,
} from './SkiaMaterialIndicatorTypes';

const RenderIndicator = ({
  color,
  ...rest
}: RenderIndicatorPropsType): React.ReactElement => {
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
        style={'stroke'}
        strokeCap={'round'}
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
}: SkiaMaterialIndicatorPropsType): React.ReactElement => {
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
