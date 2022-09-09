import {
  Canvas,
  Circle,
  Group,
  Image,
  Line,
  Text,
  vec,
} from "@shopify/react-native-skia";
import React from "react";
import { Colors } from "../../theme";
import type {
  NotificationPropsType,
  NotificationReturnType,
} from "./NotificationTypes";
import { useNotification } from "./hooks";

const Notification = ({
  size = 150,
  notificationCount = 1,
  color = Colors.lightGreen,
}: NotificationPropsType) => {
  const {
    circleRadius,
    circleStrokeWidth,
    filledCircleCentre,
    fillledCircleVisibility,
    font,
    image,
    firstLineStartingCoordinate,
    firstLineEndingCoordinate,
    secondLineStartingCoordinate,
    secondLineEndingCoordinate,
    lineStrokeWidth,
    mailRotation,
    notificationNumber,
    notificationCountVisibility,
    strokeCircleCentre,
    strokeCircleVisibility,
    countTextYPosition,
    countTextXPosition,
  }: NotificationReturnType = useNotification(size, notificationCount);

  if (font === null) {
    return <></>;
  }

  return (
    <Canvas
      style={{
        height: size * 1.57,
        width: size * 1.3,
      }}
    >
      <Group transform={mailRotation} origin={vec(size * 0.1, size * 0.9)}>
        {image && (
          <Image
            image={image}
            fit={"contain"}
            width={size}
            height={size}
            x={size * 0.1}
            y={size * 0.4}
          />
        )}
      </Group>
      <Circle
        c={filledCircleCentre}
        r={circleRadius}
        color={color}
        opacity={fillledCircleVisibility}
      />
      <Circle
        c={strokeCircleCentre}
        r={circleRadius + circleStrokeWidth / 2}
        color={Colors.black}
        style={"stroke"}
        strokeWidth={circleStrokeWidth}
        opacity={strokeCircleVisibility}
      />
      <Text
        x={countTextXPosition}
        y={countTextYPosition}
        text={notificationNumber}
        opacity={notificationCountVisibility}
        font={font}
      />
      <Line
        p1={firstLineStartingCoordinate}
        p2={firstLineEndingCoordinate}
        strokeWidth={lineStrokeWidth}
        style={"stroke"}
        color={color}
      />
      <Line
        p1={secondLineStartingCoordinate}
        p2={secondLineEndingCoordinate}
        strokeWidth={lineStrokeWidth}
        style={"stroke"}
        color={color}
      />
    </Canvas>
  );
};

export default Notification;
