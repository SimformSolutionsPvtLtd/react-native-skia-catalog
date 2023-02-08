import { Canvas, Group, Path, RoundedRect } from '@shopify/react-native-skia';
import React from 'react';
import { Colors } from '../../theme';
import { useSkiaSignalWifi } from './hooks';
import type { SkiaSignalWifiPropType } from './SkiaSignalWifiTypes';

const SkiaSignalWifi = ({
  size = 300,
  numberOfArcs = 4,
  color = Colors.mediumAquamarine,
}: SkiaSignalWifiPropType) => {
  const {
    squareSize,
    arcOne,
    arcOneWidth,
    arcTwo,
    arcTwoWidth,
    arcThree,
    arcThreeWidth,
    arcFour,
    arcFourWidth,
    displayArcTwo,
    displayArcThree,
    displayArcFour,
  } = useSkiaSignalWifi(size, numberOfArcs);

  return (
    <Canvas
      style={{
        height: size,
        width: size,
      }}>
      <Group>
        <Path
          path={arcOne}
          style={'stroke'}
          strokeWidth={arcOneWidth}
          color={color}
        />
        {displayArcTwo && (
          <Path
            path={arcTwo}
            style={'stroke'}
            strokeWidth={arcTwoWidth}
            color={color}
          />
        )}
        {displayArcThree && (
          <Path
            path={arcThree}
            style={'stroke'}
            strokeWidth={arcThreeWidth}
            color={color}
          />
        )}
        {displayArcFour && (
          <Path
            path={arcFour}
            style={'stroke'}
            strokeWidth={arcFourWidth}
            color={color}
          />
        )}
        <RoundedRect
          x={(size - squareSize) / 2}
          y={(size - squareSize) / 2}
          width={squareSize}
          height={squareSize}
          r={size / 20}
          color={color}
        />
      </Group>
    </Canvas>
  );
};

export default SkiaSignalWifi;
