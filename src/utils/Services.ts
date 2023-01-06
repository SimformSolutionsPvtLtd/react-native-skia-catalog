import {
  interpolate,
  interpolateColors,
  SkPath,
  SkPoint,
  vec,
} from '@shopify/react-native-skia';
import type {
  PulsePathParams,
  PulsePointsParams,
} from '../components/HeartRate/HeartRateTypes';
import type {
  Coordinates,
  CoordinatesOfCubicTo,
  CoordinatesOfThunder,
} from '../types';

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

const getStarPoints = (size: number): Array<Coordinates> => [
  { x: size * 0.2046, y: size * 0.1089 },
  { x: size * 0.321915, y: size * 0.114015 },
  { x: size * 0.2211, y: size * 0.1815 },
  { x: size * 0.258687, y: size * 0.298485 },
  { x: size * 0.165, y: size * 0.2343 },
  { x: size * 0.071313, y: size * 0.298485 },
  { x: size * 0.1056, y: size * 0.1815 },
  { x: size * 0.008085, y: size * 0.114015 },
  { x: size * 0.1254, y: size * 0.1122 },
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

const getCubicToPath = (
  path: SkPath,
  pathPoints: Array<CoordinatesOfCubicTo>
): SkPath => {
  for (let i = 0; i < pathPoints.length; i++) {
    path.cubicTo(
      pathPoints[i].cpx1,
      pathPoints[i].cpy1,
      pathPoints[i].cpx2,
      pathPoints[i].cpy2,
      pathPoints[i].x,
      pathPoints[i].y
    );
  }
  return path;
};

const getSkiaChargingThunderPoints = (size: number) => [
  { x: size * 0.392449333, y: size * 0.645940667 },
  {
    cpx1: size * 0.39061333,
    cpy1: size * 0.65503733,
    cpx2: size * 0.39108133,
    cpy2: size * 0.65852933,
    x: size * 0.39352933,
    y: size * 0.66038333,
  },
  {
    cpx1: size * 0.39448333,
    cpy1: size * 0.661121333,
    cpx2: size * 0.39567133,
    cpy2: size * 0.66151733,
    x: size * 0.396877333,
    y: size * 0.66151733,
  },
  { x: size * 0.48559933, y: size * 0.66151733 },
  { x: size * 0.46527733, y: size * 0.77525933 },
  {
    cpx1: size * 0.46479133,
    cpy1: size * 0.77790533,
    cpx2: size * 0.4698886667,
    cpy2: size * 0.777092,
    x: size * 0.4725346667,
    y: size * 0.77756,
  },
  {
    cpx1: size * 0.47100133,
    cpy1: size * 0.78121733,
    cpx2: size * 0.47281933,
    cpy2: size * 0.78049733,
    x: size * 0.47393533,
    y: size * 0.77902133,
  },
  { x: size * 0.60621733, y: size * 0.60238733 },
  {
    cpx1: size * 0.6080533,
    cpy1: size * 0.59995733,
    cpx2: size * 0.60756733,
    cpy2: size * 0.59646533,
    x: size * 0.60510133,
    y: size * 0.59462933,
  },
  {
    cpx1: size * 0.60414733,
    cpy1: size * 0.59392733,
    cpx2: size * 0.60297733,
    cpy2: size * 0.5935133,
    x: size * 0.60177133,
    y: size * 0.5935133,
  },
  { x: size * 0.51412933, y: size * 0.5935133 },
  { x: size * 0.53304733, y: size * 0.48313733 },
  {
    cpx1: size * 0.53351533,
    cpy1: size * 0.48049133,
    cpx2: size * 0.5317333,
    cpy2: size * 0.47797133,
    x: size * 0.5324206667,
    y: size * 0.474188,
  },
  {
    cpx1: size * 0.52881733,
    cpy1: size * 0.47748533,
    cpx2: size * 0.52852933,
    cpy2: size * 0.47744933,
    x: size * 0.52825933,
    y: size * 0.47744933,
  },
  {
    cpx1: size * 0.52676533,
    cpy1: size * 0.47744933,
    cpx2: size * 0.5253433,
    cpy2: size * 0.47815133,
    x: size * 0.52440733,
    y: size * 0.47937533,
  },
];

const getSkiaChargingThunderPath = (
  path: SkPath,
  pathPoints: Array<CoordinatesOfThunder>
) => {
  for (let i = 0; i < pathPoints.length; i++) {
    if ([0, 3, 4, 7, 10, 11].includes(i)) {
      path.lineTo(pathPoints[i].x, pathPoints[i].y);
    } else {
      path.cubicTo(
        pathPoints[i].cpx1 ?? 0,
        pathPoints[i].cpy1 ?? 0,
        pathPoints[i].cpx2 ?? 0,
        pathPoints[i].cpy2 ?? 0,
        pathPoints[i].x,
        pathPoints[i].y
      );
    }
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
  getThunderPoints,
  getStarPoints,
  getLineToPath,
  getCubicToPath,
  getSkiaChargingThunderPoints,
  getSkiaChargingThunderPath,
};
