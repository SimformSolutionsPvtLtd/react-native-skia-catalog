import { Circle, Group, Path, vec } from "@shopify/react-native-skia";
import React from "react";
import { InnerWifiSignal } from "../InnerWifiSignal";
import { OuterWifiSignal } from "../OuterWifiSignal";
import type { MainCircleProps } from "./MainCircleTypes";

const MainCircle = ({
  size,
  halfSize,
  wifiWaveColor,
  thunderColor,
  circleAnimation,
  signalOpacity,
  outerSignalOpacity,
  innerCurve,
  outerCurve,
  thunderPath,
}: MainCircleProps): React.ReactElement => {
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
        <Path path={thunderPath} color={thunderColor} />
        <InnerWifiSignal
          {...{
            size,
            wifiWaveColor,
            opacityOfWifiWave: signalOpacity,
            curvePath: innerCurve,
          }}
        />
        <OuterWifiSignal
          {...{
            size,
            wifiWaveColor,
            opacityOfWifiWave: outerSignalOpacity,
            curvePath: outerCurve,
          }}
        />
      </Group>
    </>
  );
};

export default MainCircle;
