import { Path } from "@shopify/react-native-skia";
import React from "react";
import type {
  FollowUpHeartRatePropsType,
  HeartRateReturnType,
} from "./FollowUpHeartRateTypes";
import { useHeartRate } from "./hooks";

const FollowUpHeartRate = ({
  speed,
  size,
  canvasWidth,
  pulseWidth,
  canvasVerticalMidPoint,
}: FollowUpHeartRatePropsType): JSX.Element => {
  const {
    secondaryPulseStartingRate,
    primaryPulseStartingRate,
    primaryPulseEndingRate,
    pulsePath,
  }: HeartRateReturnType = useHeartRate({
    canvasWidth,
    size,
    speed,
    canvasVerticalMidPoint,
  });

  return (
    <>
      <Path
        path={pulsePath}
        style={"stroke"}
        strokeWidth={pulseWidth}
        strokeJoin={"round"}
        opacity={0.3}
      />
      <Path
        start={primaryPulseStartingRate}
        end={primaryPulseEndingRate}
        path={pulsePath}
        style={"stroke"}
        strokeWidth={pulseWidth}
        strokeJoin={"round"}
      />
      <Path
        start={secondaryPulseStartingRate}
        end={1}
        path={pulsePath}
        style={"stroke"}
        strokeWidth={pulseWidth}
        strokeJoin={"round"}
      />
    </>
  );
};

export default FollowUpHeartRate;
