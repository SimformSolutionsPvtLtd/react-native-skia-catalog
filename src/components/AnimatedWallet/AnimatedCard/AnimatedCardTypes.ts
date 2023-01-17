import type { Color } from '@shopify/react-native-skia';
import type { Range } from '../../../types';

export interface AnimatedCardProps {
  id: number;
  originX: number;
  originY: number;
  cardNumber: number;
  color: Color[];
  size: Range<50, 271>;
}

export interface UseAnimatedCardProps {
  cardNumber?: number;
}
