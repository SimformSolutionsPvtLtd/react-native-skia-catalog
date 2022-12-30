import {
  DataSourceParam,
  interpolate,
  SkiaValue,
  SkImage,
  Transforms2d,
  useComputedValue,
  useImage,
  useTiming,
  useValue,
} from "@shopify/react-native-skia";
import type { UseAnimatedCheckMarkReturnType } from "../AnimatedCheckMarkTypes";

const useAnimatedCheckMark = (
  speed: number,
  centerImageSource: DataSourceParam
): UseAnimatedCheckMarkReturnType => {
  const value: SkiaValue<number> = useTiming(
    { from: 0, to: 1 },
    { duration: speed }
  );
  const centerImage: SkImage | null = useImage(centerImageSource);
  const circleOneScale = useValue<Transforms2d>([{ scale: 1 }]);
  const centerImageOpacity = useValue<number>(0);

  useComputedValue(() => {
    circleOneScale.current = [
      { scale: interpolate(value.current, [0, 0.2, 1], [0, 1, 1]) },
    ];
    centerImageOpacity.current = interpolate(
      value.current,
      [0, 0.2, 0.8, 1],
      [0, 0, 1, 1]
    );
  }, [value]);

  return {
    circleOneScale,
    centerImage,
    centerImageOpacity,
    value,
  };
};

export default useAnimatedCheckMark;
