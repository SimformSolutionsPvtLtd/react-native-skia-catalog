import { Circle, vec } from '@shopify/react-native-skia';
import React from 'react';
import type { CircularButtonPropsType } from './CircularButtonTypes';

const CircularButton = ({
  pulseDisable,
  size,
  circularPulse,
  color,
  pulseOpacity,
  canvasCentre,
}: CircularButtonPropsType): React.ReactElement => {
  const circleRadius: number = size / 2;

  return (
    <>
      {!pulseDisable && (
        <Circle
          c={vec(canvasCentre, canvasCentre)}
          r={circularPulse}
          color={color}
          opacity={pulseOpacity}
        />
      )}
      <Circle
        c={vec(canvasCentre, canvasCentre)}
        r={circleRadius}
        color={color}
      />
    </>
  );
};

export default CircularButton;
