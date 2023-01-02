import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  Rect,
  rect,
  RoundedRect,
  rrect,
  vec,
} from "@shopify/react-native-skia";
import React from "react";
import { Colors } from "../../theme";
import { AnimatedCard } from "./AnimatedCard";
import type { AnimatedWalletProps } from "./AnimatedWalletTypes";
import { useAnimatedWallet } from "./hooks";

const AnimatedWallet = ({
  size = 240,
  primaryColor = Colors.darkYellow,
  secondaryColor = Colors.darkRed,
  numberOfCards = 2,
}: Partial<AnimatedWalletProps>): React.ReactElement => {
  const originX = size * 0.08;
  const originY = size * 0.42;
  const inner = rrect(rect(0, 0, size * 1.05, size), size * 0.18, size * 0.18);

  const {
    clipTransforms,
    walletCards,
    lighterPrimaryColor,
    lighterSecondaryColor,
  } = useAnimatedWallet({
    size,
    primaryColor,
    secondaryColor,
  });

  return (
    <Canvas
      style={{
        height: size * 1.4,
        width: size * 1.05,
      }}
    >
      {walletCards?.map(
        ({ id, color }) =>
          numberOfCards >= id && (
            <AnimatedCard
              {...{
                id,
                originX,
                originY,
                cardNumber: id - 1,
                color,
                size,
              }}
            />
          )
      )}
      <Group clip={inner} opacity={1} transform={[{ translateY: size * 0.4 }]}>
        <Rect x={0} y={0} height={size * 0.4} width={size * 1.06}>
          <LinearGradient
            start={vec(0, size * 0.2)}
            end={vec(size, size * 0.2)}
            colors={[primaryColor, lighterPrimaryColor]}
          />
        </Rect>
        <Rect
          x={0}
          y={size * 0.4}
          height={size - size * 0.4}
          width={size * 1.06}
        >
          <LinearGradient
            start={vec(0, size * 0.4)}
            end={vec(size * 1.05, size * 1.06)}
            colors={[secondaryColor, lighterSecondaryColor]}
          />
        </Rect>
        <Group transform={clipTransforms}>
          <RoundedRect
            x={size * 0.74}
            y={size * 0.58}
            r={size * 0.06}
            height={size * 0.2}
            width={size * 0.47}
          >
            <LinearGradient
              start={vec(size * 0.74, size * 0.2)}
              end={vec(size * 1.05, size * 0.2)}
              colors={[lighterPrimaryColor, primaryColor]}
            />
          </RoundedRect>
          <Circle cx={size * 0.82} cy={size * 0.68} r={size * 0.04}>
            <LinearGradient
              start={vec(0, size * 0.2)}
              end={vec(size, size * 0.2)}
              colors={[secondaryColor, lighterSecondaryColor]}
            />
          </Circle>
        </Group>
      </Group>
    </Canvas>
  );
};

export default AnimatedWallet;
