import {
  interpolate,
  interpolateColors,
  useComputedValue,
  useValue,
  type Transforms2d,
} from '@shopify/react-native-skia';
import type { ViewStyle } from 'react-native';
import { Colors, getRandomColorsArray } from '../../../theme';
import { setColors } from '../../../utils';
import type {
  getExploreCircleColorProps,
  getExploreCircleScaleProps,
  getExploreCircleTranslateTypes,
  GetLikeVariantFourConfigProps,
  GetLikeVariantOneConfigProps,
  GetLikeVariantThreeConfigProps,
  GetLikeVariantTwoConfigProps,
  useSkiaLikeProps,
} from '../SkiaLikeTypes';

const angle: number = (2 * Math.PI) / 14;

const getExploreCircleColor = (props: getExploreCircleColorProps) => {
  const { value, input } = props;
  return Array.apply(null, Array(14)).map((_, i) => {
    const colors = getRandomColorsArray();
    return interpolateColors(
      value,
      input ?? [0, 0.2, 0.4, 0.6, 0.8, 1],
      colors[i]
    );
  });
};

const getExploreCircleTranslateX = (props: getExploreCircleTranslateTypes) => {
  const { index, size } = props;
  const moveX: number = size * 0.03;
  const moveSecondBall: number = size * 0.3;

  switch (index) {
    case 1:
    case 3:
    case 11:
    case 13:
      return [0, moveSecondBall];
    case 2:
    case 12:
    case 14:
      return [0, moveX];
    case 4:
    case 6:
    case 8:
    case 10:
      return [0, -moveX];
    case 5:
    case 7:
    case 9:
      return [0, -moveSecondBall];
    default:
      return [0, 0];
  }
};

const getExploreCircleTranslateY = (props: getExploreCircleTranslateTypes) => {
  const { index, size } = props;
  const moveY: number = size * 0.05;
  const moveSecondBall: number = size * 0.35;
  switch (index) {
    case 1:
    case 7:
    case 9:
    case 11:
    case 13:
      return [0, -moveSecondBall];
    case 2:
    case 4:
      return [0, moveY];
    case 3:
    case 5:
      return [0, moveSecondBall];
    case 6:
    case 8:
    case 10:
    case 12:
    case 14:
      return [0, -moveY];
    default:
      return [0, 0];
  }
};

const getExploreCircleScale = (props: getExploreCircleScaleProps) => {
  const { value, size, input } = props;
  return Array.apply(null, Array(14)).map((_, i) => {
    return [
      { scale: interpolate(value, input ?? [0, 1], [1, 0]) },
      {
        translateX: interpolate(
          value,
          input ?? [0, 1],
          getExploreCircleTranslateX({ index: i + 1, size: size ?? 100 })
        ),
      },
      {
        translateY: interpolate(
          value,
          input ?? [0, 1],
          getExploreCircleTranslateY({ index: i + 1, size: size ?? 100 })
        ),
      },
    ];
  });
};

const getLikeVariantOneConfig = ({
  part,
  opacityHeart,
  opacityOuterCircle,
  value,
  opacityInnerCircle,
  heartColor,
}: GetLikeVariantOneConfigProps) => {
  const input = [0, part];
  opacityHeart.current = interpolate(value.current, input, [1, 0]);
  opacityOuterCircle.current = interpolate(value.current, input, [0, 1]);
  opacityInnerCircle.current = interpolate(value.current, input, [0, 1]);
  heartColor.current = setColors(
    value.current,
    [Colors.heather, Colors.amaranth],
    input
  );
};

const getLikeVariantTwoConfig = ({
  part,
  radiusOfOuterCircle,
  value,
  halfSize,
  size,
  radiusOfInnerCircle,
  circle1Color,
  scaleHeart,
  opacityHeart,
}: GetLikeVariantTwoConfigProps) => {
  const input = [part, 2 * part];
  radiusOfOuterCircle.current = interpolate(value.current, input, [
    radiusOfOuterCircle.current,
    halfSize - size * 0.1,
  ]);
  radiusOfInnerCircle.current = interpolate(value.current, input, [
    0,
    halfSize - size * 0.14,
  ]);
  circle1Color.current = setColors(
    value.current,
    [Colors.amaranth, Colors.wisteria],
    input
  );
  scaleHeart.current = [{ scale: interpolate(value.current, input, [0, 0.9]) }];
  opacityHeart.current = interpolate(value.current, input, [0, size * 0.01]);
};

