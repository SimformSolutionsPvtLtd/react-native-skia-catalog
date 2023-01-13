import type {
  SkiaValue,
  SkSVG,
  Transforms2d,
} from "@shopify/react-native-skia";

export interface WavesProps {
  size: number;
  waveColor: string;
  wavePath: SkSVG | null;
  waveTransformForRight: SkiaValue<Transforms2d>;
  waveTransformForLeft: SkiaValue<Transforms2d>;
}
