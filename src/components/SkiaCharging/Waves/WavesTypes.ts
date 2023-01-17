import type {
  SkiaValue,
  SkPath,
  Transforms2d,
} from '@shopify/react-native-skia';

export interface WavesProps {
  size: number;
  waveColor: string;
  wavePath: SkPath;
  waveTransformForRight: SkiaValue<Transforms2d>;
  waveTransformForLeft: SkiaValue<Transforms2d>;
}