const getLikeVariantThreeConfig = ({
  part,
  radiusOfInnerCircle,
  halfSize,
  size,
  opacityInnerCircle,
  value,
  scaleHeart,
  opacityHeart,
  opacityParticlesCircle,
}: GetLikeVariantThreeConfigProps) => {
  const input = [2 * part, 3 * part];
  radiusOfInnerCircle.current = interpolate(value.current, input, [
    halfSize - size * 0.14,
    halfSize - size * 0.1,
  ]);
  opacityInnerCircle.current = interpolate(value.current, input, [1, 1]);
  scaleHeart.current = [
    { scale: interpolate(value.current, input, [0.9, 1.3]) },
  ];
  opacityHeart.current = interpolate(value.current, input, [1, 1]);
  opacityParticlesCircle.current = interpolate(
    value.current,
    [0.5, 0.72, 0.75],
    [0, 0, 1]
  );
};

const getLikeVariantFourConfig = ({
  part,
  exploreCircleColor,
  value,
  scaleHeart,
  opacityInnerCircle,
  radiusOfOuterCircle,
  exploreCircleEvenScale,
  size,
  exploreCircleOddScale,
}: GetLikeVariantFourConfigProps) => {
  const prevPartValue = 3 * part;
  const partValue = 4 * part;
  const input = [prevPartValue, partValue];
  exploreCircleColor.current = getExploreCircleColor({
    value: value.current,
    input: [0.75, 0.791, 0.833, 0.875, 0.916, 1],
  });
  exploreCircleColor.current = getExploreCircleColor({
    value: value.current,
    input: Array.apply(null, Array(6)).map((_, i) => {
      const diff = (partValue - prevPartValue) / 6;
      return prevPartValue + diff * i;
    }),
  });
  scaleHeart.current = [
    { scale: interpolate(value.current, input, [1.3, 1.0]) },
  ];

  opacityInnerCircle.current = interpolate(value.current, input, [0, 0]);
  radiusOfOuterCircle.current = size * 0.05;

  exploreCircleEvenScale.current = getExploreCircleScale({
    value: value.current,
    size,
    input: [partValue - 0.2, partValue],
  });

  exploreCircleOddScale.current = getExploreCircleScale({
    value: value.current,
    size,
    input: [prevPartValue, partValue],
  });
};

const useSkiaLike = ({ size, value, isLike }: useSkiaLikeProps) => {
  const canvasStyle: ViewStyle = {
    height: size,
    width: size,
    justifyContent: 'center',
  };
  const opacityHeart = useValue<number>(size * 0.01);
  const opacityOuterCircle = useValue<number>(0);
  const opacityInnerCircle = useValue<number>(0);
  const opacityParticlesCircle = useValue<number>(0);
  const scaleHeart = useValue<Transforms2d>([{ scale: 1 }]);
  const heartColor = useValue<Float32Array>(
    setColors(0, [Colors.heather, Colors.amaranth])
  );
  const circle1Color = useValue<Float32Array>(
    setColors(0, [Colors.amaranth, Colors.wisteria])
  );
  const radiusOfOuterCircle = useValue<number>(size * 0.05);
  const radiusOfInnerCircle = useValue<number>(0);
  const exploreCircleColor = useValue<Float32Array[]>(
    getExploreCircleColor({ value: 0 })
  );
  const halfSize = size / 2;
  const exploreRadius = halfSize - size * 0.1;

  const exploreCircleEvenScale = useValue<Transforms2d[]>(
    getExploreCircleScale({ value: 0 })
  );
  const exploreCircleOddScale = useValue<Transforms2d[]>(
    getExploreCircleScale({ value: 0 })
  );

  useComputedValue(() => {
    const part = 1 / 4;
    if (!isLike) {
      if (value.current <= part) {
        getLikeVariantOneConfig({
          part,
          opacityHeart,
          opacityOuterCircle,
          value,
          opacityInnerCircle,
          heartColor,
        });
      } else if (value.current > part && value.current <= 2 * part) {
        getLikeVariantTwoConfig({
          part,
          radiusOfOuterCircle,
          value,
          halfSize,
          size,
          radiusOfInnerCircle,
          circle1Color,
          scaleHeart,
          opacityHeart,
        });
      } else if (value.current > 2 * part && value.current <= 3 * part) {
        getLikeVariantThreeConfig({
          part,
          radiusOfInnerCircle,
          halfSize,
          size,
          opacityInnerCircle,
          value,
          scaleHeart,
          opacityHeart,
          opacityParticlesCircle,
        });
      } else {
        getLikeVariantFourConfig({
          part,
          exploreCircleColor,
          value,
          scaleHeart,
          opacityInnerCircle,
          radiusOfOuterCircle,
          exploreCircleEvenScale,
          size,
          exploreCircleOddScale,
        });
      }
    }
  }, [value, isLike]);

  return {
    exploreCircleEvenScale,
    exploreCircleOddScale,
    radiusOfOuterCircle,
    opacityOuterCircle,
    opacityInnerCircle,
    opacityParticlesCircle,
    circle1Color,
    radiusOfInnerCircle,
    opacityHeart,
    heartColor,
    exploreCircleColor,
    scaleHeart,
    exploreRadius,
    angle,
    canvasStyle,
  };
};

export default useSkiaLike;
