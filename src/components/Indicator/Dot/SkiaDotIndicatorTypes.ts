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

export type SkiaDotIndicatorPropsType = BaseIndicatorPropsType & {
  count?: number;
  reverse?: boolean;
};

export const defaultProps = {
  color: Colors.orange,
  count: 3,
  reverse: false,
  progressDuration: 1200,
  animationEasing: Easing.inOut(Easing.ease),
};

export type RenderIndicatorPropsType = RenderComponentArgType &
  Omit<SkiaDotIndicatorPropsType, OmitChildComponentProps>;

export type RenderIndicatorHookReturnType = {
  cx: number;
  cy: number;
  r: number;
  transform: SkiaValue<Transforms2d>;
  opacityLocal: SkiaValue<number>;
};
