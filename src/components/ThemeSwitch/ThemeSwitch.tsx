import {
  Canvas,
  Circle,
  Fill,
  Group,
  useValue,
} from "@shopify/react-native-skia";
import React from "react";
import { Colors } from "../../theme";
import { useThemeSwitch } from "./hooks";
import type { ThemeSwitchProps } from "./ThemeSwitchTypes";

const ThemeSwitch = ({
  lightThemeColor = Colors.kournikova,
  darkThemeColor = Colors.darkModerateViolet,
  size = 300,
  onToggle = () => {},
}: ThemeSwitchProps): React.ReactElement => {
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
  } = useThemeSwitch({
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
        height: size / 2.3,
        width: size,
      }}
      onTouch={touchHandler}
    >
      <Group clip={rectanglePath}>
        <Fill color={interpolateButtonColor} />
        <Circle
          r={size / 5.45}
          cx={size / 4.6046}
          cy={size / 4.6046}
          color={Colors.white}
          transform={circleTransform}
        />
        <Circle
          r={size / 6.2}
          cx={size / -4.5795}
          cy={size / 3.0092}
          color={interpolateButtonColor}
          transform={shadowCircleTransform}
        />
      </Group>
    </Canvas>
  );
};

export default ThemeSwitch;
