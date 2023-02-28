import { BlendColor, Group, ImageSVG, Paint } from '@shopify/react-native-skia';
import React from 'react';
import type { WireProps } from './WireTypes';

const Wire = ({
  curvePathSvg,
  wireTransform,
  adapterColor,
  size,
}: WireProps) => {
  return (
    <>
      {curvePathSvg && (
        <Group
          transform={wireTransform}
          layer={
            <Paint>
              <BlendColor color={adapterColor} mode="srcIn" />
            </Paint>
          }>
          <ImageSVG
            svg={curvePathSvg}
            x={size / 2.25}
            y={size / 0.85}
            height={size / 5.57}
            width={size / 3.9}
          />
        </Group>
      )}
    </>
  );
};

export default Wire;
