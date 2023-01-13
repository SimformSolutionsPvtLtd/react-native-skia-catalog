import {
  Extrapolate,
  interpolate,
  interpolateColors,
  rect,
  rrect,
  runTiming,
  useComputedValue,
  useTouchHandler,
  type TouchHandler,
  type Transforms2d,
} from '@shopify/react-native-skia';
import { useState } from 'react';
import type { UseThemeSwitchProps } from '../ThemeSwitchTypes';

const useThemeSwitch = ({
  rotate,
  onToggle,
  shadowCircleRotate,
  lightThemeColor,
  darkThemeColor,
  size,
}: UseThemeSwitchProps) => {
  const [lightTheme, setLightTheme] = useState(true);
  const [shadowCircle, setShadowCircle] = useState(true);

  //rectanglePath of switch
  const rectanglePath = rrect(
    rect(0, 0, size, size / 2.3),
    size / 3.75,
    size / 3.75
  );

  const initialValue = 0;
  const darktheme = size / 1.77;
  const shadowValue = size / 1.07; //for shadow translateX value
  const shadowCircleValue = size / -6.2; //for shadow translateY value
  const shadowCircleUpdatedValue = size / -15.5; //for shadow translateY updated value
  const moonColor = !lightTheme
    ? [darkThemeColor, lightThemeColor]
    : [lightThemeColor, darkThemeColor];
  const moonTransform = !lightTheme
    ? [darktheme, initialValue]
    : [initialValue, darktheme];
  const shadowCircleColor = !shadowCircle
    ? [darkThemeColor, lightThemeColor]
    : [lightThemeColor, darkThemeColor];

  //Touch handler
  const touchHandler: TouchHandler = useTouchHandler(
    {
      onStart: () => {
        runTiming(
          rotate,
          { from: 0, to: 1 },
          {
            duration: 950,
          },
          () => {
            setLightTheme(prewValue => {
              return !prewValue;
            });
            lightTheme ? onToggle?.('dark') : onToggle?.('light');
            rotate.current = 0;
          }
        );
        runTiming(
          shadowCircleRotate,
          { from: 0, to: 1 },
          { duration: 950 },
          () => {
            setShadowCircle(prewValue => {
              return !prewValue;
            });
            shadowCircleRotate.current = 0;
          }
        );
      },
    },
    [lightTheme]
  );

  //Animation for circle(moon)
  const circleTransform = useComputedValue<Transforms2d>(() => {
    //right to left animation
    return [
      {
        translateX: interpolate(rotate.current, [0, 1], moonTransform, {
          extrapolateRight: Extrapolate.CLAMP,
        }),
      },
    ];
  }, [rotate, lightTheme]);

  // change themeSwitch background color
  const interpolateButtonColor = useComputedValue(() => {
    return interpolateColors(rotate.current, [0, 1], moonColor);
  }, [rotate, lightTheme]);

  // //shadow circle color
  const secondColorTrasnsform = useComputedValue(() => {
    return interpolateColors(
      shadowCircleRotate.current,
      [0, 1],
      shadowCircleColor
    );
  }, [shadowCircleRotate, shadowCircle]);

  const shadowCircleTransform = useComputedValue<Transforms2d>(() => {
    // right to left animation
    if (!shadowCircle) {
      return [
        {
          translateX: interpolate(
            shadowCircleRotate.current,
            [0, 1],
            [shadowValue, initialValue]
          ),
        },
        {
          translateY: interpolate(
            shadowCircleRotate.current,
            [0, 1],
            [shadowCircleValue, shadowCircleUpdatedValue],
            {
              extrapolateLeft: Extrapolate.CLAMP,
            }
          ),
        },
      ];
    } else {
      //left to right animation
      return [
        {
          translateX: interpolate(
            shadowCircleRotate.current,
            [0, 1],
            [initialValue, shadowValue]
          ),
        },
        {
          translateY: interpolate(
            shadowCircleRotate.current,
            [0, 1],
            [shadowCircleUpdatedValue, shadowCircleValue],
            {
              extrapolateLeft: Extrapolate.CLAMP,
            }
          ),
        },
      ];
    }
  }, [shadowCircleRotate, shadowCircle]);

  return {
    circleTransform,
    interpolateButtonColor,
    shadowCircleTransform,
    secondColorTrasnsform,
    rectanglePath,
    touchHandler,
  };
};

export default useThemeSwitch;
