import { mix, useClockValue, useSharedValueEffect, useValue } from '@shopify/react-native-skia';
import { useEffect, useRef } from 'react';
import { useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const useFlikerLoading = (r) => {
  const animatedX = useValue(r);
  const test= useRef(1)
  const animatedXForMaskedView = useValue(3*r);
  const animatedZIndex = useValue(-1);
  const progress = useSharedValue(0);
  const skiaProgress = useValue(0)
  const clock = useClockValue();
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 3000 }), -1, true);
  }, [progress]);
 
  useSharedValueEffect(() => {
    animatedX.current = mix(progress.value, r, 3 * r + 5);
    animatedXForMaskedView.current = mix(progress.value, 3 * r + 5, r);
    if (Number(progress.value) === 1.0 || (Number(progress.value) === 0.0)) {
      console.log(progress.value,progress.value , 1.0,' progress.value?.toFixed(1)')
      test.current = test.current === 0 ? 1 : 0;
      animatedZIndex.current =  mix(test.current, 1, -1)
    }   
  }, progress); // you can pass other shared values as extra parameters
 
  return {
    animatedX,
    animatedXForMaskedView,
    animatedZIndex
  }
}

export default useFlikerLoading;
