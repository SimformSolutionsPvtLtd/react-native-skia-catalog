import { Circle, Group, vec } from "@shopify/react-native-skia";
import React from "react";
import type { OuterCirclesProps } from "./OuterCirclesTypes";

const OuterCircles = ({
  halfSize,
  transformationValue,
  circleItem,
  outerCircleColor,
  circleOpacity,
}: OuterCirclesProps): React.ReactElement => {
  return (
    <Group transform={transformationValue} origin={vec(halfSize, halfSize)}>
      <Circle
        {...circleItem}
        color={outerCircleColor}
        opacity={circleOpacity}
      />
    </Group>
  );
};

export default OuterCircles;
