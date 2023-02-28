import { Circle, Group } from '@shopify/react-native-skia';
import React from 'react';
import { SkiaBaseIndicator, type RenderComponentArgType } from '../Base';
import { IndicatorEnum } from '../SkiaIndicatorTypes';
import { useRenderIndicator } from './hooks';
import {
  defaultProps,
  type RenderIndicatorHookReturnType,
  type RenderIndicatorPropsType,
  type SkiaSkypeIndicatorPropsType,
} from './SkiaSkypeIndicatorTypes';

const RenderIndicator = ({
  color,
  ...rest
}: RenderIndicatorPropsType): React.ReactElement => {
  const {
    newCX,
    newCY,
    r,
    newOrigin,
    transform,
    opacityLocal,
  }: RenderIndicatorHookReturnType = useRenderIndicator({ color, ...rest });

  return (
    <Group transform={transform} origin={newOrigin}>
      <Circle
        cx={newCX}
        cy={newCY}
        r={r / 5}
        color={color}
        opacity={opacityLocal}
      />
    </Group>
  );
};

const SkiaSkypeIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  minScale,
  maxScale,
  ...rest
}: SkiaSkypeIndicatorPropsType): React.ReactElement => {
  return (
    <Group
      transform={[{ rotate: -1 }]}
      origin={{
        x: width / 2,
        y: height / 2,
      }}>
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
              minScale,
              maxScale,
            }}
            key={`${IndicatorEnum.SKYPE}-${args.index}`}
          />
        )}
        {...rest}
        animating={animating}
        progressDuration={progressDuration}
      />
    </Group>
  );
};

SkiaSkypeIndicator.defaultProps = defaultProps;

export default SkiaSkypeIndicator;
