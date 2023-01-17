import type { SkiaValue, Transforms2d } from '@shopify/react-native-skia';

interface ScannerOutlinePropsType {
  stopZooming: boolean;
  medianHeight: number;
  height: number;
  borderRadius: number;
  borderWidth: number;
  initialZoomScale: number;
  zoomingDelay: number;
  borderColor: string;
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
