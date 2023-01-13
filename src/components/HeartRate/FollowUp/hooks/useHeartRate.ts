import {
  interpolate,
  Skia,
  useComputedValue,
  useTiming,
  type SkiaValue,
  type SkPath,
} from '@shopify/react-native-skia';
import { useState } from 'react';
import { getFollowUpPulsePoints, getPulsePath } from '../../../../utils';
import type {
  HeartRateHookParams,
  HeartRateReturnType,
} from '../FollowUpHeartRateTypes';

const useHeartRate = ({
  size,
  speed,
  canvasWidth,
  canvasVerticalMidPoint,
}: HeartRateHookParams): HeartRateReturnType => {
  const [cycleCount, setCycleCount] = useState(0);
  const path: SkPath = Skia.Path.Make();
  const pulsePath: SkPath = getPulsePath({
    path,
    canvasWidth,
    canvasVerticalMidPoint,
    pathPoints: getFollowUpPulsePoints({ canvasVerticalMidPoint, size }),
  }); //Draws pulse

  const timeFrame: SkiaValue<number> = useTiming(
    { from: 0, to: 1, loop: cycleCount === 1 },
    { duration: speed },
    current => {
      setCycleCount(current);
    }
  );

  const primaryPulseEndingRate: SkiaValue<number> = useComputedValue(() => {
    return interpolate(timeFrame.current, [0, 1], [0, 1]);
  }, [timeFrame]);

  const primaryPulseStartingRate: SkiaValue<number> = useComputedValue(() => {
    return interpolate(timeFrame.current, [0, 0.5, 1], [0, 0, 0.5]);
  }, [timeFrame]);

  const secondaryPulseStartingRate: SkiaValue<number> = useComputedValue(() => {
    return cycleCount === 1
      ? interpolate(timeFrame.current, [0, 0.5, 1], [0.5, 1, 1])
      : 1;
  }, [timeFrame, cycleCount]);

  return {
    pulsePath,
    secondaryPulseStartingRate,
    primaryPulseEndingRate,
    primaryPulseStartingRate,
  };
};

export default useHeartRate;
