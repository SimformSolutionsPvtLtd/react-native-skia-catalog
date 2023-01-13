import type {
  SkiaValue,
  SkSVG,
  Transforms2d,
} from "@shopify/react-native-skia";

export interface WireProps {
  size: number;
  curvePathSvg: SkSVG | null;
  wireTransform: SkiaValue<Transforms2d>;
  adapterColor: string;
}
