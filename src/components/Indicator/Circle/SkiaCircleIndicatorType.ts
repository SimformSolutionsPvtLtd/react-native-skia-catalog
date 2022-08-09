import { Colors } from '../../../theme';
import type {
  BaseIndicatorPropsType,
  OmitChildComponentProps,
  RenderComponentArgType,
} from '../Base';

export type SkiaCircleIndicatorPropsType = BaseIndicatorPropsType & {
  trackWidth?: number;
};

export const defaultProps = {
  color: Colors.orange,
  progressDuration: 90000,
};

export type RenderIndicatorPropsType = RenderComponentArgType &
  Omit<SkiaCircleIndicatorPropsType, OmitChildComponentProps>;
