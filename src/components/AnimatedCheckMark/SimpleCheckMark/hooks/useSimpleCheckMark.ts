import {
  interpolate,
  useComputedValue,
  useValue,
  type SkiaValue,
  type Transforms2d,
} from '@shopify/react-native-skia';
import type { UseSimpleCheckMarkReturnType } from '../SimpleCheckMarkType';

const useSimpleCheckMark = (
  size: number,
  value: SkiaValue<number>
): UseSimpleCheckMarkReturnType => {
  const centerImageScale = useValue<Transforms2d>([{ scale: 1 }]);
  const overlayCirclePosition = useValue<number>(0);

  useComputedValue(() => {
    centerImageScale.current = [
      { scale: interpolate(value.current, [0, 0.5, 1], [0, 1, 1]) },
    ];
    overlayCirclePosition.current = interpolate(
      value.current,
      [0, 0.8, 1],
      [size / 2, size + (size + size / 2), size + (size + size / 2)]
    );
  }, [value]);

  return { centerImageScale, overlayCirclePosition };
};

export default useSimpleCheckMark;
