import type { SkiaValue } from '@shopify/react-native-skia';
import type { ScaleType } from '../MediaButtonTypes';

export interface SquareButtonPropsType {
  size: number;
  color: string;
  pulseDisable: boolean;
  squarePulse: SkiaValue<ScaleType[]>;
  canvasSize: number;
  pulseOpacity: number;
  canvasCentre: number;
  buttonStartingPoint: number;
}
