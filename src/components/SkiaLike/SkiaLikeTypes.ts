import type {
  SkiaMutableValue,
  Transforms2d,
} from '@shopify/react-native-skia';
import type { Range } from '../../types';

export interface SkisLikeProps {
  size?: Range<40, 301>;
  onChangeValue?: (value: boolean) => void;
}

export interface getExploreCircleTranslateTypes {
  index: number;
  size: Range<40, 301>;
}

export interface getExploreCircleScaleProps {
  value: number;
  size?: Range<40, 301>;
  input?: number[];
}

export interface getExploreCircleColorProps {
  value: number;
  input?: number[];
}

export interface useSkiaLikeProps {
  size: Range<40, 301>;
  value: SkiaMutableValue<number>;
  isLike: boolean;
}

export interface GetLikeVariantOneConfigProps {
  part: number;
  opacityHeart: SkiaMutableValue<number>;
  opacityOuterCircle: SkiaMutableValue<number>;
  value: SkiaMutableValue<number>;
  opacityInnerCircle: SkiaMutableValue<number>;
  heartColor: SkiaMutableValue<Float32Array>;
}

export interface GetLikeVariantTwoConfigProps {
  part: number;
  radiusOfOuterCircle: SkiaMutableValue<number>;
  value: SkiaMutableValue<number>;
  halfSize: number;
  size: number;
  radiusOfInnerCircle: SkiaMutableValue<number>;
  circle1Color: SkiaMutableValue<Float32Array>;
  scaleHeart: SkiaMutableValue<Transforms2d>;
  opacityHeart: SkiaMutableValue<number>;
}

export interface GetLikeVariantThreeConfigProps {
  part: number;
  radiusOfInnerCircle: SkiaMutableValue<number>;
  halfSize: number;
  size: number;
  opacityInnerCircle: SkiaMutableValue<number>;
  value: SkiaMutableValue<number>;
  scaleHeart: SkiaMutableValue<Transforms2d>;
  opacityHeart: SkiaMutableValue<number>;
  opacityParticlesCircle: SkiaMutableValue<number>;
}

export interface GetLikeVariantFourConfigProps {
  part: number;
  exploreCircleColor: SkiaMutableValue<Float32Array[]>;
  value: SkiaMutableValue<number>;
  scaleHeart: SkiaMutableValue<Transforms2d>;
  opacityInnerCircle: SkiaMutableValue<number>;
  radiusOfOuterCircle: SkiaMutableValue<number>;
  exploreCircleEvenScale: SkiaMutableValue<Transforms2d[]>;
  size: Range<40, 301>;
  exploreCircleOddScale: SkiaMutableValue<Transforms2d[]>;
}
