import type {
  SkiaMutableValue,
  SkiaValue,
  SkImage,
  Transforms2d,
} from '@shopify/react-native-skia';

export interface SimpleAnimatedCheckMark {
  size: number;
  circleOneColor: string;
  centerImageColor: string;
  centerImage: SkImage | null;
  value: SkiaValue<number>;
  circleOneScale: SkiaMutableValue<Transforms2d>;
}

export interface UseSimpleCheckMarkReturnType {
  centerImageScale: SkiaMutableValue<Transforms2d>;
  overlayCirclePosition: SkiaMutableValue<number>;
}
