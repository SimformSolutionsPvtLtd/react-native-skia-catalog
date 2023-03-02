import {
  useComputedValue,
  SkiaMutableValue,
  SkiaValue,
} from '@shopify/react-native-skia';
import { makeArcPath } from '../../Indicator/Material/SkiaMaterialIndicatorUtils';

const useGetArcPath = (
  cx: SkiaMutableValue<number>,
  cy: SkiaMutableValue<number>,
  startAngle: SkiaMutableValue<number>,
  endAngle: SkiaMutableValue<number>,
  r: SkiaMutableValue<number>
): SkiaValue<string> => {
  return useComputedValue(() => {
    return makeArcPath(
      cx.current,
      cy.current,
      startAngle.current,
      endAngle.current,
      r.current,
      'clockwise'
    );
  }, [startAngle, endAngle, cx, cy]);
};

export default useGetArcPath;
