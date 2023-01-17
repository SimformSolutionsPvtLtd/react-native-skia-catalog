import {
  Group,
  Line,
  Mask,
  Rect,
  RoundedRect,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import { useScannerOutline } from './hooks';
import type { ScannerOutlinePropsType } from './ScannerOutlineTypes';

const ScannerOutline = ({
  stopZooming = false,
  medianHeight,
  height = 220,
  borderRadius,
  borderWidth = 5,
  initialZoomScale = 0.9,
  zoomingDelay = 2000,
  borderColor,
}: ScannerOutlinePropsType): React.ReactElement => {
  const { transform, maskedSquareDimension, maskedLineWidth } =
    useScannerOutline({
      stopZooming,
      initialZoomScale,
      zoomingDelay,
      height,
      borderWidth,
    });

  return (
    <Mask
      mode="luminance"
      mask={
        <Group transform={transform} origin={vec(medianHeight, medianHeight)}>
          <RoundedRect
            x={0}
            y={0}
            width={height}
            height={height}
            r={borderRadius}
            color="white"
          />
          <RoundedRect
            x={borderWidth}
            y={borderWidth}
            height={maskedSquareDimension}
            width={maskedSquareDimension}
            r={borderRadius}
            color="black"
          />
          <Line
            p1={vec(0, medianHeight)}
            p2={vec(height, medianHeight)}
            color="black"
            style="stroke"
            strokeWidth={maskedLineWidth}
          />
          <Line
            p1={vec(medianHeight, 0)}
            p2={vec(medianHeight, height)}
            color="black"
            style="stroke"
            strokeWidth={maskedLineWidth}
          />
        </Group>
      }>
      <Rect x={0} y={0} width={height} height={height} color={borderColor} />
    </Mask>
  );
};

export default ScannerOutline;
