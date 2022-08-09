import { Colors } from '../../../theme';
import type {
  BaseIndicatorPropsType,
  OmitChildComponentProps,
  RenderComponentArgType,
} from '../Base';

export type SkiaUIActivityIndicatorPropsType = BaseIndicatorPropsType & {
  count?: number;
  trackWidth?: number;
};

export const defaultProps = {
  color: Colors.orange,
  count: 12,
  trackWidth: 4,
  progressDuration: 1200,
};

export type RenderIndicatorPropsType = RenderComponentArgType &
  Omit<SkiaUIActivityIndicatorPropsType, OmitChildComponentProps>;

export type RectanglePropsType = {
  x: number;
  y: number;
  x1: number;
  y1: number;
};
