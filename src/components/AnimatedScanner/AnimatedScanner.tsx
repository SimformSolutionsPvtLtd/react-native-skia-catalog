import { Canvas, Group, Image, Line, vec } from '@shopify/react-native-skia';
import React from 'react';
import { Colors } from '../../theme';
import type { AnimatedScannerPropTypes } from './AnimatedScannerTypes';
import { useAnimatedScanner } from './hooks';
import { ScannerOutline } from './ScannerOutline';

const AnimatedScanner = ({
  stopZooming = false,
  initialZoomScale = 0.9,
  height = 220,
  zoomingDelay,
  borderColor = Colors.navyBlue,
  strokeColor = Colors.red,
  strokeDelay,
  strokeWidth = 170,
  borderRadius = 5,
  borderWidth = 5,
  imageSource,
}: Partial<AnimatedScannerPropTypes>): React.ReactElement => {
  const {
    verticalTransform,
    strokeStartPoint,
    medianHeight,
    image,
    padding,
    imageDimension,
    imageStartPosition,
  } = useAnimatedScanner({
    strokeDelay,
    strokeWidth,
    height,
    imageSource,
  });

  return (
    <Canvas
      style={{
        height: height,
        width: height,
      }}>
      {image && (
        <Image
          image={image}
          fit="contain"
          width={imageDimension}
          height={imageDimension}
          x={imageStartPosition}
          y={imageStartPosition}
        />
      )}
      <ScannerOutline
        {...{
          stopZooming,
          height,
          medianHeight,
          borderColor,
          borderRadius,
          borderWidth,
          initialZoomScale,
          zoomingDelay,
        }}
      />
      <Group
        transform={verticalTransform}
        origin={vec(medianHeight, medianHeight)}>
        <Line
          p1={vec(strokeStartPoint, padding)}
          p2={vec(strokeWidth + strokeStartPoint, padding)}
          color={strokeColor}
          style="stroke"
          strokeWidth={height / 50}
        />
      </Group>
    </Canvas>
  );
};

export default AnimatedScanner;
