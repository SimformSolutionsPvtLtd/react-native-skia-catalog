import type {
  SkiaValue,
  SkImage,
  Transforms2d,
} from "@shopify/react-native-skia";
import type { ImageSourcePropType } from "react-native";
import type { Range } from "../../types";

interface UseAnimatedScannerReturnType {
  verticalTransform: SkiaValue<Transforms2d>;
  strokeStartPoint: number;
  medianHeight: number;
  image: SkImage | null;
  padding: number;
  imageDimension: number;
  imageStartPosition: number;
}

interface AnimatedScannerPropTypes {
  stopZooming: boolean;
  initialZoomScale: number;
  height: Range<100, 341>;
  zoomingDelay: number;
  borderColor: string;
  strokeColor: string;
  strokeDelay: number;
  strokeWidth: number;
  borderRadius: number;
  borderWidth: number;
  imageSource: ImageSourcePropType | string;
}

export type { AnimatedScannerPropTypes, UseAnimatedScannerReturnType };
