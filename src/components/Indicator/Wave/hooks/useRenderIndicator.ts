import {
  Extrapolate,
  interpolate,
  Transforms2d,
  useComputedValue,
} from "@shopify/react-native-skia";
import { useMemo } from "react";
import type { CirclePropsType } from "../../Base";
import type {
  RenderIndicatorHookReturnType,
  RenderIndicatorPropsType,
} from "../SkiaWaveIndicatorTypes";

const floatEpsilon = Math.pow(2, -23);

const useRenderIndicator = ({
  index,
  progress,
  width,
  height,
  borderRadius,
  opacity,
  waveFactor,
  waveMode,
}: RenderIndicatorPropsType): RenderIndicatorHookReturnType => {
  const fill: boolean = waveMode === "fill";
  const factor: number = useMemo<number>(
    () => Math.max(1 - Math.pow(waveFactor ?? 0.54, index), floatEpsilon),
    [index, waveFactor]
  );

  const { cx, cy, r, trackW } = useMemo<CirclePropsType>(() => {
    const aBorderWidth: number = fill ? 0 : Math.floor(borderRadius / 5);

    const centerX: number = width / 2;
    const centerY: number = height / 2;
    return {
      cx: centerX,
      cy: centerY,
      r: borderRadius - 2,
      trackW: aBorderWidth,
    };
  }, [borderRadius, fill, height, width]);

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        scale: interpolate(
          progress.current,
          [factor, 1],
          [0, 1],
          Extrapolate.CLAMP
        ),
      },
    ];
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return interpolate(progress.current, [0, factor, 1], [0, 1, 0]);
  }, [progress, opacity]);

  return { cx, cy, r, fill, trackW, transform, opacityLocal };
};

export default useRenderIndicator;
