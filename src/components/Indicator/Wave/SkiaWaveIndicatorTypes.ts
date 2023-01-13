import {
  Easing,
  type SkiaValue,
  type Transforms2d,
} from '@shopify/react-native-skia';
import { Colors } from '../../../theme';
import type {
  BaseIndicatorPropsType,
  OmitChildComponentProps,
  RenderComponentArgType,
} from '../Base';

export type SkiaWaveIndicatorPropsType = BaseIndicatorPropsType & {
  count?: number;
  waveFactor?: number;
  waveMode?: 'fill' | 'outline';
};

export const defaultProps = {
  color: Colors.orange,
  count: 4,
  waveFactor: 0.54,
  waveMode: 'fill',
  progressDuration: 1600,
  animationEasing: Easing.out(Easing.ease),
};

export type RenderIndicatorPropsType = RenderComponentArgType &
  Omit<SkiaWaveIndicatorPropsType, OmitChildComponentProps>;

export type RenderIndicatorHookReturnType = {
  cx: number;
  cy: number;
  r: number;
  fill: boolean;
  trackW?: number;
  transform: SkiaValue<Transforms2d>;
  opacityLocal: SkiaValue<number>;
};
