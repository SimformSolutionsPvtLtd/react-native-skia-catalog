import type { SkiaValue, SkPath } from "@shopify/react-native-skia";
import type { Range } from "../../../types";

export interface WifiSignalsProps {
  size: Range<150, 351>;
  opacityOfWifiWave: SkiaValue<number>;
  wifiWaveColor: string;
  curvePath: SkPath;
}
