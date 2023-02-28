import { Canvas } from '@shopify/react-native-skia';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SkiaBallIndicator } from './Ball';
import { SkiaBarIndicator } from './Bar';
import { SkiaBreathingIndicator } from './Breathing';
import { SkiaCircleIndicator } from './Circle';
import { SkiaDotIndicator } from './Dot';
import { SkiaMaterialIndicator } from './Material';
import { SkiaPacmanIndicator } from './Pacman';
import { SkiaPulseIndicator } from './Pulse';
import { SkiaRotationCircleIndicator } from './RotationCircle';
import { SkiaRotationHoleIndicator } from './RotationHole';
import {
  defaultProps,
  IndicatorEnum,
  type SkiaIndicatorPropsType,
} from './SkiaIndicatorTypes';
import { SkiaSkypeIndicator } from './Skype';
import { SkiaUIActivityIndicator } from './UIActivity';
import { SkiaWaveIndicator } from './Wave';

const SkiaIndicator = ({
  type,
  style,
  onTouch,
  ...rest
}: SkiaIndicatorPropsType): React.ReactElement => {
  return (
    <Canvas
      style={StyleSheet.flatten([
        {
          width: rest.width,
          height: rest.height,
        },
        style,
      ])}
      onTouch={onTouch}>
      {type === IndicatorEnum.BALL && <SkiaBallIndicator {...rest} />}
      {type === IndicatorEnum.BAR && <SkiaBarIndicator {...rest} />}
      {type === IndicatorEnum.CIRCLE && <SkiaCircleIndicator {...rest} />}
      {type === IndicatorEnum.DOT && <SkiaDotIndicator {...rest} />}
      {type === IndicatorEnum.MATERIAL && <SkiaMaterialIndicator {...rest} />}
      {type === IndicatorEnum.PAC_MAN && <SkiaPacmanIndicator {...rest} />}
      {type === IndicatorEnum.PULSE && <SkiaPulseIndicator {...rest} />}
      {type === IndicatorEnum.SKYPE && <SkiaSkypeIndicator {...rest} />}
      {type === IndicatorEnum.UI_ACTIVITY && (
        <SkiaUIActivityIndicator {...rest} />
      )}
      {type === IndicatorEnum.WAVE && <SkiaWaveIndicator {...rest} />}
      {type === IndicatorEnum.BREATHING && <SkiaBreathingIndicator {...rest} />}
      {type === IndicatorEnum.ROTATION_HOLE && (
        <SkiaRotationHoleIndicator {...rest} />
      )}
      {type === IndicatorEnum.ROTATION_CIRCLE && (
        <SkiaRotationCircleIndicator {...rest} />
      )}
    </Canvas>
  );
};

SkiaIndicator.defaultProps = defaultProps;

export default SkiaIndicator;
