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
