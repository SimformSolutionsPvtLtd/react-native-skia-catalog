import {
  interpolate,
  useComputedValue,
  useTiming,
} from '@shopify/react-native-skia';
import type { UseWirelessChargerProps } from '../WirelessChargerTypes';

const useWirelessCharger = ({ size }: UseWirelessChargerProps) => {
  const exploreRadiusOfInnerCircle = -size * 0.386;
  const exploreRadiusOfOuterCircle = -size * 0.454;

  const offset = useTiming({ from: 0, to: 1, loop: true }, { duration: 12000 });
  const outerOffset = useTiming(
    { from: 0, to: 1, loop: true },
    { duration: 8000 }
  );
  const circleOffset = useTiming(
    { from: 0, to: 1, loop: true },
    { duration: 2500 }
  );

  const signalOffset = useTiming(
    { from: 0, to: 1, loop: true },
    { duration: 1000 }
  );

  const signalOpacity = useComputedValue(() => {
    return interpolate(signalOffset.current, [0, 0.2, 0.5, 1], [0, 1, 0, 1]);
  }, [signalOffset]);

  const outerSignalOpacity = useComputedValue(() => {
    return interpolate(signalOffset.current, [0, 0.2, 0.5, 1], [0, 0, 1, 0]);
  }, [signalOffset]);

  const innerSmallCircleAnimation = useComputedValue(() => {
    return [
      {
        rotate: interpolate(offset.current, [0, 1], [0, 2 * Math.PI]),
      },
    ];
  }, [offset]);

  const outerSmallCircleAnimation = useComputedValue(() => {
    return [
      {
        rotate: interpolate(outerOffset.current, [0, 1], [0, 2 * Math.PI]),
      },
    ];
  }, [outerOffset]);

  const circleAnimation = useComputedValue(() => {
    return [
      {
        rotate: interpolate(
          circleOffset.current,
          [0, 0.4, 0.5, 1],
          [0, 0, Math.PI / 25, 0]
        ),
      },
    ];
  }, [outerOffset]);

  return {
    innerSmallCircleAnimation,
    outerSmallCircleAnimation,
    circleAnimation,
    signalOpacity,
    outerSignalOpacity,
    exploreRadiusOfInnerCircle,
    exploreRadiusOfOuterCircle,
  };
};

export default useWirelessCharger;
