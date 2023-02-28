import type { SkiaValue, SkPath } from '@shopify/react-native-skia';
import type {
  ChildComponentProps,
  HeartRatePropsType,
  OmitParentComponentProps,
} from '../HeartRateTypes';

type FollowUpHeartRatePropsType = ChildComponentProps &
  Omit<HeartRatePropsType, OmitParentComponentProps>;

type HeartRateHookParams = Omit<FollowUpHeartRatePropsType, 'pulseWidth'>;

type HeartRateReturnType = {
  pulsePath: SkPath;
  primaryPulseEndingRate: SkiaValue<number>;
  secondaryPulseStartingRate: SkiaValue<number>;
  primaryPulseStartingRate: SkiaValue<number>;
};

export type {
  FollowUpHeartRatePropsType,
  HeartRateHookParams,
  HeartRateReturnType,
};
