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
} from '../SkiaBreathingIndicatorType';

const useRenderIndicator = ({
  progress,
  width,
  height,
  borderRadius,
  opacity,
  trackWidth,
}: RenderIndicatorPropsType): RenderIndicatorHookReturnType => {
  const { cx, cy, r, trackW } = useMemo<CirclePropsType>(() => {
    const aRadius: number = borderRadius - 5;

    const centerX: number = width / 2;
    const centerY: number = height / 2;
    const trackWh: number = trackWidth ?? Math.floor(borderRadius / 5);
    return { cx: centerX, cy: centerY, r: aRadius, trackW: trackWh };
  }, [borderRadius, height, width, trackWidth]);

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        scale: interpolate(progress.current, [0, 0.5, 1], [0.1, 1.0, 0.1]),
      },
    ];
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return 1;
  }, [opacity]);
  return { cx, cy, r, trackW, transform, opacityLocal };
};

export default useRenderIndicator;
