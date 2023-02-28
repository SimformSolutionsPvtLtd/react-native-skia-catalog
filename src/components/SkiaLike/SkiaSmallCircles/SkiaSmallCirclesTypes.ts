import type {
  SkiaMutableValue,
  Transforms2d,
} from '@shopify/react-native-skia';

export interface itemObject {
  cx: number;
  cy: number;
  key: string;
  r: number;
}

export interface SkiaSmallCirclesProps {
  circleIndex: number;
  exploreCircleEvenScale: SkiaMutableValue<Transforms2d[]>;
  exploreCircleOddScale: SkiaMutableValue<Transforms2d[]>;
  item: itemObject;
  opacityParticlesCircle: SkiaMutableValue<number>;
  exploreCircleColor: SkiaMutableValue<Float32Array[]>;
}
