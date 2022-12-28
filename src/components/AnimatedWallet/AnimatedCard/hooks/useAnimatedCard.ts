import {
  interpolate,
  Transforms2d,
  useComputedValue,
  useTiming,
} from '@shopify/react-native-skia';
import type { UseAnimatedCardProps } from '../AnimatedCardTypes';

const useAnimatedCard = ({ cardNumber = 0 }: UseAnimatedCardProps) => {
  const offsets = useTiming({ from: 0, to: 2, loop: true }, { duration: 1500 });

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        rotate: interpolate(
          offsets.current,
          [0, 0.3 * cardNumber, 0.7, 1, 1 + 0.1 * cardNumber, 1.7, 2],
          [
            0,
            0,
            (-Math.PI * 15 * (cardNumber + 1)) / 180,
            (-Math.PI * 15 * (cardNumber + 1)) / 180,
            (-Math.PI * 15 * (cardNumber + 1)) / 180,
            0,
            0,
          ]
        ),
      },
    ];
  }, [offsets]);

  return {
    transform,
  };
};

export default useAnimatedCard;
