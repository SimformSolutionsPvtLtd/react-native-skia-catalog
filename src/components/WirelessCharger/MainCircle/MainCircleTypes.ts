import type {
  AnimatedProp,
  SkiaValue,
  Transforms2d,
} from "@shopify/react-native-skia";
import type { Range } from "../../../types";

export interface MainCircleProps {
  size: Range<150, 351>;
  halfSize: number;
  wifiWaveColor: string;
  thunderColor: string;
  circleAnimation: AnimatedProp<Transforms2d | undefined, any>;
  signalOpacity: SkiaValue<number>;
  outerSignalOpacity: SkiaValue<number>;
}
