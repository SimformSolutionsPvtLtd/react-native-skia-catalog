import { Easing } from '@shopify/react-native-skia';
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

export type CirclePropsType = {
  cx: number;
  cy: number;
  r: number;
  borderWidth: number;
};
