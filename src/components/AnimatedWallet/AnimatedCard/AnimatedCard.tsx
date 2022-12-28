import {
  Group,
  LinearGradient,
  RoundedRect,
  vec,
} from "@shopify/react-native-skia";
import React from "react";
import type { AnimatedCardProps } from "./AnimatedCardTypes";
import { useAnimatedCard } from "./hooks";

const AnimatedCard = ({
  originX,
  originY,
  cardNumber,
  size,
  color,
  id,
}: AnimatedCardProps) => {
  const { transform } = useAnimatedCard({ cardNumber });

  return (
    <Group
      origin={{ x: originX + 5 * cardNumber, y: originY }}
      transform={transform}
      key={id}>
      <RoundedRect
        x={originX}
        y={originY}
        r={size * 0.08}
        height={size * 0.4}
        width={size * 0.8 - cardNumber * size * 0.08}>
        <LinearGradient
          start={vec(0, size * 0.2)}
          end={vec(size * 0.8 - cardNumber * size * 0.08, size * 0.2)}
          colors={color}
        />
      </RoundedRect>
    </Group>
  );
};

export default AnimatedCard;
