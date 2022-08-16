import {
  interpolate,
  Skia,
  SkPath,
  Transforms2d,
  useComputedValue,
} from "@shopify/react-native-skia";
import { useMemo } from "react";
import type { RenderIndicatorHookReturnType, RenderIndicatorPropsType } from "../SkiaCircleIndicatorTypes";

const useRenderIndicator = ({
  progress,
  width,
  height,
  opacity,
}: RenderIndicatorPropsType): RenderIndicatorHookReturnType => {
  const circleHeight: number = useMemo<number>(() => {
    const animSize: number = Math.min(width, height);
    return animSize - 12;
  }, [height, width]);

  const path: SkPath = Skia.Path.Make();
  path.addArc(
    {
      x: width / 2 - circleHeight / 2,
      y: height / 2 - circleHeight / 2,
      width: circleHeight,
      height: circleHeight,
    },
    0,
    360
  );

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        rotate: interpolate(progress.current, [0, 1], [0, 360]),
      },
    ];
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return 1;
  }, [opacity]);

  return { path, circleHeight, transform, opacityLocal };
};

export default useRenderIndicator;
