import { Circle, Group, Paint, Selector } from "@shopify/react-native-skia";
import React from "react";
import type { SkiaSmallCirclesProps } from "./SkiaSmallCirclesTypes";

const SkiaSmallCircles = ({
  circleIndex,
  exploreCircleEvenScale,
  exploreCircleOddScale,
  item,
  opacityParticlesCircle,
  exploreCircleColor,
}: SkiaSmallCirclesProps): React.ReactElement => (
  <Group
    transform={Selector(
      circleIndex % 2 === 0 ? exploreCircleEvenScale : exploreCircleOddScale,
      (circleValue) => circleValue[circleIndex]
    )}
    origin={{ x: item.cx, y: item.cy }}
    key={item.key}
  >
    <Circle {...item} opacity={opacityParticlesCircle}>
      <Paint
        opacity={opacityParticlesCircle}
        color={Selector(
          exploreCircleColor,
          (circleValue) => circleValue[circleIndex]
        )}
      />
    </Circle>
  </Group>
);

export default SkiaSmallCircles;
