import {
  Canvas,
  Circle,
  Fill,
  Group,
  useValue,
} from "@shopify/react-native-skia";
import React from "react";
import { Colors } from "../../theme";
import { useAnimatedSwitch } from "./hooks";
import type { AnimatedSwitchProps } from "./ThemeSwitchTypes";

const SkiaThemeSwitch = ({
  lightThemeColor = Colors.kournikova,
  darkThemeColor = Colors.darkModerateViolet,
  size = 300,
  onToggle,
}: AnimatedSwitchProps) => {
  //initial value for circle(moon)
  const rotate = useValue(0);
  //initial value for shadow circle
  const shadowCircleRotate = useValue(0);

  //rectanglePath of switch

  const {
    circleTransform,
    shadowCircleTransform,
    interpolateButtonColor,
    rectanglePath,
    touchHandler,
  } = useAnimatedSwitch({
    rotate,
    shadowCircleRotate,
    lightThemeColor,
    darkThemeColor,
    size,
    onToggle,
  });

  return (
    <Canvas
      style={{
        height: size / 1.8,
      }}
      onTouch={touchHandler}
    >
      <Group clip={rectanglePath}>
        <Fill color={interpolateButtonColor} />
        <Group transform={circleTransform}>
          <Circle
            r={size / 5.45}
            cx={size / 3.55}
            cy={size / 3.65}
            color={Colors.white}
          />
        </Group>
        <Group transform={shadowCircleTransform}>
          <Circle
            r={size / 6.2}
            cx={size / -6.2}
            cy={size / 2.48}
            color={interpolateButtonColor}
          />
        </Group>
      </Group>
    </Canvas>
  );
};

export default SkiaThemeSwitch;
