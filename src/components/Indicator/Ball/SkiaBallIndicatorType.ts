import { Colors } from '../../../theme';
import type {
  BaseIndicatorPropsType,
  OmitChildComponentProps,
  RenderComponentArgType,
} from '../Base';

export type SkiaBallIndicatorPropsType = BaseIndicatorPropsType & {
  count?: number;
};

export const defaultProps = {
  color: Colors.orange,
  count: 8,
  progressDuration: 1200,
};

export type RenderIndicatorPropsType = RenderComponentArgType &
  Omit<SkiaBallIndicatorPropsType, OmitChildComponentProps>;
