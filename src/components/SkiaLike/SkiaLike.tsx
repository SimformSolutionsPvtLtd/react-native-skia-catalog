import {
  Canvas,
  Circle,
  runTiming,
  Skia,
  useTouchHandler,
  useValue,
} from '@shopify/react-native-skia';
import React, { useState } from 'react';
import { Colors } from '../../theme';
import { useSkiaLike } from './hooks';
import SkiaHeart from './SkiaHeart';
import type { SkisLikeProps } from './SkiaLikeTypes';
import SkiaSmallCircles from './SkiaSmallCircles';

const svgHeart = Skia.SVG.MakeFromString(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
  </svg>`
);

const SkiaLike = ({
  size = 100,
  onChangeValue = () => {},
}: Partial<SkisLikeProps>) => {
  const value = useValue<number>(0);
  const [isLike, setIsLike] = useState(false);
  const halfSize = size / 2;

  const {
    exploreCircleOddScale,
    exploreCircleEvenScale,
    radiusOfOuterCircle,
    opacityOuterCircle,
    opacityInnerCircle,
    opacityParticlesCircle,
    circle1Color,
    radiusOfInnerCircle,
    opacityHeart,
    heartColor,
    exploreCircleColor,
    scaleHeart,
    exploreRadius,
    angle,
  } = useSkiaLike({ size, value, isLike });

  const getExploreCircle = () => {
    return Array.apply(null, Array(14)).map((_, i) => {
      const positionIndex = i + 1;
      const circleIndex: number =
        positionIndex % 2 === 0 ? positionIndex - 1 + 0.7 : positionIndex;

      return {
        cx: exploreRadius * Math.cos(angle * circleIndex) + halfSize,
        cy: exploreRadius * Math.sin(angle * circleIndex) + halfSize,
        r: size * 0.05,
        key: `circle_${i}`,
      };
    });
  };

  const touchHandler = useTouchHandler(
    {
      onEnd: () => {
        if (!isLike) {
          runTiming(value, { from: 0, to: 1 }, { duration: 750 }, () => {
            onChangeValue?.(!isLike);
            setIsLike((previousValue) => !previousValue);
          });
        } else {
          value.current = 0;
          onChangeValue?.(!isLike);
          setIsLike((previousValue) => !previousValue);
        }
      },
    },
    [isLike]
  );

  return (
    <Canvas
      style={{
        height: size,
        width: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onTouch={touchHandler}>
      <Circle
        cx={halfSize}
        cy={halfSize}
        r={radiusOfOuterCircle}
        opacity={opacityOuterCircle}
        color={circle1Color}
      />
      <Circle
        cx={halfSize}
        cy={halfSize}
        r={radiusOfInnerCircle}
        opacity={opacityInnerCircle}
        color={Colors.white}
      />

      {getExploreCircle().map((item, circleIndex) => (
        <SkiaSmallCircles
          {...{
            circleIndex,
            exploreCircleEvenScale,
            exploreCircleOddScale,
            item,
            opacityParticlesCircle,
            exploreCircleColor,
          }}
        />
      ))}
      {svgHeart && (
        <SkiaHeart
          {...{ opacityHeart, heartColor, scaleHeart, halfSize, svgHeart }}
        />
      )}
    </Canvas>
  );
};

export default SkiaLike;
