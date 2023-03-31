import { BlendColor, Group, ImageSVG, Paint } from '@shopify/react-native-skia';
import React from 'react';
import { Colors } from '../../../theme';
import type { SkiaHeartProps } from './SkiaHeartTypes';

const SkiaHeart = ({
  opacityHeart,
  heartColor,
  scaleHeart,
  halfSize,
  svgHeart,
  isLike,
}: SkiaHeartProps): React.ReactElement => (
  <Group
    layer={
      <Paint opacity={opacityHeart}>
        <BlendColor
          color={isLike ? Colors.amaranth : heartColor}
          mode="srcIn"
        />
      </Paint>
    }
    transform={scaleHeart}
    origin={{ x: halfSize, y: halfSize }}>
    <ImageSVG
      svg={svgHeart}
      x={halfSize - halfSize / 2}
      y={halfSize - halfSize / 2}
      width={halfSize}
      height={halfSize}
    />
  </Group>
);

export default SkiaHeart;
