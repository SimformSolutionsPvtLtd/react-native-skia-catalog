import type {
  AnimatedProp,
  SkiaMutableValue,
  SkSVG,
  Transforms2d,
} from '@shopify/react-native-skia';

export interface SkiaHeartProps {
  opacityHeart: SkiaMutableValue<number>;
  heartColor: SkiaMutableValue<Float32Array>;
  scaleHeart: SkiaMutableValue<Transforms2d>;
  halfSize: number;
  svgHeart: AnimatedProp<SkSVG, any>;
  isLike: boolean;
}
