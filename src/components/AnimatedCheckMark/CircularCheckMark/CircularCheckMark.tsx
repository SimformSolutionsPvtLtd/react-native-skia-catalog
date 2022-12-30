import {
  BlendColor,
  Canvas,
  Group,
  Image,
  Paint,
  Path,
  vec,
} from "@shopify/react-native-skia";
import React from "react";
import type {
  CircularCheckMarkType,
  UseCircularCheckMarkReturnType,
} from "./CircularCheckMarkType";
import { useCircularCheckMark } from "./hooks";

const CircularCheckMark = ({
  size,
  value,
  multiColor,
  centerImage,
  borderColor,
  centerImageColor,
  topBorderColor,
  rightBorderColor,
  bottomBorderColor,
  leftBorderColor,
  centerImageOpacity,
}: CircularCheckMarkType): React.ReactElement => {
  const {
    circularCenterImageScale,
    topBorderTransform,
    rightBorderTransform,
    bottomBorderTransform,
    leftBorderTransform,
    arcPath,
  }: UseCircularCheckMarkReturnType = useCircularCheckMark(size, value);

  return (
    <Canvas
      style={{
        height: size,
        width: size,
      }}
    >
      <Path
        path={arcPath}
        style={"stroke"}
        strokeWidth={size / 25}
        start={0.25}
        end={0.52}
        transform={topBorderTransform}
        origin={vec(size / 2, size / 2)}
        color={multiColor ? topBorderColor : borderColor}
      />
      <Path
        path={arcPath}
        style={"stroke"}
        strokeWidth={size / 25}
        start={0.25}
        end={0.52}
        transform={rightBorderTransform}
        origin={vec(size / 2, size / 2)}
        color={multiColor ? rightBorderColor : borderColor}
      />
      <Path
        path={arcPath}
        style={"stroke"}
        strokeWidth={size / 25}
        start={0.25}
        end={0.52}
        transform={bottomBorderTransform}
        origin={vec(size / 2, size / 2)}
        color={multiColor ? bottomBorderColor : borderColor}
      />
      <Path
        path={arcPath}
        style={"stroke"}
        strokeWidth={size / 25}
        start={0}
        end={0.27}
        transform={leftBorderTransform}
        origin={vec(size / 2, size / 2)}
        color={multiColor ? leftBorderColor : borderColor}
      />
      <Group
        layer={
          <Paint>
            <BlendColor color={centerImageColor} mode={"srcIn"} />
          </Paint>
        }
      >
        {centerImage && (
          <Image
            transform={circularCenterImageScale}
            x={size / 4.5}
            y={size / 4.5}
            height={size / 1.8}
            width={size / 1.8}
            origin={vec(size / 2, size / 2)}
            image={centerImage}
            opacity={centerImageOpacity}
          />
        )}
      </Group>
    </Canvas>
  );
};

export default CircularCheckMark;
