import { interpolate, SkPoint, vec } from "@shopify/react-native-skia";

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

export {
  getSizeWithinRange,
  getLineCoordinate,
  getCircleCoordinate,
  getInterPolateValue,
};
