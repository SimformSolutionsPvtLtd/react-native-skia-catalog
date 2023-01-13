import { BlendColor, Group, ImageSVG, Paint } from "@shopify/react-native-skia";
import React from "react";
import type { WavesProps } from "./WavesTypes";

const Waves = ({
  size,
  waveColor,
  wavePath,
  waveTransformForRight,
  waveTransformForLeft,
}: WavesProps) => {
  return (
    <Group
      layer={
        <Paint>
          <BlendColor color={waveColor} mode="srcIn" />
        </Paint>
      }
    >
      {wavePath && (
        <Group transform={waveTransformForRight}>
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
        <Group transform={waveTransformForLeft}>
          <ImageSVG
            svg={wavePath}
            x={size / -19.5}
            y={size / 1.11}
            height={size * 1.028}
            width={size / 1.3}
          />
        </Group>
      )}
    </Group>
  );
};

export default Waves;
