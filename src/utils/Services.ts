import {
  interpolate,
  SkPoint,
  vec,
  interpolateColors,
  SkPath,
} from "@shopify/react-native-skia";
import type {
  Coordinates,
  PulsePathParams,
  PulsePointsParams,
} from "../components/HeartRate/HeartRateTypes";

const setColors = (value: number, colors: string[], input?: number[]) =>
  interpolateColors(value, input ?? [0, 1], colors);

const getSizeWithinRange = (
  lowerRange: number,
  higherRange: number,
  size: number
): number => {
  const setSizeInRage = size < lowerRange ? lowerRange : higherRange;

  return size >= lowerRange && size <= higherRange ? size : setSizeInRage;
};

const getInterPolateValue = ({
  value,
  size,
  inputRange,
  outputRange,
}: {
  value: number;
  size: number;
  inputRange: number[];
  outputRange: number[];
}): number => {
  return size * interpolate(value, inputRange, outputRange);
};

const getLineCoordinate = ({
  value,
  lineHeight,
  lineMovingRate,
  xCoordinate,
  yCoordinate,
  transformationInputRange,
  transformationOutputRange,
  movementInputRange,
  movementOutputRange,
}: {
  value: number;
  lineHeight: number;
  lineMovingRate: number;
  xCoordinate: number;
  yCoordinate: number;
  transformationInputRange: number[];
  transformationOutputRange: number[];
  movementInputRange: number[];
  movementOutputRange: number[];
}): SkPoint => {
  const lineTransformation: number = getInterPolateValue({
    value,
    size: lineHeight,
    inputRange: transformationInputRange,
    outputRange: transformationOutputRange,
  });

  const lineMovement: number = getInterPolateValue({
    value,
    size: lineMovingRate,
    inputRange: movementInputRange,
    outputRange: movementOutputRange,
  });

  return vec(xCoordinate, yCoordinate - lineTransformation - lineMovement);
};

const getCircleCoordinate = ({
  value,
  xCoordinate,
  yCoordinate,
  inputRange,
  outputRange,
}: {
  value: number;
  xCoordinate: number;
  yCoordinate: number;
  inputRange: number[];
  outputRange: number[];
}): SkPoint => {
  const transformationValue: number = getInterPolateValue({
    value,
    inputRange,
    outputRange,
    size: yCoordinate,
  });

  return vec(xCoordinate, yCoordinate - transformationValue);
};

const getDefaultPulsePoints = ({
  size,
  canvasVerticalMidPoint,
}: PulsePointsParams): Coordinates[] => [
  { x: size * 0.73, y: canvasVerticalMidPoint },
  { x: size * 0.78, y: size * 0.14 },
  { x: size * 0.83, y: size * 0.825 },
  { x: size * 0.88, y: size * 0.375 },
  { x: size * 0.93, y: size * 0.64 },
  { x: size * 0.98, y: size * 0.5 },
  { x: size * 1.03, y: canvasVerticalMidPoint },
];

const getFollowUpPulsePoints = ({
  size,
  canvasVerticalMidPoint,
}: PulsePointsParams): Coordinates[] => [
  { x: size * 0.25, y: canvasVerticalMidPoint },
  { x: size * 0.325, y: size * 0.3 },
  { x: size * 0.4, y: canvasVerticalMidPoint },
  { x: size * 0.5, y: canvasVerticalMidPoint },
  { x: size * 0.575, y: size * 0.125 },
  { x: size * 0.675, y: size * 0.85 },
  { x: size * 0.725, y: canvasVerticalMidPoint },
  { x: size * 0.875, y: canvasVerticalMidPoint },
  { x: size * 0.9375, y: size * 0.275 },
  { x: size, y: canvasVerticalMidPoint },
  { x: size * 1.225, y: canvasVerticalMidPoint },
  { x: size * 1.275, y: size * 0.85 },
  { x: size * 1.325, y: canvasVerticalMidPoint },
];

const getPulsePath = ({
  path,
  canvasWidth,
  pathPoints,
  canvasVerticalMidPoint,
}: PulsePathParams): SkPath => {
  path.moveTo(0, canvasVerticalMidPoint); // Pulse Starting Point

  for (let i = 0; i < pathPoints.length; i++) {
    path.lineTo(pathPoints[i].x, pathPoints[i].y); // Pulse InterMediate Point
  }

  path.lineTo(canvasWidth, canvasVerticalMidPoint); // Pulse Ending Point

  return path;
};

const getThunderPoints = (size: number) => [
  { x: size * 0.460754, y: size * 0.313165 },
  { x: size * 0.401508, y: size * 0.490902 },
  { x: size * 0.52, y: size * 0.490902 },
  { x: size * 0.460754, y: size * 0.698262 },
  { x: size * 0.638491, y: size * 0.431657 },
  { x: size * 0.52, y: size * 0.431657 },
  { x: size * 0.564434, y: size * 0.313165 },
];

const getLineToPath = (
  path: SkPath,
  pathPoints: Array<Coordinates>
): SkPath => {
  for (let i = 0; i < pathPoints.length; i++) {
    path.lineTo(pathPoints[i].x, pathPoints[i].y);
  }
  return path;
};

export {
  getSizeWithinRange,
  getLineCoordinate,
  getCircleCoordinate,
  getInterPolateValue,
  setColors,
  getPulsePath,
  getDefaultPulsePoints,
  getFollowUpPulsePoints,
  getLineToPath,
  getThunderPoints,
};
