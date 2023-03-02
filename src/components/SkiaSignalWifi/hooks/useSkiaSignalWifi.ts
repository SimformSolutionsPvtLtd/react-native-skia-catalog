import {
  interpolate,
  SkiaValue,
  useComputedValue,
  useTiming,
  useValue,
} from '@shopify/react-native-skia';
import type { UseSkiaSignalWifiReturnType } from '../SkiaSignalWifiTypes';
import useGetArcPath from './useGetArcPath';

const useSkiaSignalWifi = (
  size: number,
  numberOfArcs: number
): UseSkiaSignalWifiReturnType => {
  const squareSize: number = size / 5;
  const displayArcTwo: boolean = numberOfArcs > 1;
  const displayArcThree: boolean = numberOfArcs > 2;
  const displayArcFour: boolean = numberOfArcs > 3;

  const value: SkiaValue<number> = useTiming(
    {
      to: 29,
      from: 0,
    },
    {
      duration: 1500,
    }
  );

  const arcOneStartAngle = useValue(5.475);
  const arcOneEndAngle = useValue(7.07);
  const arcOneX = useValue((95 * size) / 300);
  const arcOneY = useValue((70 * size) / 300);
  const arcOneRadius = useValue((54 * size) / 300);
  const arcOneWidth = useValue((9 * size) / 300);

  useComputedValue(() => {
    arcOneStartAngle.current = interpolate(
      value.current,
      [0, 4, 6.5, 12, 21, 29],
      [-0.7, -0.7, 1.3, 3.3, 5.475, 5.475]
    );
    arcOneEndAngle.current = interpolate(
      value.current,
      [0, 4, 6.5, 12, 21, 29],
      [-0.7, 1.3, 3.3, 5.3, 7.07, 7.07]
    );
    arcOneX.current = interpolate(
      value.current,
      [0, 4, 6.5, 12, 21, 29],
      [150, 150, 120, 80, 95, 95].map(item => (item * size) / 300)
    );
    arcOneY.current = interpolate(
      value.current,
      [0, 4, 6.5, 12, 21, 29],
      [110, 115, 125, 110, 70, 70].map(item => (item * size) / 300)
    );
    arcOneRadius.current = interpolate(
      value.current,
      [0, 4, 6.5, 12, 21, 29],
      [40, 46, 46, 49, 54, 54].map(item => (item * size) / 300)
    );
    arcOneWidth.current = interpolate(
      value.current,
      [0, 4, 6.5, 12, 21, 29],
      [5, 5.5, 6, 6.5, 9, 9].map(item => (item * size) / 300)
    );
  }, [value]);

  const arcOne = useGetArcPath(
    arcOneX,
    arcOneY,
    arcOneStartAngle,
    arcOneEndAngle,
    arcOneRadius
  );

  const arcTwoStartAngle = useValue(5.475);
  const arcTwoEndAngle = useValue(7.1);
  const arcTwoX = useValue(78);
  const arcTwoY = useValue(52);
  const arcTwoRadius = useValue(70);
  const arcTwoWidth = useValue(9);

  useComputedValue(() => {
    if (displayArcTwo) {
      arcTwoStartAngle.current = interpolate(
        value.current,
        [0, 6.5, 9, 11, 13, 15, 17, 19, 21, 23, 29],
        [-0.5, -0.5, -0.2, 0.8, 1.58, 2.36, 3.14, 3.92, 4.7, 5.475, 5.475]
      );
      arcTwoEndAngle.current = interpolate(
        value.current,
        [0, 6.5, 9, 11, 13, 15, 17, 19, 21, 23, 29],
        [-0.5, -0.5, 2, 2.73, 3.46, 4.19, 4.92, 5.65, 6.38, 7.1, 7.1]
      );
      arcTwoX.current = interpolate(
        value.current,
        [0, 6.5, 9, 11, 13, 15, 17, 19, 21, 23, 29],
        [125, 125, 125, 115, 80, 70, 73, 76, 78, 78, 78].map(
          item => (item * size) / 300
        )
      );
      arcTwoY.current = interpolate(
        value.current,
        [0, 6.5, 9, 11, 13, 15, 17, 19, 21, 23, 29],
        [130, 130, 130, 105, 105, 85, 70, 50, 57, 52, 52].map(
          item => (item * size) / 300
        )
      );
      arcTwoRadius.current = interpolate(
        value.current,
        [0, 6.5, 9, 11, 13, 15, 17, 19, 21, 23, 29],
        [60, 60, 60, 60, 64, 66, 68, 70, 70, 70, 70].map(
          item => (item * size) / 300
        )
      );
      arcTwoWidth.current = interpolate(
        value.current,
        [0, 6.5, 9, 11, 13, 15, 17, 19, 21, 23, 29],
        [5, 5, 5, 6, 7.5, 8, 8.3, 8.6, 9, 9, 9].map(item => (item * size) / 300)
      );
    }
  }, [value]);

  const arcTwo = useGetArcPath(
    arcTwoX,
    arcTwoY,
    arcTwoStartAngle,
    arcTwoEndAngle,
    arcTwoRadius
  );

  const arcThreeStartAngle = useValue(5.475);
  const arcThreeEndAngle = useValue(7.1);
  const arcThreeX = useValue(60);
  const arcThreeY = useValue(34);
  const arcThreeRadius = useValue(88);
  const arcThreeWidth = useValue(9);

  useComputedValue(() => {
    if (displayArcThree) {
      arcThreeStartAngle.current = interpolate(
        value.current,
        [0, 10, 11, 13, 15, 17, 19, 21, 23, 27, 29],
        [-0.2, -0.2, -0.2, 0.4, 1.25, 2.1, 2.95, 3.8, 4.65, 5.475, 5.475]
      );
      arcThreeEndAngle.current = interpolate(
        value.current,
        [0, 10, 11, 13, 15, 17, 19, 21, 23, 27, 29],
        [-0.2, -0.2, 1.4, 2.21, 3.02, 3.83, 4.64, 5.45, 6.26, 7.1, 7.1]
      );
      arcThreeX.current = interpolate(
        value.current,
        [0, 10, 11, 13, 15, 17, 19, 21, 23, 27, 29],
        [110, 110, 110, 110, 65, 50, 50, 55, 60, 60, 60].map(
          item => (item * size) / 300
        )
      );
      arcThreeY.current = interpolate(
        value.current,
        [0, 10, 11, 13, 15, 17, 19, 21, 23, 27, 29],
        [155, 155, 155, 145, 90, 70, 50, 40, 34, 34, 34].map(
          item => (item * size) / 300
        )
      );
      arcThreeRadius.current = interpolate(
        value.current,
        [0, 10, 11, 13, 15, 17, 19, 21, 23, 27, 29],
        [56, 56, 56, 56, 78, 80, 83, 85, 88, 88, 88].map(
          item => (item * size) / 300
        )
      );
      arcThreeWidth.current = interpolate(
        value.current,
        [0, 10, 11, 13, 15, 17, 19, 21, 23, 27, 29],
        [5, 5, 5, 5, 5.7, 6.7, 7, 8, 8, 9, 9].map(item => (item * size) / 300)
      );
    }
  }, [value]);

  const arcThree = useGetArcPath(
    arcThreeX,
    arcThreeY,
    arcThreeStartAngle,
    arcThreeEndAngle,
    arcThreeRadius
  );

  const arcFourStartAngle = useValue(5.475);
  const arcFourEndAngle = useValue(7.1);
  const arcFourX = useValue(42);
  const arcFourY = useValue(16);
  const arcFourRadius = useValue(106);
  const arcFourWidth = useValue(9);

  useComputedValue(() => {
    if (displayArcFour) {
      arcFourStartAngle.current = interpolate(
        value.current,
        [0, 12, 13, 17, 19, 21, 23, 25, 27, 29],
        [0.9, 0.9, 1, 1.64, 2.28, 2.92, 3.56, 4.2, 4.85, 5.475]
      );
      arcFourEndAngle.current = interpolate(
        value.current,
        [0, 12, 13, 17, 19, 21, 23, 25, 27, 29],
        [0.9, 0.9, 2.8, 3.41, 4.02, 4.63, 5.24, 5.85, 6.46, 7.1]
      );
      arcFourX.current = interpolate(
        value.current,
        [0, 13, 15, 19, 21, 23, 25, 27, 29],
        [68, 25, 33, 42, 42, 36, 37, 38, 42].map(item => (item * size) / 300)
      );
      arcFourY.current = interpolate(
        value.current,
        [0, 13, 15, 19, 21, 23, 25, 27, 29],
        [155, 140, 120, 75, 65, 30, 18, 16, 16].map(item => (item * size) / 300)
      );
      arcFourRadius.current = interpolate(
        value.current,
        [0, 13, 15, 19, 21, 23, 25, 27, 29],
        [55, 73, 76, 88, 93, 99, 102, 104, 106].map(item => (item * size) / 300)
      );
      arcFourWidth.current = interpolate(
        value.current,
        [0, 13, 15, 19, 21, 23, 25, 27, 29],
        [5, 6, 6, 7, 7.5, 8, 8.3, 8.8, 9].map(item => (item * size) / 300)
      );
    }
  }, [value]);

  const arcFour = useGetArcPath(
    arcFourX,
    arcFourY,
    arcFourStartAngle,
    arcFourEndAngle,
    arcFourRadius
  );

  return {
    squareSize,
    arcOne,
    arcOneWidth,
    arcTwo,
    arcTwoWidth,
    arcThree,
    arcThreeWidth,
    arcFour,
    arcFourWidth,
    displayArcTwo,
    displayArcThree,
    displayArcFour,
  };
};

export default useSkiaSignalWifi;
