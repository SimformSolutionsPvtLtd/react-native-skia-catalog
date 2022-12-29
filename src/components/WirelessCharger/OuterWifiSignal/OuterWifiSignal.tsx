import {
  BlendColor,
  Group,
  ImageSVG,
  Paint,
  Skia,
} from "@shopify/react-native-skia";
import React from "react";
import { SVG } from "../../../assets";
import type { WifiSignalsProps } from "./OuterWifiSignalTypes";

const secondCurve = Skia.SVG.MakeFromString(SVG.largeCurve);

const OuterWifiSignal = ({
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
      {curveSvg && (
        <ImageSVG
          svg={curveSvg}
          x={-(size * 0.3143)}
          y={-(size * 0.5428)}
          width={size * 0.1628}
          height={size * 0.1914}
          transform={[{ rotate: 3.02 }]}
        />
      )}
      {secondCurve && (
        <ImageSVG
          svg={secondCurve}
          x={size * 0.4857}
          y={size * 0.4914}
          width={size * 0.4285}
          height={size * 0.2428}
        />
      )}
    </Group>
  );
};

export default OuterWifiSignal;
