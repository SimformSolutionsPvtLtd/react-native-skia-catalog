import type { SkiaMutableValue, SkiaValue } from '@shopify/react-native-skia';

type numberOfArcsRange = 1 | 2 | 3 | 4;

type SkiaSignalWifiPropType = Partial<{
  size: number;
  color: string;
  numberOfArcs: numberOfArcsRange;
}>;

type UseSkiaSignalWifiReturnType = {
  squareSize: number;
  arcOne: SkiaValue<string>;
  arcOneWidth: SkiaMutableValue<number>;
  arcTwo: SkiaValue<string>;
  arcTwoWidth: SkiaMutableValue<number>;
  arcThree: SkiaValue<string>;
  arcThreeWidth: SkiaMutableValue<number>;
  arcFour: SkiaValue<string>;
  arcFourWidth: SkiaMutableValue<number>;
  displayArcTwo: boolean;
  displayArcThree: boolean;
  displayArcFour: boolean;
};

export type { SkiaSignalWifiPropType, UseSkiaSignalWifiReturnType };
