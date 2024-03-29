import {
  Easing,
  interpolate,
  useComputedValue,
  type SkPoint,
  type Transforms2d,
} from '@shopify/react-native-skia';
import { useMemo } from 'react';
import type { CirclePropsType } from '../../Base';
import type {
  RenderIndicatorHookReturnType,
  RenderIndicatorPropsType,
} from '../SkiaSkypeIndicatorTypes';

const useRenderIndicator = ({
  index,
  count,
  progress,
  width,
  height,
  borderRadius,
  opacity,
  progressDuration,
  minScale,
  maxScale,
}: RenderIndicatorPropsType): RenderIndicatorHookReturnType => {
  const frames = useMemo<number>(
    () => (60 * (progressDuration ?? 1600)) / 1000,
    [progressDuration]
  );
  const offset = useMemo<number>(() => index / (count - 1), [index, count]);
  const easing = useMemo<(t: number) => number>(
    () => Easing.bezier(0.5, offset, 0.5, 1.0),
    [offset]
  );

  const { cx, cy, r } = useMemo<CirclePropsType>(() => {
    const centerX: number = width / 2;
    const centerY: number = height / 2;
    return { cx: centerX, cy: centerY, r: borderRadius - 5 };
  }, [borderRadius, height, width]);

  const inputRange = useMemo<number[]>(
    () => Array.from(new Array(frames), (_item, i) => i / (frames - 1)),
    [frames]
  );

  const { outputRangeCx, outputRangeCy } = useMemo<{
    outputRangeCx: number[];
    outputRangeCy: number[];
  }>(() => {
    const outputCx = Array.from(
      new Array(frames),
      (_item, i) => r * Math.cos(easing(i / (frames - 1)) * (2 * Math.PI)) + cx
    );

    const outputCy = Array.from(
      new Array(frames),
      (_item, i) => r * Math.sin(easing(i / (frames - 1)) * (2 * Math.PI)) + cy
    );
    return { outputRangeCx: outputCx, outputRangeCy: outputCy };
  }, [cx, cy, easing, frames, r]);

  const newCX = useComputedValue<number>(() => {
    return interpolate(progress.current, inputRange, outputRangeCx);
  }, [progress]);

  const newCY = useComputedValue<number>(() => {
    return interpolate(progress.current, inputRange, outputRangeCy);
  }, [progress]);

  const newOrigin = useComputedValue<SkPoint>(() => {
    return { x: newCX.current, y: newCY.current };
  }, [newCX, newCY]);

  const transform = useComputedValue<Transforms2d>(() => {
    const min: number = minScale ?? 0.2;
    const max: number = maxScale ?? 1.0;
    return [
      {
        scale: interpolate(
          progress.current,
          [0, 1],
          [max - (max - min) * offset, min + (max - min) * offset]
        ),
      },
    ];
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return 1;
  }, [opacity]);

  return { newCX, newCY, r, newOrigin, transform, opacityLocal };
};

export default useRenderIndicator;
