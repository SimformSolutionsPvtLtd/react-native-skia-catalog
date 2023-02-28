import type { AnimatedProp, Transforms2d } from '@shopify/react-native-skia';

interface itemObject {
  cx: number;
  cy: number;
  key: string;
  r: number;
}

export interface OuterCirclesProps {
  halfSize: number;
  transformationValue: AnimatedProp<Transforms2d | undefined, any>;
  circleItem: itemObject;
  outerCircleColor: string;
  circleOpacity?: number;
}
