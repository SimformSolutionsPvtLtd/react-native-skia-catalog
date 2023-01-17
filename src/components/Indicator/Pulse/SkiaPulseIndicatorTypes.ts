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

export type SkiaPulseIndicatorPropsType = BaseIndicatorPropsType;

export const defaultProps = {
  color: Colors.orange,
  animationEasing: Easing.out(Easing.ease),
  progressDuration: 1200,
};

export type RenderIndicatorPropsType = RenderComponentArgType &
  Omit<SkiaPulseIndicatorPropsType, OmitChildComponentProps>;

export type RenderIndicatorHookReturnType = {
  cx: number;
  cy: number;
  r: number;
  transform: SkiaValue<Transforms2d>;
  opacityLocal: SkiaValue<number>;
};
