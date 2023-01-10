import {
  interpolate,
  interpolateColors,
  SkPath,
  SkPoint,
  vec,
} from "@shopify/react-native-skia";
import type {
  PulsePathParams,
  PulsePointsParams,
} from "../components/HeartRate/HeartRateTypes";
import type {
  Coordinates,
  CoordinatesOfCubic,
  CoordinatesOfThunder,
} from "../types";

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
  path.moveTo(0, canvasVerticalMidPoint);

  for (let i = 0; i < pathPoints.length; i++) {
    path.lineTo(pathPoints[i].x, pathPoints[i].y);
  }

  path.lineTo(canvasWidth, canvasVerticalMidPoint);

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

const getCubicPath = (
  path: SkPath,
  pathPoints: Array<CoordinatesOfCubic>
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

const getWavePathPoints = (size: number) => [
  {
    cpx1: size / 1.13,
    cpy1: size / 0.704,
    cpx2: size / 1.142,
    cpy2: size / 0.7343,
    x: size / 1.207,
    y: size / 0.7343,
  },
  {
    cpx1: size / 1.28,
    cpy1: size / 0.7343,
    cpx2: size / 1.2798,
    cpy2: size / 0.71006,
    x: size / 1.36182,
    y: size / 0.71,
  },
  {
    cpx1: size / 1.455,
    cpy1: size / 0.71006,
    cpx2: size / 1.455,
    cpy2: size / 0.7343,
    x: size / 1.5618,
    y: size / 0.7343,
  },
  {
    cpx1: size / 1.685,
    cpy1: size / 0.7343,
    cpx2: size / 1.685,
    cpy2: size / 0.71006,
    x: size / 1.8307,
    y: size / 0.71006,
  },
  {
    cpx1: size / 2.003,
    cpy1: size / 0.71006,
    cpx2: size / 2.003,
    cpy2: size / 0.7343,
    x: size / 2.2115,
    y: size / 0.7343,
  },
  {
    cpx1: size / 2.468,
    cpy1: size / 0.7343,
    cpx2: size / 2.468,
    cpy2: size / 0.71006,
    x: size / 2.792,
    y: size / 0.71006,
  },
  {
    cpx1: size / 3.214,
    cpy1: size / 0.71006,
    cpx2: size / 3.214,
    cpy2: size / 0.7343,
    x: size / 3.786,
    y: size / 0.7343,
  },
  {
    cpx1: size / 4.606,
    cpy1: size / 0.7343,
    cpx2: size / 4.606,
    cpy2: size / 0.71006,
    x: size / 5.879,
    y: size / 0.71006,
  },
  {
    cpx1: size / 8.126,
    cpy1: size / 0.71006,
    cpx2: size / 8.126,
    cpy2: size / 0.7343,
    x: size / 13.154,
    y: size / 0.7343,
  },
  {
    cpx1: size / 8.698,
    cpy1: size / 0.7343,
    cpx2: size / 8.698,
    cpy2: size / 0.71006,
    x: size / -55.45,
    y: size / 0.71006,
  },
  {
    cpx1: size / -15.369,
    cpy1: size / 0.71006,
    cpx2: size / -15.369,
    cpy2: size / 0.7343,
    x: size / -8.921,
    y: size / 0.7343,
  },
  {
    cpx1: size / -6.284,
    cpy1: size / 0.7343,
    cpx2: size / -6.284,
    cpy2: size / 0.71006,
    x: size / -4.85,
    y: size / 0.71006,
  },
  {
    cpx1: size / -3.949,
    cpy1: size / 0.71006,
    cpx2: size / -3.949,
    cpy2: size / 0.7343,
    x: size / -3.331,
    y: size / 0.7343,
  },
  {
    cpx1: size / -2.879,
    cpy1: size / 0.7343,
    cpx2: size / -2.824,
    cpy2: size / 0.704,
    x: size / -2.501,
    y: size / 0.71,
  },
  {
    cpx1: size / -2.4347,
    cpy1: size / 0.71172,
    cpx2: size / -2.6958,
    cpy2: size / 0.72796,
    x: size / -2.6958,
    y: size / 0.734,
  },
  {
    cpx1: size / -2.6958,
    cpy1: size / 0.7401,
    cpx2: size / -2.3945,
    cpy2: size / 0.7401,
    x: size / -2.3945,
    y: size / 0.7463,
  },
  {
    cpx1: size / -2.3945,
    cpy1: size / 0.75274,
    cpx2: size / -2.6958,
    cpy2: size / 0.7401,
    x: size / -2.3945,
    y: size / 0.7463,
  },
  {
    cpx1: size / -2.6958,
    cpy1: size / 0.7657,
    cpx2: size / -2.3945,
    cpy2: size / 0.7657,
    x: size / -2.3945,
    y: size / 0.772,
  },
  {
    cpx1: size / -2.3945,
    cpy1: size / 0.7792,
    cpx2: size / -2.6958,
    cpy2: size / 0.7792,
    x: size / -2.6958,
    y: size / 0.7862,
  },
  {
    cpx1: size / -2.6958,
    cpy1: size / 0.7933,
    cpx2: size / -2.3945,
    cpy2: size / 0.7932,
    x: size / -2.3945,
    y: size / 0.8,
  },
  {
    cpx1: size / -2.3945,
    cpy1: size / 0.8077,
    cpx2: size / -2.6958,
    cpy2: size / 0.8077,
    x: size / -2.6958,
    y: size / 0.8151,
  },
  {
    cpx1: size / -2.6958,
    cpy1: size / 0.8227,
    cpx2: size / -2.3945,
    cpy2: size / 0.8227,
    x: size / -2.3945,
    y: size / 0.8305,
  },
  {
    cpx1: size / -2.3945,
    cpy1: size / 0.838,
    cpx2: size / -2.6958,
    cpy2: size / 0.838,
    x: size / -2.6958,
    y: size / 0.8463,
  },
  {
    cpx1: size / -2.6958,
    cpy1: size / 0.8545,
    cpx2: size / -2.3945,
    cpy2: size / 0.8545,
    x: size / -2.3945,
    y: size / 0.8629,
  },
  {
    cpx1: size / -2.3945,
    cpy1: size / 0.8714,
    cpx2: size / -2.6958,
    cpy2: size / 0.87141,
    x: size / -2.6958,
    y: size / 0.8629,
  },
  {
    cpx1: size / -2.6958,
    cpy1: size / 0.8889,
    cpx2: size / -2.3945,
    cpy2: size / 0.88894,
    x: size / -2.3945,
    y: size / 0.8979,
  },
  {
    cpx1: size / -2.3945,
    cpy1: size / 0.9071,
    cpx2: size / -2.6958,
    cpy2: size / 0.9071,
    x: size / -2.6958,
    y: size / 0.9166,
  },
  {
    cpx1: size / -2.6958,
    cpy1: size / 0.92622,
    cpx2: size / -2.43457,
    cpy2: size / 0.95392,
    x: size / -2.5016,
    y: size / 0.95634,
  },
  {
    cpx1: size / -2.8246,
    cpy1: size / 0.96651,
    cpx2: size / -2.8797,
    cpy2: size / 0.916,
    x: size / -3.3307,
    y: size / 0.91603,
  },
  {
    cpx1: size / -3.9491,
    cpy1: size / 0.916033,
    cpx2: size / -3.9491,
    cpy2: size / 0.9569,
    x: size / -4.8497,
    y: size / 0.9569,
  },
  {
    cpx1: size / -6.2823,
    cpy1: size / 0.9569,
    cpx2: size / -6.2823,
    cpy2: size / 0.916033,
    x: size / -8.916,
    y: size / 0.916033,
  },
  {
    cpx1: size / -15.3523,
    cpy1: size / 0.916033,
    cpx2: size / -15.3523,
    cpy2: size / 0.9569,
    x: size / -55.1977,
    y: size / 0.9569,
  },
  {
    cpx1: size / 34.5901,
    cpy1: size / 0.9569,
    cpx2: size / 34.5901,
    cpy2: size / 0.916033,
    x: size / 13.16944,
    y: size / 0.916033,
  },
  {
    cpx1: size / 8.1336,
    cpy1: size / 0.916033,
    cpx2: size / 8.1336,
    cpy2: size / 0.9569,
    x: size / 5.8837,
    y: size / 0.9569,
  },
  {
    cpx1: size / 4.6087,
    cpy1: size / 0.9569,
    cpx2: size / 4.6087,
    cpy2: size / 0.916033,
    x: size / 3.7879,
    y: size / 0.916033,
  },
  {
    cpx1: size / 3.21522,
    cpy1: size / 0.916033,
    cpx2: size / 3.21522,
    cpy2: size / 0.9569,
    x: size / 2.79298,
    y: size / 0.9569,
  },
  {
    cpx1: size / 2.46874,
    cpy1: size / 0.9569,
    cpx2: size / 2.46874,
    cpy2: size / 0.916033,
    x: size / 2.2119,
    y: size / 0.916033,
  },
  {
    cpx1: size / 2.0035,
    cpy1: size / 0.916033,
    cpx2: size / 2.0035,
    cpy2: size / 0.9569,
    x: size / 1.831,
    y: size / 0.9569,
  },
  {
    cpx1: size / 1.6858,
    cpy1: size / 0.9569,
    cpx2: size / 1.6858,
    cpy2: size / 0.916033,
    x: size / 1.56201,
    y: size / 0.916033,
  },
  {
    cpx1: size / 1.4551,
    cpy1: size / 0.916033,
    cpx2: size / 1.4551,
    cpy2: size / 0.9569,
    x: size / 1.32581,
    y: size / 0.9569,
  },
  {
    cpx1: size / 1.27993,
    cpy1: size / 0.9569,
    cpx2: size / 1.27993,
    cpy2: size / 0.916033,
    x: size / 1.2072,
    y: size / 0.916033,
  },
  {
    cpx1: size / 1.1423,
    cpy1: size / 0.916033,
    cpx2: size / 1.13364,
    cpy2: size / 0.9665,
    x: size / 1.07776,
    y: size / 0.9563,
  },
  {
    cpx1: size / 1.0651,
    cpy1: size / 0.9539,
    cpx2: size / 1.11228,
    cpy2: size / 0.92623,
    x: size / 1.11228,
    y: size / 0.91663,
  },
  {
    cpx1: size / 1.11228,
    cpy1: size / 0.9072,
    cpx2: size / 1.061135,
    cpy2: size / 0.90723,
    x: size / 1.061135,
    y: size / 0.898,
  },
  {
    cpx1: size / 1.061135,
    cpy1: size / 0.88899,
    cpx2: size / 1.11228,
    cpy2: size / 0.88899,
    x: size / 1.11228,
    y: size / 0.88014,
  },
  {
    cpx1: size / 1.11228,
    cpy1: size / 0.87147,
    cpx2: size / 1.061135,
    cpy2: size / 0.88899,
    x: size / 1.11228,
    y: size / 0.88014,
  },
  {
    cpx1: size / 1.061135,
    cpy1: size / 0.8546,
    cpx2: size / 1.11228,
    cpy2: size / 0.8546,
    x: size / 1.11228,
    y: size / 0.8464,
  },
  {
    cpx1: size / 1.11228,
    cpy1: size / 0.8384,
    cpx2: size / 1.061135,
    cpy2: size / 0.8384,
    x: size / 1.061135,
    y: size / 0.83058,
  },
  {
    cpx1: size / 1.061135,
    cpy1: size / 0.8228,
    cpx2: size / 1.11228,
    cpy2: size / 0.8228,
    x: size / 1.11228,
    y: size / 0.8152,
  },
  {
    cpx1: size / 1.11228,
    cpy1: size / 0.8077,
    cpx2: size / 1.061135,
    cpy2: size / 0.80779,
    x: size / 1.061135,
    y: size / 0.80048,
  },
  {
    cpx1: size / 1.061135,
    cpy1: size / 0.7933,
    cpx2: size / 1.11228,
    cpy2: size / 0.7933,
    x: size / 1.11228,
    y: size / 0.78625,
  },
  {
    cpx1: size / 1.11228,
    cpy1: size / 0.7793,
    cpx2: size / 1.061135,
    cpy2: size / 0.7793,
    x: size / 1.061135,
    y: size / 0.7725,
  },
  {
    cpx1: size / 1.061135,
    cpy1: size / 0.7658,
    cpx2: size / 1.11228,
    cpy2: size / 0.7658,
    x: size / 1.11228,
    y: size / 0.76701,
  },
  {
    cpx1: size / 1.11228,
    cpy1: size / 0.75278,
    cpx2: size / 1.061135,
    cpy2: size / 0.75278,
    x: size / 1.061135,
    y: size / 0.7464,
  },
  {
    cpx1: size / 1.061135,
    cpy1: size / 0.74017,
    cpx2: size / 1.1148,
    cpy2: size / 0.73687,
    x: size / 1.1114,
    y: size / 0.73096,
  },
  {
    cpx1: size / 1.1041,
    cpy1: size / 0.71869,
    cpx2: size / 1.0651,
    cpy2: size / 0.71172,
    x: size / 1.0777,
    y: size / 0.71038,
  },
];

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
  getCubicPath,
  getSkiaChargingThunderPoints,
  getSkiaChargingThunderPath,
  getWavePathPoints,
};
