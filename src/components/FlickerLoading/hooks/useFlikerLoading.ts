import { Easing, mix, useComputedValue, useLoop, useValue } from '@shopify/react-native-skia';

const useFlikerLoading = (r: number) => {
  const animatedZIndex = useValue(1);
  const progress = useLoop({
    duration: 3000,
    easing: Easing.inOut(Easing.ease),
  });

  const transform = useComputedValue(
    () => [{
      translateX: mix(progress.current, r, 3 * r + 5),
    }],
    [progress]
  );

  const opacityForReplicatedCircle = useComputedValue(
    () => {
      // console.log(Number(progress.current).toFixed(1).localeCompare(1.0) === 1, ' num')
      // if (Number(progress.current).toFixed(1).localeCompare(1.0) === 1) {
      //   animatedZIndex.current = 1
      // }else{
      //   animatedZIndex.current = 0
      // }
      return mix(progress.current, 1, 0)
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
    opacityForReplicatedCircle,
    animatedZIndex
  }
}

export default useFlikerLoading;
