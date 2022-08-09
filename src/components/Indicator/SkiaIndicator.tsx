import { Canvas } from '@shopify/react-native-skia';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SkiaBallIndicator } from './Ball';
import { SkiaBarIndicator } from './Bar';
import { SkiaCircleIndicator } from './Circle';
import { SkiaDotIndicator } from './Dot';
import { SkiaMaterialIndicator } from './Material';
import { SkiaPacmanIndicator } from './Pacman';
import { SkiaPulseIndicator } from './Pulse';
import type { SkiaIndicatorPropsType } from './SkiaIndicatorType';
import { SkiaSkypeIndicator } from './Skype';
import { SkiaUIActivityIndicator } from './UIActivity';
import { SkiaWaveIndicator } from './Wave';

const SkiaIndicator = ({
  type,
  style,
  onTouch,
  ...Other
}: SkiaIndicatorPropsType): JSX.Element => {
  return (
    <Canvas
      style={StyleSheet.flatten([
        {
          width: Other.width,
          height: Other.height,
        },
        style,
      ])}
      onTouch={onTouch}
    >
      {type === 'Ball' && <SkiaBallIndicator {...Other} />}
      {type === 'Bar' && <SkiaBarIndicator {...Other} />}
      {type === 'Circle' && <SkiaCircleIndicator {...Other} />}
      {type === 'Dot' && <SkiaDotIndicator {...Other} />}
      {type === 'Material' && <SkiaMaterialIndicator {...Other} />}
      {type === 'Pacman' && <SkiaPacmanIndicator {...Other} />}
      {type === 'Pulse' && <SkiaPulseIndicator {...Other} />}
      {type === 'Skype' && <SkiaSkypeIndicator {...Other} />}
      {type === 'UIActivity' && <SkiaUIActivityIndicator {...Other} />}
      {type === 'Wave' && <SkiaWaveIndicator {...Other} />}
    </Canvas>
  );
};

SkiaIndicator.defaultProps = SkiaIndicator;

export default SkiaIndicator;
