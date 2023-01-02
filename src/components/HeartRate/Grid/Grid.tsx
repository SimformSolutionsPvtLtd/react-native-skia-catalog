import { LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import React from "react";
import { Colors } from "../../../theme";
import type { GridPropsType } from "./GridTypes";

const Grid = ({
  size,
  canvasWidth,
  gridColor,
}: GridPropsType): React.ReactElement => {
  const squareVerticalCount = 8; // Number vertical square
  const squareContainerSize = size / squareVerticalCount; // Per square size
  const gridSize = 2;
  const squareSize = squareContainerSize - gridSize; // Absolute square size
  const squareHorizontalCount =
    Math.floor(canvasWidth / squareContainerSize) + 1; // Number horizontal square

  return (
    <>
      <Rect x={0} y={0} width={canvasWidth} height={size}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(0, size)}
          colors={[Colors.white, gridColor, Colors.white]}
        />
      </Rect>
      {new Array(squareVerticalCount).fill(0).map((_, verticalIndex) => {
        return new Array(squareHorizontalCount)
          .fill(0)
          .map((_, horizontalIndex) => (
            <Rect
              key={`${horizontalIndex}${verticalIndex}`}
              height={squareSize}
              width={squareSize}
              x={horizontalIndex * squareContainerSize + gridSize}
              y={verticalIndex * squareContainerSize}
              color={Colors.white}
            />
          ));
      })}
    </>
  );
};

export default Grid;
