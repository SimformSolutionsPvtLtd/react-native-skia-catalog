import {
  Extrapolate,
  interpolate,
  Skia,
  SkPath,
  useComputedValue,
} from "@shopify/react-native-skia";
import { useMemo } from "react";
import type { CirclePropsType } from "../../Base";
import type { RenderIndicatorHookReturnType, RenderIndicatorPropsType } from "../SkiaPacmanIndicatorTypes";

const useRenderIndicator = ({
  index,
  progress,
  width,
  height,
  borderRadius,
  opacity,
}: RenderIndicatorPropsType): RenderIndicatorHookReturnType => {
  const { cx, cy, r } = useMemo<CirclePropsType>(() => {
    const moveX: number = borderRadius / 2 - 2;
    const aBorderRadius: number = borderRadius / 2;

    const centerX: number = width / 2 - moveX;
    const centerY: number = height / 2;
    return { cx: centerX, cy: centerY, r: aBorderRadius };
  }, [borderRadius, height, width]);

  const path = useComputedValue<SkPath>(() => {
    const pathLocal: SkPath = Skia.Path.Make();
    pathLocal.moveTo(cx, cy);
    pathLocal.addArc(
      { x: cx - r, y: cy - r, width: 2 * r, height: 2 * r },
      interpolate(
        progress.current,
        [0, 0.67, 1],
        index === 1 ? [180, 140, 180] : [0, 40, 0],
        Extrapolate.CLAMP
      ),
      180
    );
    return pathLocal;
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return 1;
  }, [opacity]);

  return { r, path, opacityLocal };
};

export default useRenderIndicator;
