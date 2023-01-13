import {
  interpolate,
  useComputedValue,
  type Transforms2d,
} from '@shopify/react-native-skia';
import { useMemo } from 'react';
import type { CirclePropsType } from '../../Base';
import type {
  RenderIndicatorHookReturnType,
  RenderIndicatorPropsType,
} from '../SkiaBallIndicatorTypes';

const useRenderIndicator = ({
  index,
  count,
  progress,
  width,
  height,
  borderRadius,
  opacity,
}: RenderIndicatorPropsType): RenderIndicatorHookReturnType => {
  const { cx, cy, r } = useMemo<CirclePropsType>(() => {
    const aRadius: number = borderRadius - 10;

    const angle: number = (2 * Math.PI) / count;
    const centerX: number = aRadius * Math.cos(angle * index) + width / 2;
    const centerY: number = aRadius * Math.sin(angle * index) + height / 2;
    return { cx: centerX, cy: centerY, r: aRadius };
  }, [borderRadius, count, index, height, width]);

  const inputRange = useMemo<number[]>(
    () => Array.from(new Array(count + 1), (_item, i: number) => i / count),
    [count]
  );

  const outputRange = useMemo<number[]>(() => {
    const output: number[] = Array.from(
      new Array(count),
      (_item, i: number) => 1.2 - (0.5 * i) / (count - 1)
    );
    for (let j: number = 0; j < index; j++) {
      output.unshift(output.pop()!);
    }
    output.unshift(...output.slice(-1));
    return output;
  }, [count, index]);

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        scale: interpolate(progress.current, inputRange, outputRange),
      },
    ];
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return 1;
  }, [opacity]);

  return { transform, cx, cy, r, opacityLocal };
};

export default useRenderIndicator;
