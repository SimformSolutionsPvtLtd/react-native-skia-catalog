import type { Color } from '@shopify/react-native-skia';
import type { Range } from '../../types';

export interface AnimatedWalletProps {
  size: Range<50, 271>;
  primaryColor: Color;
  secondaryColor: Color;
  numberOfCards?: Range<1, 4>;
}
