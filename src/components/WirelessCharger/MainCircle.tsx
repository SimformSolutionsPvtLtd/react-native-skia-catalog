import {
  BlendColor,
  Circle,
  Group,
  ImageSVG,
  Paint,
  Skia,
  vec,
} from "@shopify/react-native-skia";
import React from "react";
import { SVG } from "../../assets";
import InnerWifiSignal from "./InnerWifiSignal";
import OuterWifiSignals from "./OuterWifiSignal";
import type { MainCircleProps } from "./WirelessChargerTypes";

const thunderSvg = Skia.SVG.MakeFromString(SVG.thunder);
const commonCurveSVG = Skia.SVG.MakeFromString(SVG.mediumCurve);

const MainCircle = ({
  size,
  halfSize,
  wifiWaveColor,
  thunderColor,
  circleAnimation,
  signalOpacity,
  outerSignalOpacity,
}: MainCircleProps) => {
  return (
    <>
      <Circle
        cx={halfSize}
        cy={halfSize}
        r={size * 0.3143}
        color={wifiWaveColor}
        opacity={0.55}
      />
      <Group transform={circleAnimation} origin={vec(halfSize, halfSize)}>
        {thunderSvg && (
          <Group
            layer={
              <Paint>
                <BlendColor color={thunderColor} mode="srcIn" />
              </Paint>
            }
          >
            <ImageSVG
              svg={thunderSvg}
              x={size * 0.3143}
              y={size * 0.3143}
              width={size * 0.4}
              height={size * 0.4}
            />
          </Group>
        )}
        <InnerWifiSignal
          {...{
            size,
            wifiWaveColor,
            opacityOfWifiWave: signalOpacity,
            curveSvg: commonCurveSVG,
          }}
        />
        <OuterWifiSignals
          {...{
            size,
            wifiWaveColor,
            opacityOfWifiWave: outerSignalOpacity,
            curveSvg: commonCurveSVG,
          }}
        />
      </Group>
    </>
  );
};

export default MainCircle;
