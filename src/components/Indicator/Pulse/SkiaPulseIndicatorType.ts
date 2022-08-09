import { Easing } from '@shopify/react-native-skia';
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
