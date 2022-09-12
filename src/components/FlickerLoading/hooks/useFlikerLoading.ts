import { mix, useSharedValueEffect, useValue } from '@shopify/react-native-skia';
import { useEffect } from 'react';
import {useSharedValue, withRepeat, withTiming} from "react-native-reanimated";

const useFlikerLoading = (r) => {
  const animatedX = useValue(r);
  const animatedXForMaskedView = useValue(3*r);
  const animatedZIndex = useValue(-1);
  const progress = useSharedValue(0);
 
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 3000 }), -1, true);
  }, [progress]);
 
  useSharedValueEffect(() => {
    animatedX.current = mix(progress.value, r , 3 * r);
    animatedXForMaskedView.current = mix(progress.value, 3 * r, r);
    animatedZIndex.current=mix(progress.value, -1, 1)
  }, progress); // you can pass other shared values as extra parameters
 
  return {
    animatedX,
    animatedXForMaskedView,
    animatedZIndex
  }
}

export default useFlikerLoading;
