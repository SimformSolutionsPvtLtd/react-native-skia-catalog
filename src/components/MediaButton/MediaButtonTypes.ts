import type {
  SkiaValue,
  SkImage,
  TouchHandler,
} from "@shopify/react-native-skia";
import type { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import type { Range } from "../../types";

export enum ButtonEnum {
  CIRCLE = "CIRCLE",
  RECTANGLE = "RECTANGLE",
  SQUARE = "SQUARE",
}

interface RotateType {
  rotate: number;
}
interface ScaleType {
  scale: number;
}

interface MediaButtonPropsType {
  size: Range<30, 201>;
  color: string;
  speed: number;
  pulseDisable: boolean;
  pulseSpeed: number;
  buttonType: "CIRCLE" | "RECTANGLE" | "SQUARE";
  style: StyleProp<ViewStyle>;
  onPlayPress: () => void;
  onPausePress: () => void;
  pulseStart: number;
  pulseEnd: number;
  playImageSource: ImageSourcePropType | string;
  pauseImageSource: ImageSourcePropType | string;
}

interface MediaButtonReturnType {
  playButton: SkImage | null;
  circularPulse: SkiaValue<number>;
  isPlayButton: boolean;
  pauseButton: SkImage | null;
  raiseOpacity: SkiaValue<number>;
  reduceOpacity: SkiaValue<number>;
  rotateButton: SkiaValue<RotateType[]>;
  scaleButton: SkiaValue<ScaleType[]>;
  squarePulse: SkiaValue<ScaleType[]>;
  touchHandler: TouchHandler;
  canvasSize: number;
  pulseOpacity: number;
  canvasCentre: number;
  buttonStartingPoint: number;
  canvasStyle: StyleProp<ViewStyle>;
}

interface MediaButtonHookParamsType {
  pulseSpeed: number;
  size: number;
  speed: number;
  onPlayPress: () => void;
  onPausePress: () => void;
  pulseStart: number;
  pulseEnd: number;
  playImageSource: ImageSourcePropType | string;
  pauseImageSource: ImageSourcePropType | string;
  style: StyleProp<ViewStyle>;
}

export type {
  MediaButtonPropsType,
  MediaButtonReturnType,
  MediaButtonHookParamsType,
  RotateType,
  ScaleType,
};
