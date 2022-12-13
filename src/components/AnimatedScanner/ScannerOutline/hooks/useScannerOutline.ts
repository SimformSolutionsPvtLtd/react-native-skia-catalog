import {
  interpolate,
  type Transforms2d,
  useComputedValue,
  useTiming,
} from "@shopify/react-native-skia";
import type {
  UseScannerOutlinePropsType,
  UseScannerOutlineReturnType,
} from "../ScannerOutlineTypes";

const useScannerOutline = ({
  stopZooming = false,
  initialZoomScale = 0.9,
  zoomingDelay = 2000,
  height = 220,
  borderWidth = 5,
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
