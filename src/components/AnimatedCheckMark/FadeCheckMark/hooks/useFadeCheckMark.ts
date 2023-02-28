import {
  interpolate,
  Skia,
  useComputedValue,
  useValue,
  type SkiaValue,
  type SkPath,
  type Transforms2d,
} from '@shopify/react-native-skia';
import type { Coordinates } from '../../../../types';
import { getLineToPath, getStarPoints } from '../../../../utils';
import type {
  GetExplorePositionType,
  GetExploreTranslateType,
} from '../../AnimatedCheckMarkTypes';
import type { UseFadeCheckMarkReturnType } from '../FadeCheckMarkType';

const getExploreCircle = (
  angle: number,
  exploreRadiusOfCircle: number,
  size: number
) => {
  return Array.apply(null, Array(4)).map((_, positionIndex) => {
    return {
      x: exploreRadiusOfCircle * Math.cos(angle * positionIndex) + size,
      y: exploreRadiusOfCircle * Math.sin(angle * positionIndex) + size,
    };
  });
};

const getExploreStar = (
  angle: number,
  exploreRadiusOfStar: number,
  size: number
) => {
  return Array.apply(null, Array(4)).map((_, positionIndex) => {
    const circleIndex: number =
      positionIndex % 2 === 0 ? positionIndex : positionIndex;

    return {
      x: exploreRadiusOfStar * Math.cos(angle * circleIndex + 0.8) + size * 3.5,
      y: exploreRadiusOfStar * Math.sin(angle * circleIndex + 0.8) + size * 3.5,
    };
  });
};

const getExploreCircleTranslateX = ({
  index,
  size,
}: GetExploreTranslateType) => {
  switch (index) {
    case 1:
      return [0, -(size * 0.13)];
    case 3:
      return [0, size * 0.13];
    case 4:
    case 2:
    default:
      return [0, 0];
  }
};

const getExploreCircleTranslateY = ({
  index,
  size,
}: GetExploreTranslateType) => {
  switch (index) {
    case 4:
      return [0, size * 0.13];
    case 2:
      return [0, -(size * 0.13)];
    case 1:
    case 3:
    default:
      return [0, 0];
  }
};

const getExploreStarTranslateX = ({ index, size }: GetExploreTranslateType) => {
  switch (index) {
    case 1:
      return [size * 1.05, size * 1.12];
    case 2:
      return [size / 1.6, size / 1.88];
    case 3:
      return [size / 1.6, size / 1.88];
    case 4:
      return [size, size / 0.92];
    default:
      return [0, 0];
  }
};

const getExploreStarTranslateY = ({ index, size }: GetExploreTranslateType) => {
  switch (index) {
    case 1:
      return [size * 1.05, size * 1.12];
    case 2:
      return [size / 0.97, size / 0.9];
    case 3:
      return [size / 1.6, size / 1.89];
    case 4:
      return [size / 1.6, size / 1.9];
    default:
      return [0, 0];
  }
};

const getExploreCirclePosition = ({
  positionValue,
  size,
  input,
}: GetExplorePositionType) => {
  return Array.apply(null, Array(4)).map((_, index) => {
    return [
      {
        translateX: interpolate(
          positionValue,
          input ?? [0, 1],
          getExploreCircleTranslateX({ index: index + 1, size: size ?? 100 })
        ),
      },
      {
        translateY: interpolate(
          positionValue,
          input ?? [0, 1],
          getExploreCircleTranslateY({ index: index + 1, size: size ?? 100 })
        ),
      },
    ];
  });
};

const getExploreStarPosition = ({
  positionValue,
  size,
  input,
}: GetExplorePositionType) => {
  return Array.apply(null, Array(4)).map((_, index) => {
    return [
      {
        translateX: interpolate(
          positionValue,
          input ?? [0, 1],
          getExploreStarTranslateX({ index: index + 1, size: size ?? 100 })
        ),
      },
      {
        translateY: interpolate(
          positionValue,
          input ?? [0, 1],
          getExploreStarTranslateY({ index: index + 1, size: size ?? 100 })
        ),
      },
    ];
  });
};

const useFadeCheckMark = (
  size: number,
  value: SkiaValue<number>
): UseFadeCheckMarkReturnType => {
  const circleTwoScale = useValue<Transforms2d>([{ scale: 1 }]);
  const circleParticle = useValue<Transforms2d>([{ scale: 1 }]);
  const starParticle = useValue<Transforms2d>([{ scale: 1 }]);
  const circleOneOpacity = useValue<number>(0);
  const circleParticleOpacity = useValue<number>(0);
  const starParticleOpacity = useValue<number>(0);
  const angle: number = (2 * Math.PI) / 4;
  const exploreRadiusOfCircle: number = -size / 2 + size * 0.25;
  const exploreRadiusOfStar: number = -size / 2 + size * 2;
  const exploreCircleTransform = useValue<Array<Transforms2d>>(
    getExploreCirclePosition({ positionValue: 0 })
  );
  const exploreStarTransform = useValue<Array<Transforms2d>>(
    getExploreStarPosition({ positionValue: 0 })
  );

  const ExploreStars: Array<{ x: number; y: number }> = getExploreStar(
    angle,
    exploreRadiusOfStar,
    size
  );
  const ExploreCircles: Array<{ x: number; y: number }> = getExploreCircle(
    angle,
    exploreRadiusOfCircle,
    size
  );
  const path: SkPath = Skia.Path.Make();
  path.moveTo(size * 0.165, 0);
  const starPoints: Array<Coordinates> = getStarPoints(size);
  const starPath: SkPath = getLineToPath(path, starPoints);
  starPath.close();

  useComputedValue(() => {
    circleTwoScale.current = [
      { scale: interpolate(value.current, [0, 0.015, 0.5, 1], [0, 0, 1, 1]) },
    ];

    circleOneOpacity.current = interpolate(
      value.current,
      [0, 0.8, 1],
      [0.6, 0, 0]
    );

    circleParticleOpacity.current = interpolate(
      value.current,
      [0, 0.1, 0.3, 1],
      [0, 0, 1, 1]
    );

    starParticleOpacity.current = interpolate(
      value.current,
      [0, 0.1, 0.3, 1],
      [0, 0, 1, 1]
    );

    circleParticle.current = [
      {
        scale: interpolate(value.current, [0, 0.06, 0.7, 1], [1, 1, 0, 0]),
      },
    ];

    starParticle.current = [
      {
        scale: interpolate(value.current, [0, 0.06, 0.7, 1], [1, 1, 0, 0]),
      },
    ];

    exploreCircleTransform.current = getExploreCirclePosition({
      positionValue: interpolate(
        value.current,
        [0, 0.15, 0.4, 1],
        [0, 0, 1, 1]
      ),
      size,
      input: [1 / 4 - 0.2, 1 / 4],
    });

    exploreStarTransform.current = getExploreStarPosition({
      positionValue: interpolate(
        value.current,
        [0, 0.15, 0.4, 1],
        [0, 0, 1, 1]
      ),
      size,
      input: [1 / 4 - 0.2, 1 / 4],
    });
  }, [value]);

  return {
    circleParticle,
    starParticle,
    exploreCircleTransform,
    exploreStarTransform,
    circleTwoScale,
    circleOneOpacity,
    circleParticleOpacity,
    starParticleOpacity,
    starPath,
    ExploreStars,
    ExploreCircles,
  };
};

export default useFadeCheckMark;
