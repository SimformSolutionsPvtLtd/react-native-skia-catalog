import { mix, useComputedValue, useTiming, useValue } from '@shopify/react-native-skia';

const useFlikerLoading = (r: number) => {
  const animatedZIndex = useValue(1);
  const progress = useTiming({
    loop: true, from: 0, to: 1, yoyo: true
  });

  console.log(progress.current,' progress')
  const transform = useComputedValue(
    () => [{
      translateX: mix(progress.current, r, 3 * r + 5),
    }],
    [progress]
  );

  useComputedValue(
    () => {
      if (Math.round(progress.current) === 1.0) {
        animatedZIndex.current = 1
      }else{
        animatedZIndex.current = 0
      }
    },
    [progress]
  );
  const mainCircleValues = useComputedValue(
    () => [{
      translateX: mix(progress.current, 3 * r + 5, r),
    }],
    [progress]
  );  
 
  console.log(animatedZIndex,' animatedZIndex')
  return {
    transform,
    mainCircleValues,
    animatedZIndex
  }
}

export default useFlikerLoading;
