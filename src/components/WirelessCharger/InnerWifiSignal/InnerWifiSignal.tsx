import {
  BlendColor,
  Group,
  ImageSVG,
  Paint,
  Skia,
} from "@shopify/react-native-skia";
import React from "react";
import { SVG } from "../../../assets";
import type { WifiSignalsProps } from "./InnerWifiSignalTypes";

const firstCurveSvg = Skia.SVG.MakeFromString(SVG.smallCurve);

const InnerWifiSignal = ({
  size,
  opacityOfWifiWave,
  wifiWaveColor,
  curveSvg,
}: WifiSignalsProps): React.ReactElement => {
  return (
    <Group
      layer={
        <Paint opacity={opacityOfWifiWave}>
          <BlendColor color={wifiWaveColor} mode="srcIn" />
        </Paint>
      }
    >
      {firstCurveSvg && (
        <ImageSVG
          svg={firstCurveSvg}
          x={size * 0.16}
          y={size * 0.245}
          width={size * 0.342}
          height={size * 0.3857}
        />
      )}
      {curveSvg && (
        <ImageSVG
          svg={curveSvg}
          x={size * 0.571}
          y={size * 0.5}
          width={size * 0.171}
          height={size * 0.1771}
        />
      )}
    </Group>
  );
};

export default InnerWifiSignal;
