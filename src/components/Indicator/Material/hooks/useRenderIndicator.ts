import {
  interpolate,
  runTiming,
  useComputedValue,
  useValue,
  type SkiaAnimation,
  type Transforms2d,
} from '@shopify/react-native-skia';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import type { CirclePropsType } from '../../Base';
import type {
  RenderIndicatorHookReturnType,
  RenderIndicatorPropsType,
} from '../SkiaMaterialIndicatorTypes';
import { makeArcPath } from '../SkiaMaterialIndicatorUtils';

const MIN_ARC_ANGLE = 0.1;
const MAX_ARC_ANGLE = 1.5 * Math.PI;

const useRenderIndicator = ({
  progress,
  width,
  height,
  borderRadius,
  opacity,
  animating,
  trackWidth,
  direction,
}: RenderIndicatorPropsType): RenderIndicatorHookReturnType => {
  const startAngle = useValue(-MIN_ARC_ANGLE);
  const endAngle = useValue(0);
  const subscribeStartAngle = useRef<SkiaAnimation>();
  const subscribeEndAngle = useRef<SkiaAnimation>();

  const { cx, cy, r, trackW } = useMemo<CirclePropsType>(() => {
    const aBorderRadius: number = borderRadius - 10;

    const centerX: number = width / 2 - aBorderRadius;
    const centerY: number = height / 2 - aBorderRadius;
    const trackWh: number = trackWidth ?? aBorderRadius / 3;
    return { cx: centerX, cy: centerY, r: aBorderRadius, trackW: trackWh };
  }, [borderRadius, width, height, trackWidth]);

  const path = useComputedValue<string>(() => {
    return makeArcPath(
      cx,
      cy,
      startAngle.current,
      endAngle.current,
      r,
      direction ?? 'counter-clockwise'
    );
  }, [startAngle, endAngle]);

  const handleAnimation = useCallback(
    (iteration: number = 1) => {
      subscribeStartAngle.current = runTiming(
        startAngle,
        -MAX_ARC_ANGLE * iteration - MIN_ARC_ANGLE,
        {
          duration: 1000,
        },
        () => {
          subscribeEndAngle.current = runTiming(
            endAngle,
            -MAX_ARC_ANGLE * iteration,
            {
              duration: 1000,
            },
            () => {
              handleAnimation(iteration + 1);
            }
          );
        }
      );
    },
    [endAngle, startAngle]
  );

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        rotate: interpolate(
          progress.current,
          [0, 1],
          direction === 'counter-clockwise' ? [360, 0] : [0, 360]
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

  useEffect(() => {
    if (animating) {
      handleAnimation();
    }

    return () => {
      subscribeStartAngle?.current?.cancel();
      subscribeEndAngle?.current?.cancel();
      startAngle.current = -MIN_ARC_ANGLE;
      endAngle.current = 0;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animating]);

  return { cx, cy, r, trackW, path, transform, opacityLocal };
};

export default useRenderIndicator;
