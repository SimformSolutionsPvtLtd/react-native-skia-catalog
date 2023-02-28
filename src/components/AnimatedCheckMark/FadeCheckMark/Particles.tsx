import {
  BlendColor,
  Circle,
  Group,
  Paint,
  Path,
  Selector,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import type { ParticlesType } from './FadeCheckMarkType';

const Particles = ({
  size,
  ExploreCircles,
  ExploreStars,
  exploreCircleTransform,
  circleParticleOpacity,
  starParticleOpacity,
  circleParticle,
  circleParticleColor,
  starPath,
  starParticleColor,
  starParticle,
  exploreStarTransform,
}: ParticlesType): React.ReactElement => {
  return (
    <>
      {ExploreCircles.map((item, index) => (
        <Group
          transform={Selector(
            exploreCircleTransform,
            CircleValue => CircleValue[index]
          )}
          key={index}
          opacity={circleParticleOpacity}>
          <Circle
            transform={circleParticle}
            r={size / 8}
            color={circleParticleColor}
            c={{ x: item.x, y: item.y }}
            origin={vec(item.x, item.y)}
          />
        </Group>
      ))}
      {ExploreStars.map((item, index) => (
        <Group
          layer={
            <Paint opacity={starParticleOpacity}>
              <BlendColor color={starParticleColor} mode="srcIn" />
            </Paint>
          }
          key={index}
          transform={Selector(
            exploreStarTransform,
            StarValue => StarValue[index]
          )}>
          <Path
            path={starPath}
            transform={starParticle}
            origin={vec(item.x / 17, item.y / 17)}
          />
        </Group>
      ))}
    </>
  );
};

export default Particles;
