import type { SkPath } from "@shopify/react-native-skia";

export enum HeartRateEnum {
  DEFAULT = "Default",
  FOLLOWUP = "FollowUp",
}
interface HeartRatePropsType {
  size: number;
  speed: number;
  color: string | string[];
  gridColor: string;
  pulseWidth: number;
  isGridVisible: boolean;
  heartRateType: "Default" | "FollowUp";
}

interface ChildComponentProps {
  canvasWidth: number;
  canvasVerticalMidPoint: number;
}

type OmitParentComponentProps =
  | "color"
  | "gridColor"
  | "isGridVisible"
  | "heartRateType";

interface PulsePointsParams {
  size: number;
  canvasVerticalMidPoint: number;
}

interface Coordinates {
  x: number;
  y: number;
}

interface PulsePathParams {
  path: SkPath;
  canvasWidth: number;
  pathPoints: Coordinates[];
  canvasVerticalMidPoint: number;
}

export type {
  HeartRatePropsType,
  OmitParentComponentProps,
  ChildComponentProps,
  Coordinates,
  PulsePathParams,
  PulsePointsParams,
};
