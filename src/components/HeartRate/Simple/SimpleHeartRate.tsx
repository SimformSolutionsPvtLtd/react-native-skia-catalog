import { Path } from '@shopify/react-native-skia';
import React from 'react';
import { useHeartRate } from './hooks';
import type {
  HeartRateReturnType,
  SimpleHeartRatePropsType,
} from './SimpleHeartRateTypes';

const SimpleHeartRate = ({
  size,
  speed,
  pulseWidth,
  canvasWidth,
  canvasVerticalMidPoint,
}: SimpleHeartRatePropsType): React.ReactElement => {
  const { pulsePath, pulseRate }: HeartRateReturnType = useHeartRate({
    size,
    speed,
    canvasWidth,
    canvasVerticalMidPoint,
  });

  return (
    <Path
      start={pulseRate}
      path={pulsePath}
      style={'stroke'}
      strokeWidth={pulseWidth}
      strokeJoin={'round'}
    />
  );
};

export default SimpleHeartRate;
