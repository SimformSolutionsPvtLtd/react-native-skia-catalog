import {
  interpolate,
  Transforms2d,
  useComputedValue,
} from "@shopify/react-native-skia";
import { useMemo } from "react";
import type { CirclePropsType } from "../../Base";
import type { RenderIndicatorHookReturnType, RenderIndicatorPropsType } from "../SkiaPulseIndicatorTypes";

const useRenderIndicator = ({
  index,
  progress,
  width,
  height,
  borderRadius,
  opacity,
}: RenderIndicatorPropsType): RenderIndicatorHookReturnType => {
  const { cx, cy, r } = useMemo<CirclePropsType>(() => {
    const aBorderRadius: number = borderRadius - 5;

    const centerX: number = width / 2;
    const centerY: number = height / 2;
    return { cx: centerX, cy: centerY, r: aBorderRadius };
  }, [borderRadius, height, width]);

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        scale: interpolate(
          progress.current,
          [0, 0.67, 1],
          index ? [0.4, 0.6, 0.4] : [0.4, 0.6, 1.0]
        ),
      },
    ];
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return interpolate(
      progress.current,
      [0, 0.67, 1],
      index ? [1.0, 1.0, 1.0] : [0.5, 0.5, 0.0]
    );
  }, [progress, opacity]);

  return { cx, cy, r, transform, opacityLocal };
};

export default useRenderIndicator;
