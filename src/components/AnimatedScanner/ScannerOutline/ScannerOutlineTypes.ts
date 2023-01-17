import type { SkiaValue, Transforms2d } from '@shopify/react-native-skia';
import type { AnimatedScannerPropTypes } from '../AnimatedScannerTypes';

interface ScannerOutlinePropsType extends Partial<AnimatedScannerPropTypes> {
  medianHeight: number;
}
interface UseScannerOutlinePropsType {
  stopZooming: boolean;
  initialZoomScale: number;
  zoomingDelay: number;
  height: number;
  borderWidth: number;
}

interface UseScannerOutlineReturnType {
  transform: SkiaValue<Transforms2d>;
  maskedSquareDimension: number;
  maskedLineWidth: number;
}

export type {
  ScannerOutlinePropsType,
  UseScannerOutlinePropsType,
  UseScannerOutlineReturnType,
};
