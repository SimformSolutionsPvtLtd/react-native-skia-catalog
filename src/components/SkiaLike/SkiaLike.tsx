import {
  Canvas,
  Circle,
  runTiming,
  Skia,
  useTouchHandler,
  useValue,
} from "@shopify/react-native-skia";
import React, { useState } from "react";
import { SVG } from "../../assets";
import { Colors } from "../../theme";
import { useSkiaLike } from "./hooks";
import { SkiaHeart } from "./SkiaHeart";
import type { SkisLikeProps } from "./SkiaLikeTypes";
import { SkiaSmallCircles } from "./SkiaSmallCircles";

const svgHeart = Skia.SVG.MakeFromString(SVG.heart);

const SkiaLike = ({
  size = 180,
  onChangeValue = () => {},
}: Partial<SkisLikeProps>): React.ReactElement => {
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
        justifyContent: "center",
        alignItems: "center",
      }}
      onTouch={touchHandler}
    >
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
