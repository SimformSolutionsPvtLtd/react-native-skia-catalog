import {
  interpolate,
  Skia,
  SkPaint,
  useComputedValue,
  type Transforms2d,
} from '@shopify/react-native-skia';
import { useMemo } from 'react';
import type {
  RectanglePropsType,
  RenderIndicatorHookReturnType,
  RenderIndicatorPropsType,
} from '../SkiaBarIndicatorTypes';
import { getOutputRange } from '../SkiaBarIndicatorUtils';

const useRenderIndicator = ({
  index,
  count,
  progress,
  width,
  height,
  borderRadius,
  opacity,
  progressDuration,
}: RenderIndicatorPropsType): RenderIndicatorHookReturnType => {
  const paint: SkPaint = Skia.Paint();
  const samples = useMemo<number>(() => {
    const frames = (60 * (progressDuration ?? 1200)) / 1000;
    let c = 0;
    do c += count;
    while (c < frames);
    return c;
  }, [count, progressDuration]);

  const { x, y, h, w, gap, r } = useMemo<RectanglePropsType>(() => {
    const centerH: number = height / 2 - 10;
    const centerY: number = height / 2 - centerH / 2;
    const centerWidthWithGap: number = width / (2 * count - 1);

    let centerW: number = width / count;
    const centerGap: number = centerW - centerWidthWithGap;
    centerW = width / count - centerGap;

    const centerX: number =
      width / 2 - (centerW * count) / 2 - (centerGap * (count - 1)) / 2;
    const centerR: number = borderRadius ?? Math.min(centerH, centerW) / 2;

    return {
      x: centerX,
      y: centerY,
      h: centerH,
      w: centerW,
      gap: centerGap,
      r: centerR,
    };
  }, [borderRadius, height, width, count]);

  const inputRange = useMemo<number[]>(
    () => Array.from(new Array(samples + 1), (_item, i: number) => i / samples),
    [samples]
  );

  const { outputRangeTop, outputRangeBottom } = useMemo<{
    outputRangeTop: number[];
    outputRangeBottom: number[];
  }>(() => {
    const top: number[] = getOutputRange(+(h - r) / 3, index, count, samples);
    const bottom: number[] = getOutputRange(
      -(h - r) / 3,
      index,
      count,
      samples
    );
    return { outputRangeTop: top, outputRangeBottom: bottom };
  }, [count, h, index, r, samples]);

  const transformTop = useComputedValue<Transforms2d>(() => {
    return [
      {
        translateY: interpolate(progress.current, inputRange, outputRangeTop),
      },
    ];
  }, [progress]);

  const transformBottom = useComputedValue<Transforms2d>(() => {
    return [
      {
        translateY: interpolate(
          progress.current,
          inputRange,
          outputRangeBottom
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

  return {
    x,
    y,
    w,
    h,
    r,
    gap,
    paint,
    opacityLocal,
    transformTop,
    transformBottom,
  };
};

export default useRenderIndicator;
