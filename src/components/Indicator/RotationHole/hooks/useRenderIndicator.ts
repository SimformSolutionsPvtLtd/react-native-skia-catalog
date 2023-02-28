import { interpolate, useComputedValue } from '@shopify/react-native-skia';
import { useMemo } from 'react';
import type { CirclePropsType } from '../../Base';
import type {
  RenderIndicatorHookReturnType,
  RenderIndicatorPropsType,
} from '../SkiaRotationHoleIndicatorType';

const useRenderIndicator = ({
  index,
  progress,
  width,
  height,
  borderRadius,
  opacity,
  trackWidth,
  direction,
}: RenderIndicatorPropsType): RenderIndicatorHookReturnType => {
  const isFilled = useMemo<boolean>(() => index === 1, [index]);

  const { cx, cy, r, trackW } = useMemo<CirclePropsType>(() => {
    const aRadius: number = borderRadius - 5;

    const centerX: number = width / 2;
    const centerY: number = height / 2;
    const trackWh: number = trackWidth ?? aRadius / 5;
    return {
      cx: centerX,
      cy: centerY,
      r: isFilled ? trackWh / 2 - 1 : aRadius,
      trackW: isFilled ? 0 : trackWh,
    };
  }, [borderRadius, height, trackWidth, width, isFilled]);

  const outputRange = useMemo(() => {
    if (direction === 'clockwise') {
      return [0, 2 * Math.PI];
    } else {
      return [2 * Math.PI, 0];
    }
  }, [direction]);

  const transformCx = useComputedValue<number>(() => {
    return (
      (borderRadius - 5) *
        Math.cos(
          2 * Math.PI * interpolate(progress.current, [0, 1], outputRange)
        ) +
      cx
    );
  }, [progress]);

  const transformCy = useComputedValue<number>(() => {
    return (
      (borderRadius - 5) *
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
  return {
    cx,
    cy,
    r,
    isFilled,
    trackW,
    transformCx,
    transformCy,
    opacityLocal,
  };
};

export default useRenderIndicator;
