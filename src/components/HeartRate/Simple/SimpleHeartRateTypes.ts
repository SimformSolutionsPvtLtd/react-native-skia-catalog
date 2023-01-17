import type { SkiaValue, SkPath } from '@shopify/react-native-skia';
import type {
  ChildComponentProps,
  HeartRatePropsType,
  OmitParentComponentProps,
} from '../HeartRateTypes';

type SimpleHeartRatePropsType = ChildComponentProps &
  Omit<HeartRatePropsType, OmitParentComponentProps>;

type HeartRateHookParams = Omit<SimpleHeartRatePropsType, 'pulseWidth'>;

type HeartRateReturnType = {
  pulseRate: SkiaValue<number>;
  pulsePath: SkPath;
};

export type {
  HeartRateHookParams,
  SimpleHeartRatePropsType,
  HeartRateReturnType,
};
