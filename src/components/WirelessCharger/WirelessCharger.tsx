import { Canvas } from "@shopify/react-native-skia";
import React from "react";
import { Colors } from "../../theme";
import { useWirelessCharger } from "./hooks";
import MainCircle from "./MainCircle";
import OuterCircles from "./OuterCircles";
import type {
  GetExploreCircleProps,
  WireLessChargerProps,
} from "./WirelessChargerTypes";

const angle: number = (2 * Math.PI) / 36;

const WirelessCharger = ({
  size = 350,
  outerCircleColor = Colors.dodgerBlue,
  wifiWaveColor = Colors.silver,
  thunderColor = Colors.tangerineYellow,
}: Partial<WireLessChargerProps>) => {
  const halfSize = size / 2;

  const {
    innerSmallCircleAnimation,
    outerSmallCircleAnimation,
    circleAnimation,
    signalOpacity,
    outerSignalOpacity,
    exploreRadiusOfOuterCircle,
    exploreRadiusOfInnerCircle,
  } = useWirelessCharger({ size });

  const getExploreCircles = ({ isOuter }: Partial<GetExploreCircleProps>) => {
    const exploreRadiusOfCircle = isOuter
      ? exploreRadiusOfOuterCircle
      : exploreRadiusOfInnerCircle;
    return Array.apply(null, Array(36)).map((_, i) => {
      return {
        cx: exploreRadiusOfCircle * Math.cos(angle * i) + halfSize,
        cy: exploreRadiusOfCircle * Math.sin(angle * i) + halfSize,
        r: size * 0.016,
        key: `circle_${i}`,
      };
    });
  };

  return (
    <Canvas
      style={{
        height: size,
        width: size,
      }}
    >
      <MainCircle
        {...{
          size,
          halfSize,
          wifiWaveColor,
          thunderColor,
          circleAnimation,
          signalOpacity,
          outerSignalOpacity,
        }}
      />
      {getExploreCircles({ isOuter: false }).map((item) => (
        <OuterCircles
          {...{
            halfSize,
            transformationValue: innerSmallCircleAnimation,
            circleItem: item,
            outerCircleColor,
          }}
        />
      ))}
      {getExploreCircles({ isOuter: true }).map((item) => (
        <OuterCircles
          {...{
            halfSize,
            transformationValue: outerSmallCircleAnimation,
            circleItem: item,
            outerCircleColor,
            circleOpacity: 0.55,
          }}
        />
      ))}
    </Canvas>
  );
};

export default WirelessCharger;
