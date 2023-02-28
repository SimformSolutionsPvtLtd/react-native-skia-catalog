import {
  BlendColor,
  Canvas,
  Circle,
  Group,
  Image,
  Paint,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import type {
  FadeCheckMarkType,
  UseFadeCheckMarkReturnType,
} from './FadeCheckMarkType';
import { useFadeCheckMark } from './hooks';
import Particles from './Particles';

const FadeCheckMark = ({
  size,
  value,
  centerImageColor,
  circleOneColor,
  circleTwoColor,
  circleParticleColor,
  starParticleColor,
  showParticle,
  centerImage,
  centerImageOpacity,
  circleOneScale,
}: FadeCheckMarkType): React.ReactElement => {
  const {
    circleParticle,
    starParticle,
    circleTwoScale,
    exploreCircleTransform,
    exploreStarTransform,
    circleOneOpacity,
    circleParticleOpacity,
    starParticleOpacity,
    starPath,
    ExploreCircles,
    ExploreStars,
  }: UseFadeCheckMarkReturnType = useFadeCheckMark(size, value);

  return (
    <Canvas
      style={{
        height: size * 2,
        width: size * 2,
      }}>
      <Circle
        r={size / 1.4}
        opacity={circleOneOpacity}
        transform={circleOneScale}
        color={circleOneColor}
        c={{ x: size * 1, y: size * 1 }}
        origin={vec(size, size)}
      />
      <Circle
        r={size / 2.5}
        transform={circleTwoScale}
        opacity={1}
        color={circleTwoColor}
        c={{ x: size * 1, y: size * 1 }}
        origin={vec(size, size)}
      />
      <Group
        layer={
          <Paint>
            <BlendColor color={centerImageColor} mode={'srcIn'} />
          </Paint>
        }>
        {centerImage && (
          <Image
            image={centerImage}
            x={size * 0.8}
            y={size * 0.8}
            height={size / 2.5}
            width={size / 2.5}
            origin={vec(size, size)}
            opacity={centerImageOpacity}
          />
        )}
      </Group>
      {showParticle && (
        <Particles
          {...{
            size,
            circleParticle,
            circleParticleColor,
            circleParticleOpacity,
            exploreCircleTransform,
            exploreStarTransform,
            ExploreCircles,
            ExploreStars,
            starParticle,
            starParticleColor,
            starParticleOpacity,
            starPath,
          }}
        />
      )}
    </Canvas>
  );
};

export default FadeCheckMark;
