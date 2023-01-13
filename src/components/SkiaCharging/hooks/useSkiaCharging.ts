import {
  interpolate,
  rect,
  rrect,
  Skia,
  Transforms2d,
  useComputedValue,
  useTiming,
} from "@shopify/react-native-skia";
import {
  getCubicPath,
  getSkiaChargingThunderPath,
  getSkiaChargingThunderPoints,
  getWavePathPoints,
} from "../../../utils";

const useSkiaCharging = ({ size = 300 }) => {
  const rectenglePath = rrect(
    rect(size / 4.33, size / 4.59, size / 1.95, size / 1.86),
    size / 9.75,
    size / 9.75
  );
  const circlePath = rrect(rect(0, 0, size, size), size / 2, size / 2);
  const shadowPath = rrect(
    rect(size / 4.33, size / 3.25, size / 1.95, size / 4.88),
    size / 19.5,
    size / 9.75
  );

  const path = Skia.Path.Make();
  path.moveTo(size * 0.52440733, size * 0.47937533);
  const skiaChargingThunderPoints = getSkiaChargingThunderPoints(size);
  const thunderPath = getSkiaChargingThunderPath(
    path,
    skiaChargingThunderPoints
  );

  const offset = useTiming({ from: 0, to: 1 }, { duration: 2000 });

  const squareTransform = useComputedValue<Transforms2d>(() => {
    return [
      {
        translateY: interpolate(
          offset.current,
          [0.06, 0.22, 0.27, 0.34, 0.38, 1],
          [0, 0, size / 39, 0, size / 78, size / 78]
        ),
      },
    ];
  }, [offset]);

  const shadowTransform = useComputedValue<Transforms2d>(() => {
    return [
      {
        translateY: interpolate(
          offset.current,
          [0, 0.3, 0.34, 0.38, 1],
          [0, 0, size / 13, size / 4.87, size / 4.87]
        ),
      },
    ];
  }, [offset]);

  const wireTransform = useComputedValue(() => {
    return [
      {
        translateY: interpolate(
          offset.current,
          [0.06, 0.22, 0.28, 0.36, 1],
          [0, size / -2.88, size / -3.3, size / -3, size / -2.93, size / -2.93]
        ),
      },
    ];
  }, [offset]);

  const waveTransformForRight = useComputedValue(() => {
    return [
      {
        translateY: interpolate(offset.current, [0.48, 1], [0, size / -2.6]),
      },
      {
        translateX: interpolate(offset.current, [0.7, 1], [0, size / 3.5]),
      },
      { scaleX: 1.5 },
    ];
  }, [offset]);

  const waveTransformForLeft = useComputedValue(() => {
    return [
      {
        translateY: interpolate(offset.current, [0.5, 1], [0, size / -2.65]),
      },
      {
        translateX: interpolate(offset.current, [0.7, 1], [0, size / -2.58]),
      },
      { scaleX: 1.5 },
    ];
  }, [offset]);

  const opacityValue = useComputedValue(() => {
    return interpolate(offset.current, [0, 0.32, 0.36, 1], [0, 0, 1, 1]);
  }, [offset]);

  const chargingIconMovement = useComputedValue(() => {
    return [
      {
        translateY: interpolate(
          offset.current,
          [0.3, 0.48, 0.5, 1],
          [0, size / -6.5, size / -7.8, size / -7.8]
        ),
      },
    ];
  }, [offset]);

  const initialWavePath = Skia.Path.Make();
  initialWavePath.moveTo(size / 1.07776, size / 0.71038);
  const wavePathPoints = getWavePathPoints(size);
  const wavePath = getCubicPath(initialWavePath, wavePathPoints);

  return {
    chargingIconMovement,
    opacityValue,
    waveTransformForLeft,
    waveTransformForRight,
    wireTransform,
    squareTransform,
    shadowTransform,
    rectenglePath,
    circlePath,
    shadowPath,
    offset,
    thunderPath,
    wavePathPoints,
    wavePath,
  };
};

export default useSkiaCharging;
