import type {
  SkiaMutableValue,
  SkiaValue,
  SkImage,
  Transforms2d,
} from '@shopify/react-native-skia';
import type { ImageSourcePropType } from 'react-native';
import type { Range } from '../../types';

export enum CheckMarkEnum {
  SIMPLE = 'SIMPLE',
  FADE = 'FADE',
  CIRCULAR = 'CIRCULAR',
}

export interface GetExploreTranslateType {
  size: number;
  index: number;
}

export interface GetExplorePositionType {
  positionValue: number;
  size?: number;
  input?: Array<number>;
}

export interface UseAnimatedCheckMarkReturnType {
  circleOneScale: SkiaMutableValue<Transforms2d>;
  centerImage: SkImage | null;
  centerImageOpacity: SkiaMutableValue<number>;
  value: SkiaValue<number>;
}

export interface AnimatedCheckMarkTypes {
  size: Range<15, 151>;
  speed: number;
  circleOneColor: string;
  circleTwoColor: string;
  centerImageSource: ImageSourcePropType | string;
  centerImageColor: string;
  circleParticleColor: string;
  starParticleColor: string;
  checkMarkType: 'SIMPLE' | 'FADE' | 'CIRCULAR';
  showParticle: boolean;
  multiColor: boolean;
  borderColor: string;
  topBorderColor: string;
  rightBorderColor: string;
  bottomBorderColor: string;
  leftBorderColor: string;
}
