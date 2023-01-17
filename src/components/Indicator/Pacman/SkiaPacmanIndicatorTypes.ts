import type {
  SkiaValue,
  SkPath,
  Transforms2d,
} from '@shopify/react-native-skia';
import { Colors } from '../../../theme';
import type {
  BaseIndicatorPropsType,
  OmitChildComponentProps,
  RenderComponentArgType,
} from '../Base';

export type SkiaPacmanIndicatorPropsType = BaseIndicatorPropsType;

export const defaultProps = {
  color: Colors.orange,
  progressDuration: 600,
};

export type RenderIndicatorPropsType = RenderComponentArgType &
  Omit<SkiaPacmanIndicatorPropsType, OmitChildComponentProps>;

export type RenderIndicatorHookReturnType = {
  r: number;
  path: SkiaValue<SkPath>;
  opacityLocal: SkiaValue<number>;
};

export type RenderBlockHookReturnType = {
  cx: number;
  cy: number;
  r: number;
  transform: SkiaValue<Transforms2d>;
  opacityLocal: SkiaValue<number | undefined>;
};
