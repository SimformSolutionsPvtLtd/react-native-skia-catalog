import type { TouchHandler } from '@shopify/react-native-skia';
import type { StyleProp, ViewStyle } from 'react-native';
import { Colors } from '../../theme';
import type { SkiaBallIndicatorPropsType } from './Ball';
import type { SkiaBarIndicatorPropsType } from './Bar';
import type { BaseIndicatorPropsType } from './Base';
import type { SkiaBreathingIndicatorPropsType } from './Breathing';
import type { SkiaCircleIndicatorPropsType } from './Circle';
import type { SkiaDotIndicatorPropsType } from './Dot';
import type { SkiaMaterialIndicatorPropsType } from './Material';
import type { SkiaPacmanIndicatorPropsType } from './Pacman';
import type { SkiaPulseIndicatorPropsType } from './Pulse';
import type { SkiaRotationCircleIndicatorPropsType } from './RotationCircle';
import type { SkiaRotationHoleIndicatorPropsType } from './RotationHole';
import type { SkiaSkypeIndicatorPropsType } from './Skype';
import type { SkiaUIActivityIndicatorPropsType } from './UIActivity';
import type { SkiaWaveIndicatorPropsType } from './Wave';

type OmitBaseProps =
  | 'animationEasing'
  | 'animating'
  | 'width'
  | 'height'
  | 'borderRadius'
  | 'opacity'
  | 'color'
  | 'progressDuration';

export enum IndicatorEnum {
  BALL = 'Ball',
  BAR = 'Bar',
  CIRCLE = 'Circle',
  DOT = 'Dot',
  MATERIAL = 'Material',
  PAC_MAN = 'Pacman',
  PULSE = 'Pulse',
  SKYPE = 'Skype',
  UI_ACTIVITY = 'UIActivity',
  WAVE = 'Wave',
  BREATHING = 'Breathing',
  ROTATION_CIRCLE = 'RotationCircle',
  ROTATION_HOLE = 'RotationHole',
}

type BallIndicatorType = {
  type: IndicatorEnum.BALL;
} & Omit<SkiaBallIndicatorPropsType, OmitBaseProps>;

type BarIndicatorType = {
  type: IndicatorEnum.BAR;
} & Omit<SkiaBarIndicatorPropsType, OmitBaseProps>;

type CircleIndicatorType = {
  type: IndicatorEnum.CIRCLE;
} & Omit<SkiaCircleIndicatorPropsType, OmitBaseProps>;

type DotIndicatorType = {
  type: IndicatorEnum.DOT;
} & Omit<SkiaDotIndicatorPropsType, OmitBaseProps>;

type MaterialIndicatorType = {
  type: IndicatorEnum.MATERIAL;
} & Omit<SkiaMaterialIndicatorPropsType, OmitBaseProps>;

type PacmanIndicatorType = {
  type: IndicatorEnum.PAC_MAN;
} & Omit<SkiaPacmanIndicatorPropsType, OmitBaseProps>;

type PulseIndicatorType = {
  type: IndicatorEnum.PULSE;
} & Omit<SkiaPulseIndicatorPropsType, OmitBaseProps>;

type SkypeIndicatorType = {
  type: IndicatorEnum.SKYPE;
} & Omit<SkiaSkypeIndicatorPropsType, OmitBaseProps>;

type UIActivityIndicatorType = {
  type: IndicatorEnum.UI_ACTIVITY;
} & Omit<SkiaUIActivityIndicatorPropsType, OmitBaseProps>;

type WaveIndicatorType = {
  type: IndicatorEnum.WAVE;
} & Omit<SkiaWaveIndicatorPropsType, OmitBaseProps>;

type BreathingIndicatorType = {
  type: IndicatorEnum.BREATHING;
} & Omit<SkiaBreathingIndicatorPropsType, OmitBaseProps>;

type RotationHoleIndicatorType = {
  type: IndicatorEnum.ROTATION_HOLE;
} & Omit<SkiaRotationHoleIndicatorPropsType, OmitBaseProps>;

type RotationCircleIndicatorType = {
  type: IndicatorEnum.ROTATION_CIRCLE;
} & Omit<SkiaRotationCircleIndicatorPropsType, OmitBaseProps>;

export type SkiaIndicatorPropsType = {
  style?: StyleProp<ViewStyle>;
  onTouch?: TouchHandler;
} & BaseIndicatorPropsType &
  (
    | BallIndicatorType
    | BarIndicatorType
    | CircleIndicatorType
    | DotIndicatorType
    | MaterialIndicatorType
    | PacmanIndicatorType
    | PulseIndicatorType
    | SkypeIndicatorType
    | UIActivityIndicatorType
    | WaveIndicatorType
    | BreathingIndicatorType
    | RotationHoleIndicatorType
    | RotationCircleIndicatorType
  );

export const defaultProps = {
  color: Colors.orange,
};
