import type { SkiaValue, Transforms2d } from '@shopify/react-native-skia';
import { Colors } from '../../../theme';
import type {
  BaseIndicatorPropsType,
  OmitChildComponentProps,
  RenderComponentArgType,
} from '../Base';

export type SkiaMaterialIndicatorPropsType = BaseIndicatorPropsType & {
  trackWidth?: number;
  direction?: 'clockwise' | 'counter-clockwise';
};

export const defaultProps = {
  color: Colors.orange,
  direction: 'counter-clockwise',
  progressDuration: 40000,
};

export type RenderIndicatorPropsType = RenderComponentArgType &
  Omit<SkiaMaterialIndicatorPropsType, OmitChildComponentProps>;

export type RenderIndicatorHookReturnType = {
  cx: number;
  cy: number;
  r: number;
  trackW?: number;
  path: SkiaValue<string>;
  transform: SkiaValue<Transforms2d>;
  opacityLocal: SkiaValue<number>;
};
