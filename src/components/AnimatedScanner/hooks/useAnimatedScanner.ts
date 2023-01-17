import {
  interpolate,
  useComputedValue,
  useImage,
  useTiming,
  type DataSourceParam,
  type SkImage,
  type Transforms2d,
} from '@shopify/react-native-skia';
import { Images } from '../../../assets';
import type {
  AnimatedScannerPropTypes,
  UseAnimatedScannerReturnType,
} from '../AnimatedScannerTypes';

const useAnimatedScanner = ({
  strokeDelay = 1000,
  strokeWidth = 170,
  height = 220,
  imageSource = Images.pdf,
}: Partial<AnimatedScannerPropTypes>): UseAnimatedScannerReturnType => {
  const medianHeight: number = height / 2;
  const strokeStartPoint: number =
    strokeWidth < height ? (height - strokeWidth) / 2 : 0;
  const image: SkImage | null = useImage(imageSource as DataSourceParam);
  const padding: number = height / 8;
  const imageDimension: number = height - 3 * padding;
  const imageStartPosition: number = 1.5 * padding;

  const transformValue = useTiming(
    {
      from: 0,
      to: 1,
      loop: true,
      yoyo: true,
    },
    {
      duration: strokeDelay,
    }
  );

  const verticalTransform = useComputedValue<Transforms2d>(() => {
    return [
      {
        translateY: interpolate(
          transformValue.current,
          [0, 1],
          [0, height - 2 * padding]
        ),
      },
    ];
  }, [transformValue]);

  return {
    verticalTransform,
    strokeStartPoint,
    medianHeight,
    image,
    padding,
    imageDimension,
    imageStartPosition,
  };
};

export default useAnimatedScanner;
