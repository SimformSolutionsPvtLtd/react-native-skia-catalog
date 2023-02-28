import {
  interpolate,
  Skia,
  useComputedValue,
  useTiming,
  type SkiaValue,
  type SkPath,
} from '@shopify/react-native-skia';
import { getDefaultPulsePoints, getPulsePath } from '../../../../utils';
import type {
  HeartRateHookParams,
  HeartRateReturnType,
} from '../SimpleHeartRateTypes';

const useHeartRate = ({
  size,
  speed,
  canvasWidth,
  canvasVerticalMidPoint,
}: HeartRateHookParams): HeartRateReturnType => {
  const path: SkPath = Skia.Path.Make();
  const timeFrame: SkiaValue<number> = useTiming(
    { from: 0, to: 1, loop: true },
    { duration: speed }
  );

  const pulseRate: SkiaValue<number> = useComputedValue(() => {
    return interpolate(timeFrame.current, [0, 0.35, 0.65, 1], [0, 0.2, 0.8, 1]);
  }, [timeFrame]);

  const pulsePath: SkPath = getPulsePath({
    path,
    canvasWidth,
    canvasVerticalMidPoint,
    pathPoints: getDefaultPulsePoints({ size, canvasVerticalMidPoint }),
  }); //Draws pulse

  return {
    pulseRate,
    pulsePath,
  };
};

export default useHeartRate;
