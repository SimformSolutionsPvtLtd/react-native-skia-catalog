import {
  interpolate,
  useComputedValue,
  useTiming,
  type Transforms2d,
} from '@shopify/react-native-skia';
import type {
  UseScannerOutlinePropsType,
  UseScannerOutlineReturnType,
} from '../ScannerOutlineTypes';

const useScannerOutline = ({
  stopZooming,
  initialZoomScale,
  zoomingDelay,
  height,
  borderWidth,
}: UseScannerOutlinePropsType): UseScannerOutlineReturnType => {
  const maskedSquareDimension: number = height - borderWidth * 2;
  const maskedLineWidth: number = height / 1.5;

  const zoomingValue = useTiming(
    {
      from: 0,
      to: 1,
      loop: true,
      yoyo: true,
    },
    {
      duration: zoomingDelay,
    }
  );

  const transform = useComputedValue<Transforms2d>(() => {
    return stopZooming
      ? []
      : [
          {
            scale: interpolate(
              zoomingValue.current,
              [0, 0.5, 1],
              [initialZoomScale, 1, initialZoomScale]
            ),
          },
        ];
  }, [zoomingValue]);

  return { transform, maskedSquareDimension, maskedLineWidth };
};

export default useScannerOutline;
