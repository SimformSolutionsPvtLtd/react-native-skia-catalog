import type {
  SkiaValue,
  SkImage,
  Transforms2d,
} from "@shopify/react-native-skia";
import type { ImageSourcePropType } from "react-native";
import type { Range } from "../../types";

export interface UseAnimatedScannerReturnType {
  verticalTransform: SkiaValue<Transforms2d>;
  strokeStartPoint: number;
  medianHeight: number;
  image: SkImage | null;
  padding: number;
  imageDimension: number;
  imageStartPosition: number;
}

export interface AnimatedScannerPropTypes {
  stopZooming: boolean;
  initialZoomScale: number;
  height: Range<100, 351>;
  zoomingDelay: number;
  borderColor: string;
  strokeColor: string;
  strokeDelay: number;
  strokeWidth: number;
  borderRadius: number;
  borderWidth: number;
  imageSource: ImageSourcePropType | string;
}

export interface UseAnimatedScannerProps {
  strokeDelay: number;
  strokeWidth: number;
  height: number;
  imageSource: string | ImageSourcePropType;
}
