import { RoundedRect } from '@shopify/react-native-skia';
import React from 'react';
import { Colors } from '../../../theme';
import type { ChargingPropsTypes } from './SquareChargingPropsTypes';

const SquareCharging = ({
  topSquareCoordinate,
  centerSquareCoordinate,
  bottomSquareCoordinate,
  size = 300,
  color = Colors.purple,
}: ChargingPropsTypes) => {
  return (
    <>
      <RoundedRect
        x={topSquareCoordinate?.x}
        y={topSquareCoordinate?.y}
        height={size / 26}
        width={size / 9.75}
        color={color}
        r={size / 39}
      />
      <RoundedRect
        x={centerSquareCoordinate?.x}
        y={centerSquareCoordinate?.y}
        height={size / 26}
        width={size / 9.75}
        color={color}
        r={size / 39}
      />
      <RoundedRect
        x={bottomSquareCoordinate?.x}
        y={bottomSquareCoordinate?.y}
        height={size / 26}
        width={size / 9.75}
        color={color}
        r={size / 39}
      />
    </>
  );
};

export default SquareCharging;
