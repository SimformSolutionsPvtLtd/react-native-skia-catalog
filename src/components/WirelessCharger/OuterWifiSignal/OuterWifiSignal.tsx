import { BlendColor, Group, Paint, Path } from "@shopify/react-native-skia";
import React from "react";
import type { WifiSignalsProps } from "./OuterWifiSignalTypes";

const OuterWifiSignal = ({
  size,
  opacityOfWifiWave,
  wifiWaveColor,
  curvePath,
}: WifiSignalsProps): React.ReactElement => {
  return (
    <Group
      layer={
        <Paint opacity={opacityOfWifiWave}>
          <BlendColor color={wifiWaveColor} mode="srcIn" />
        </Paint>
      }
    >
      <Path
        path={curvePath}
        style={"stroke"}
        strokeWidth={size * 0.031428}
        start={0.495}
        end={0.626}
        strokeCap={"round"}
      />
      <Path
        path={curvePath}
        style={"stroke"}
        strokeWidth={size * 0.031428}
        start={0}
        end={0.155}
        strokeCap={"round"}
      />
    </Group>
  );
};

export default OuterWifiSignal;
