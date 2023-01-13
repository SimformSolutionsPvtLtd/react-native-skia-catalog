import { BlendColor, Group, Paint, Path } from "@shopify/react-native-skia";
import React from "react";
import type { WavesProps } from "./WavesTypes";

const Waves = ({
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
      <Group transform={waveTransformForRight}>
        <Path path={wavePath} opacity={0.9} />
      </Group>
      <Group transform={waveTransformForLeft}>
        <Path path={wavePath} />
      </Group>
    </Group>
  );
};

export default Waves;
