import {
  interpolate,
  rect,
  Skia,
  SkiaValue,
  Transforms2d,
  useComputedValue,
  useValue,
} from "@shopify/react-native-skia";
import type { UseCircularCheckMarkReturnType } from "../CircularCheckMarkType";

const useCircularCheckMark = (
  size: number,
  value: SkiaValue<number>
): UseCircularCheckMarkReturnType => {
  const circularCenterImageScale = useValue<Transforms2d>([{ scale: 1 }]);
  const topBorderTransform = useValue<Transforms2d>([{ rotate: 2.7 }]);
  const rightBorderTransform = useValue<Transforms2d>([{ rotate: 2.7 }]);
  const bottomBorderTransform = useValue<Transforms2d>([{ rotate: 2.7 }]);
  const leftBorderTransform = useValue<Transforms2d>([{ rotate: 2.7 }]);
  const arcPath = Skia.Path.Make();
  arcPath.addArc(rect(size / 22, size / 22, size / 1.1, size / 1.1), 0, 360);

  useComputedValue(() => {
    circularCenterImageScale.current = [
      { scale: interpolate(value.current, [0, 1], [0, 1]) },
    ];
    topBorderTransform.current = [
      {
        rotate: interpolate(value.current, [0, 1], [2.7, 8.6]),
      },
    ];
    rightBorderTransform.current = [
      {
        rotate: interpolate(value.current, [0, 1], [2.7, 10.2]),
      },
    ];
    bottomBorderTransform.current = [
      {
        rotate: interpolate(value.current, [0, 1], [2.7, 11.8]),
      },
    ];
    leftBorderTransform.current = [
      { rotate: interpolate(value.current, [0, 1], [2.7, 14.9]) },
    ];
  }, [value]);

  return {
    circularCenterImageScale,
    topBorderTransform,
    rightBorderTransform,
    bottomBorderTransform,
    leftBorderTransform,
    arcPath,
  };
};

export default useCircularCheckMark;
