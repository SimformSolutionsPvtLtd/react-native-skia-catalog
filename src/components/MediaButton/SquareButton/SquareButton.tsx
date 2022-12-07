import { Rect, vec } from "@shopify/react-native-skia";
import React from "react";
import type { SquareButtonPropsType } from "./SquareButtonTypes";

const SquareButton = ({
  size,
  color,
  pulseDisable,
  squarePulse,
  canvasSize,
  pulseOpacity,
  canvasCentre,
  buttonStartingPoint,
}: SquareButtonPropsType) => {
  return (
    <>
      {!pulseDisable && (
        <Rect
          x={0}
          y={0}
          origin={vec(canvasCentre, canvasCentre)}
          height={canvasSize}
          width={canvasSize}
          color={color}
          transform={squarePulse}
          opacity={pulseOpacity}
        />
      )}
      <Rect
        x={buttonStartingPoint}
        y={buttonStartingPoint}
        height={size}
        width={size}
        color={color}
      />
    </>
  );
};

export default SquareButton;
