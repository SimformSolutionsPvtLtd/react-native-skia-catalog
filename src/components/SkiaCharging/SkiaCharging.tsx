import {
  BlendColor,
  Canvas,
  Fill,
  Group,
  ImageSVG,
  Paint,
  RoundedRect,
  Skia,
} from "@shopify/react-native-skia";
import React from "react";
import { SVG } from "../../assets";
import { Colors } from "../../theme";
import { useAnimatedSwitch } from "./hooks";
import type { SkiaChargingProps } from "./SkiaChargingTypes";
import { SquareCharging } from "./SquareCharging";

const wavePath = Skia.SVG.MakeFromString(SVG.wavePath);
const thunderSvg = Skia.SVG.MakeFromString(SVG.thunderForChargingWire);
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
  } = useAnimatedSwitch({ size });

  return (
    <Canvas style={{ height: size, width: size }}>
      <Group clip={circlePath}>
        <Fill color={backgroundColor} />
        <Group transform={squareTransform}>
          {wavePath && (
            <Group
              layer={
                <Paint>
                  <BlendColor color={waveColor} mode="srcIn" />
                </Paint>
              }
              transform={waveTransformForRight}
            >
              <ImageSVG
                svg={wavePath}
                x={size / -4.34}
                y={size / 1.11}
                height={size * 1.028}
                width={size / 1.3}
              />
            </Group>
          )}
          {wavePath && (
            <Group
              layer={
                <Paint>
                  <BlendColor color={waveColor} mode="srcIn" />
                </Paint>
              }
              transform={waveTransformForLeft}
            >
              <ImageSVG
                svg={wavePath}
                x={size / -19.5}
                y={size / 1.11}
                height={size * 1.028}
                width={size / 1.3}
              />
            </Group>
          )}
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
        {curvePathSvg && (
          <Group
            transform={wireTransform}
            layer={
              <Paint>
                <BlendColor color={adapterColor} mode="srcIn" />
              </Paint>
            }
          >
            <ImageSVG
              svg={curvePathSvg}
              x={size / 2.25}
              y={size / 0.85}
              height={size / 5.57}
              width={size / 3.9}
            />
          </Group>
        )}
        {thunderSvg && (
          <Group
            transform={chargingIconMovement}
            layer={
              <Paint opacity={opacityValue}>
                <BlendColor color={thunderColor} mode="srcIn" />
              </Paint>
            }
          >
            <ImageSVG
              svg={thunderSvg}
              x={size / 2.88}
              y={size / 2.1}
              height={size / 3.25}
              width={size / 3.25}
            />
          </Group>
        )}
      </Group>
    </Canvas>
  );
};

export default SkiaCharging;
