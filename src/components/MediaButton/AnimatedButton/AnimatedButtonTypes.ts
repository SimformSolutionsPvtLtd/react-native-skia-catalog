import type { SkiaValue, SkImage } from '@shopify/react-native-skia';
import type { RotateType, ScaleType } from '../MediaButtonTypes';

export interface AnimatedButtonPropsType {
  rotateButton: SkiaValue<RotateType[]>;
  size: number;
  playButton: SkImage | null;
  scaleButton: SkiaValue<ScaleType[]>;
  isPlayButton: boolean;
  reduceOpacity: SkiaValue<number>;
  raiseOpacity: SkiaValue<number>;
  pauseButton: SkImage | null;
  canvasCentre: number;
}
