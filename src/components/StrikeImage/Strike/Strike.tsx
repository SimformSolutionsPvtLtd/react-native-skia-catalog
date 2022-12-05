import { Line } from "@shopify/react-native-skia";
import React from "react";
import { Colors } from "../../../theme";
import type { StrikePropsType } from "./StrikeTypes";

const Strike = ({
  primaryLineStartingCoordinate,
  secondaryLineStartingCoordinate,
  getEndingCoordinate,
  primaryLineColor,
  singleLineStrokeWidth,
}: StrikePropsType) => {
  return (
    <>
      <Line
        p1={primaryLineStartingCoordinate}
        p2={getEndingCoordinate(true)}
        color={primaryLineColor}
        strokeWidth={singleLineStrokeWidth}
      />
      <Line
        p1={secondaryLineStartingCoordinate}
        p2={getEndingCoordinate(false)}
        color={Colors.white}
        strokeWidth={singleLineStrokeWidth}
      />
    </>
  );
};

export default Strike;
