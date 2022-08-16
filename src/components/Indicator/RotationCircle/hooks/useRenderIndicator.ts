import { interpolate, useComputedValue } from "@shopify/react-native-skia";
import { useMemo } from "react";
import type { CirclePropsType } from "../../Base";
import type { RenderIndicatorHookReturnType, RenderIndicatorPropsType } from "../SkiaRotationCircleIndicatorType";

const useRenderIndicator = ({
  index,
  progress,
  width,
  height,
  borderRadius,
  opacity,
  direction,
}: RenderIndicatorPropsType): RenderIndicatorHookReturnType => {
  const isFilled = useMemo<boolean>(() => index === 1, [index]);

  const { cx, cy, r } = useMemo<CirclePropsType>(() => {
    const aRadius: number = borderRadius - 5;

    const centerX: number = width / 2;
    const centerY: number = height / 2;
    return {
      cx: centerX,
      cy: centerY,
      r: isFilled ? aRadius / 5 : aRadius,
    };
  }, [borderRadius, height, width, isFilled]);

  const outputRange = useMemo(() => {
    if (direction === "clockwise") {
      return [0, 2 * Math.PI];
    } else {
      return [2 * Math.PI, 0];
    }
  }, [direction]);

  const transformCx = useComputedValue<number>(() => {
    return (
      (borderRadius - 5 - r) *
        Math.cos(
          2 * Math.PI * interpolate(progress.current, [0, 1], outputRange)
        ) +
      cx
    );
  }, [progress]);

  const transformCy = useComputedValue<number>(() => {
    return (
      (borderRadius - 5 - r) *
        Math.sin(
          2 * Math.PI * interpolate(progress.current, [0, 1], outputRange)
        ) +
      cy
    );
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return 1;
  }, [opacity]);
  return { cx, cy, r, isFilled, transformCx, transformCy, opacityLocal };
};

export default useRenderIndicator;
