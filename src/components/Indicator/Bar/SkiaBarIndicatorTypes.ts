import type {
  SkiaValue,
  SkPaint,
  Transforms2d,
} from "@shopify/react-native-skia";
import type React from "react";
import { Colors } from "../../../theme";
import type {
  BaseIndicatorPropsType,
  OmitChildComponentProps,
  RenderComponentArgType,
} from "../Base";

export type SkiaBarIndicatorPropsType = BaseIndicatorPropsType & {
  count?: number;
};

export const defaultProps = {
  color: Colors.orange,
  count: 3,
  progressDuration: 1200,
};

export type RenderIndicatorPropsType = RenderComponentArgType &
  Omit<SkiaBarIndicatorPropsType, OmitChildComponentProps>;

export type RectanglePropsType = {
  x: number;
  y: number;
  h: number;
  w: number;
  gap: number;
  r: number;
};

export type RenderIndicatorHookReturnType = {
  x: number;
  y: number;
  w: number;
  h: number;
  r: number;
  gap: number;
  paint: React.RefObject<SkPaint>;
  opacityLocal: SkiaValue<number>;
  transformTop: SkiaValue<Transforms2d>;
  transformBottom: SkiaValue<Transforms2d>;
};
