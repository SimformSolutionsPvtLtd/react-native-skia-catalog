import {
  BlendColor,
  Canvas,
  Circle,
  Fill,
  Group,
  Image,
  Paint,
  rect,
  rrect,
  vec,
} from "@shopify/react-native-skia";
import React from "react";
import { useSimpleCheckMark } from "./hooks";
import type {
  SimpleAnimatedCheckMark,
  UseSimpleCheckMarkReturnType,
} from "./SimpleCheckMarkType";

const SimpleCheckMark = ({
  size,
  centerImageColor,
  circleOneColor,
  centerImage,
  value,
  circleOneScale,
}: SimpleAnimatedCheckMark): React.ReactElement => {
  const {
    centerImageScale,
    overlayCirclePosition,
  }: UseSimpleCheckMarkReturnType = useSimpleCheckMark(size, value);

  return (
    <Canvas
      style={{
        height: size,
        width: size,
      }}
    >
      <Group
        clip={rrect(rect(0, 0, size, size), size / 2, size / 2)}
        transform={circleOneScale}
        origin={vec(size / 2, size / 2)}
      >
        <Fill color={circleOneColor} />
        <Group
          layer={
            <Paint>
              <BlendColor color={centerImageColor} mode={"srcIn"} />
            </Paint>
          }
        >
          {centerImage && (
            <Image
              image={centerImage}
              x={size / 4.5}
              y={size / 4.5}
              height={size / 1.8}
              width={size / 1.8}
              origin={vec(size / 2, size / 2)}
              transform={centerImageScale}
            />
          )}
        </Group>
        <Circle
          cx={overlayCirclePosition}
          cy={size / 2}
          r={size}
          color={circleOneColor}
        />
      </Group>
    </Canvas>
  );
};

export default SimpleCheckMark;
