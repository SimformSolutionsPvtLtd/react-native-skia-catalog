import type { SkiaValue } from '@shopify/react-native-skia';

export interface CircularButtonPropsType {
  pulseDisable: boolean;
  size: number;
  circularPulse: SkiaValue<number>;
  color: string;
  pulseOpacity: number;
  canvasCentre: number;
}
