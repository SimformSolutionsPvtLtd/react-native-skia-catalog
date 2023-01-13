import {
  interpolate,
  useComputedValue,
  useFont,
  useImage,
  useTiming,
  type SkFont,
  type SkiaMutableValue,
  type SkiaValue,
  type SkImage,
  type SkPoint,
} from '@shopify/react-native-skia';
import { Fonts, Images } from '../../../assets';
import {
  getCircleCoordinate,
  getInterPolateValue,
  getLineCoordinate,
} from '../../../utils';
import type { NotificationReturnType } from '../NotificationTypes';

const useNotification = (
  size: number,
  notificationCount: number
): NotificationReturnType => {
  const image: SkImage | null = useImage(Images.mail);
  const lineHeight: number = size * 0.3;
  const circleRadius: number = size / 7.5;
  const fontSize: number = size / 6;
  const font = useFont(Fonts.font, fontSize) as SkFont;
  const notificationNumber: string =
    notificationCount > 9 ? '9+' : notificationCount.toString();
  const firstLineXCoordinate: number = size * 1.267;
  const firstLineYCoordinate: number = size * 1.233;
  const secondLineXCoordinate: number = size * 1.167;
  const secondLineYCoordinate: number = size * 1.3;
  const lineMovingRate: number = size / 3.75;
  const circleAndNoYCoordinate: number = size / 1.5;
  const lineStrokeWidth: number = size / 18.75;
  const circleStrokeWidth: number = size / 30;
  const circleXCoordinate: number = size / 0.9375;
  const countTextXPosition: number =
    notificationNumber.length > 1 ? size * 0.967 : size / 0.987;
  const countTextYPositionAtLast = notificationNumber.length > 1 ? 0.24 : 0.26;

  const value = useTiming(
    { from: 0, to: 1 },
    { duration: 1500 }
  ) as SkiaMutableValue<number>;

  const mailRotation: SkiaValue<
    {
      rotate: number;
    }[]
  > = useComputedValue(() => {
    return [
      {
        rotate: interpolate(
          value.current,
          [0, 0.315, 0.48, 0.685, 0.815, 1],
          [0, 0.375, -0.25, 0.125, 0, 0]
        ),
      },
    ];
  }, [value]);

  const firstLineStartingCoordinate: SkiaValue<SkPoint> =
    useComputedValue(() => {
      return getLineCoordinate({
        value: value.current,
        lineHeight,
        lineMovingRate,
        movementInputRange: [0, 0.352, 0.48, 1],
        movementOutputRange: [0, 0, 1, 1],
        transformationInputRange: [0, 0.352, 0.407, 1],
        transformationOutputRange: [0, 0, 1, 1],
        xCoordinate: firstLineXCoordinate,
        yCoordinate: firstLineYCoordinate,
      });
    }, [value]);

  const firstLineEndingCoordinate: SkiaValue<SkPoint> = useComputedValue(() => {
    return getLineCoordinate({
      value: value.current,
      lineHeight,
      lineMovingRate,
      movementInputRange: [0, 0.352, 0.48, 1],
      movementOutputRange: [0, 0, 1, 1],
      transformationInputRange: [0, 0.48, 0.537, 1],
      transformationOutputRange: [0, 0, 1, 1],
      xCoordinate: firstLineXCoordinate,
      yCoordinate: firstLineYCoordinate,
    });
  }, [value]);

  const secondLineStartingCoordinate: SkiaValue<SkPoint> =
    useComputedValue(() => {
      return getLineCoordinate({
        value: value.current,
        lineHeight,
        lineMovingRate,
        movementInputRange: [0, 0.463, 0.53, 1],
        movementOutputRange: [0, 0, 1, 1],
        transformationInputRange: [0, 0.352, 0.463, 1],
        transformationOutputRange: [0, 0, 1, 1],
        xCoordinate: secondLineXCoordinate,
        yCoordinate: secondLineYCoordinate,
      });
    }, [value]);

  const secondLineEndingCoordinate: SkiaValue<SkPoint> =
    useComputedValue(() => {
      return getLineCoordinate({
        value: value.current,
        lineHeight,
        lineMovingRate,
        movementInputRange: [0, 0.463, 0.53, 1],
        movementOutputRange: [0, 0, 1, 1],
        transformationInputRange: [0, 0.53, 0.593, 0.8],
        transformationOutputRange: [0, 0, 1, 1],
        xCoordinate: secondLineXCoordinate,
        yCoordinate: secondLineYCoordinate,
      });
    }, [value]);

  const fillledCircleVisibility: SkiaValue<number> = useComputedValue(() => {
    return interpolate(value.current, [0, 0.44, 0.44, 1], [0, 0, 1, 1]);
  }, [value]);

  const strokeCircleVisibility: SkiaValue<number> = useComputedValue(() => {
    return interpolate(value.current, [0, 0.518, 0.518, 1], [0, 0, 1, 1]);
  }, [value]);

  const filledCircleCentre: SkiaValue<SkPoint> = useComputedValue(() => {
    return getCircleCoordinate({
      xCoordinate: circleXCoordinate,
      yCoordinate: circleAndNoYCoordinate,
      inputRange: [0, 0.44, 0.611, 0.713, 0.82, 1],
      outputRange: [0, 0.22, 0.8, 0, 0.13, 0.13],
      value: value.current,
    });
  }, [value]);

  const strokeCircleCentre: SkiaValue<SkPoint> = useComputedValue(() => {
    return getCircleCoordinate({
      xCoordinate: circleXCoordinate,
      yCoordinate: circleAndNoYCoordinate,
      inputRange: [
        0, 0.518, 0.518, 0.685, 0.694, 0.787, 0.843, 0.898, 0.935, 1,
      ],
      outputRange: [0, 0, 0.22, 0.74, 0.74, 0, 0.14, 0.06, 0.13, 0.13],
      value: value.current,
    });
  }, [value]);

  const countTextYPosition: SkiaValue<number> = useComputedValue(() => {
    return (
      size / 1.25 -
      getInterPolateValue({
        inputRange: [0, 0.593, 0.759, 0.768, 0.861, 0.926, 0.963, 1],
        outputRange: [0, 0.15, 1, 1, 0, 0.26, 0.2, countTextYPositionAtLast],
        size: circleAndNoYCoordinate,
        value: value.current,
      })
    );
  }, [value]);

  const notificationCountVisibility: SkiaValue<number> =
    useComputedValue(() => {
      return interpolate(value.current, [0, 0.593, 0.593, 1], [0, 0, 1, 1]);
    }, [value]);

  return {
    lineStrokeWidth,
    circleStrokeWidth,
    font,
    notificationNumber,
    circleRadius,
    image,
    mailRotation,
    firstLineStartingCoordinate,
    firstLineEndingCoordinate,
    secondLineStartingCoordinate,
    secondLineEndingCoordinate,
    fillledCircleVisibility,
    strokeCircleVisibility,
    filledCircleCentre,
    strokeCircleCentre,
    countTextYPosition,
    notificationCountVisibility,
    countTextXPosition,
  };
};

export default useNotification;
