import {
  DataSourceParam,
  interpolate,
  runTiming,
  SkiaMutableValue,
  SkiaValue,
  SkImage,
  SkPoint,
  TouchHandler,
  useComputedValue,
  useImage,
  useTouchHandler,
  useValue,
  vec,
} from "@shopify/react-native-skia";
import { useState } from "react";
import type { ImageSourcePropType } from "react-native";
import { getSizeWithinRange } from "../../../utils";
import type { StrikeImageReturnType } from "../StrikeImageTypes";

const useStrikeImage = (
  source: string | ImageSourcePropType,
  size: number,
  strikeWidth: number | undefined,
  onChangeStrike: (strikeVisibility: boolean) => void
): StrikeImageReturnType => {
  const image: SkImage | null = useImage(source as DataSourceParam);
  const [isStrikeVisible, setIsStrikeVisible] = useState<boolean>(false);
  const value: SkiaMutableValue<number> = useValue(0);
  const dimension: number = getSizeWithinRange(50, 350, size);
  const strokeSpace: number = dimension / 12;
  const lineWidth: number = strikeWidth ?? dimension / 6;
  const strokeWidth: number = getSizeWithinRange(8, 58, lineWidth);
  const singleLineStrokeWidth: number = strokeWidth / 2;
  const primaryLineStartingCoordinate: SkPoint = vec(
    0 - singleLineStrokeWidth / 2 + strokeSpace,
    0 + singleLineStrokeWidth / 6 + strokeSpace
  );
  const secondaryLineStartingCoordinate: SkPoint = vec(
    0 + singleLineStrokeWidth / 6 + strokeSpace,
    0 - singleLineStrokeWidth / 2 + strokeSpace
  );

  const touchHandler: TouchHandler = useTouchHandler(
    {
      onEnd: () => {
        runTiming(value, { from: 0, to: 1 }, { duration: 500 }, () => {
          setIsStrikeVisible((strikeVisibility: boolean) => {
            return !strikeVisibility;
          });
          value.current = 0;
          onChangeStrike?.(!isStrikeVisible);
        });
      },
    },
    [isStrikeVisible]
  );

  const opacity: SkiaValue<number> = useComputedValue(() => {
    return isStrikeVisible
      ? interpolate(value.current, [0, 1], [0.2, 0])
      : interpolate(value.current, [0, 1], [0, 0.2]);
  }, [value, isStrikeVisible]);

  const getEndingCoordinate = (isFilledLine: boolean): SkiaValue<SkPoint> => {
    return useComputedValue(() => {
      const translateCoordinate: number = isStrikeVisible
        ? interpolate(value.current, [0, 1], [1, 0])
        : interpolate(value.current, [0, 1], [0, 1]);
      const x1y2Coordinate: number =
        dimension * translateCoordinate +
        singleLineStrokeWidth / 2 -
        strokeSpace;
      const x2y1Coordinate: number =
        dimension * translateCoordinate -
        singleLineStrokeWidth / 6 -
        strokeSpace;

      if (isFilledLine) {
        return translateCoordinate <= 0.14
          ? primaryLineStartingCoordinate
          : vec(x2y1Coordinate, x1y2Coordinate);
      } else {
        return translateCoordinate <= 0.14
          ? secondaryLineStartingCoordinate
          : vec(x1y2Coordinate, x2y1Coordinate);
      }
    }, [value, isStrikeVisible]);
  };

  return {
    getEndingCoordinate,
    image,
    opacity,
    primaryLineStartingCoordinate,
    secondaryLineStartingCoordinate,
    singleLineStrokeWidth,
    touchHandler,
    dimension,
  };
};

export default useStrikeImage;
