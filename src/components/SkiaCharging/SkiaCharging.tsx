import {
  BlendColor,
  Canvas,
  Fill,
  Group,
  Paint,
  Path,
  RoundedRect,
  Skia,
} from "@shopify/react-native-skia";
import React from "react";
import { SVG } from "../../assets";
import { Colors } from "../../theme";
import { useAnimatedSwitch } from "./hooks";
import type { SkiaChargingProps } from "./SkiaChargingTypes";
import { SquareCharging } from "./SquareCharging";
import { Waves } from "./Waves";
import { Wire } from "./Wire";

const wavePath = Skia.SVG.MakeFromString(SVG.wavePath);
const curvePathSvg = Skia.SVG.MakeFromString(SVG.wirePath);

const SkiaCharging = ({
  waveColor = Colors.shadowGreen,
  adapterColor = Colors.white,
  thunderColor = Colors.green,
  size = 300,
  backgroundColor = Colors.purple,
}: SkiaChargingProps) => {
  const {
    circlePath,
    squareTransform,
    waveTransformForRight,
    waveTransformForLeft,
    rectenglePath,
    shadowPath,
    shadowTransform,
    chargingIconMovement,
    wireTransform,
    opacityValue,
    thunderPath,
  } = useAnimatedSwitch({ size });

  return (
    <Canvas style={{ height: size, width: size }}>
      <Group clip={circlePath}>
        <Fill color={backgroundColor} />
        <Group transform={squareTransform}>
          <Waves
            {...{
              size,
              waveColor,
              wavePath,
              waveTransformForRight,
              waveTransformForLeft,
            }}
          />
          <RoundedRect color={adapterColor} rect={rectenglePath} />
          <SquareCharging
            {...{ size }}
            topSquareCoordinate={{
              x: size / 3.9,
              y: size / 1.9,
            }}
            centerSquareCoordinate={{
              x: size / 2.29,
              y: size / 1.9,
            }}
            bottomSquareCoordinate={{
              x: size / 1.6,
              y: size / 1.9,
            }}
            color={backgroundColor}
          />
          <SquareCharging
            {...{ size }}
            topSquareCoordinate={{
              x: size / 3.9,
              y: size / 1.59,
            }}
            centerSquareCoordinate={{
              x: size / 2.29,
              y: size / 1.59,
            }}
            bottomSquareCoordinate={{
              x: size / 1.6,
              y: size / 1.59,
            }}
            color={backgroundColor}
          />
        </Group>
        <Group transform={shadowTransform}>
          <RoundedRect color={adapterColor} rect={shadowPath} />
        </Group>
        <Wire {...{ curvePathSvg, wireTransform, adapterColor, size }} />
      </Group>
      <Group
        transform={chargingIconMovement}
        layer={
          <Paint opacity={opacityValue}>
            <BlendColor color={thunderColor} mode="srcIn" />
          </Paint>
        }
      >
        <Path path={thunderPath} />
      </Group>
    </Canvas>
  );
};

export default SkiaCharging;
