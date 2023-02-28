import {
  DataSourceParam,
  interpolate,
  runTiming,
  TouchHandler,
  useComputedValue,
  useImage,
  useTiming,
  useTouchHandler,
  useValue,
  type SkiaMutableValue,
  type SkiaValue,
  type SkImage,
} from '@shopify/react-native-skia';
import { useState } from 'react';
import { StyleSheet, type StyleProp, type ViewProps } from 'react-native';
import type {
  MediaButtonHookParamsType,
  MediaButtonReturnType,
  RotateType,
  ScaleType,
} from '../MediaButtonTypes';

const useMediaButton = ({
  pulseSpeed,
  size,
  speed,
  onPlayPress,
  onPausePress,
  pulseStart,
  pulseEnd,
  pauseImageSource,
  playImageSource,
  style,
}: MediaButtonHookParamsType): MediaButtonReturnType => {
  const canvasSize: number = size * 1.5;
  const pulseOpacity: number = 0.3;
  const canvasCentre: number = size * 0.75;
  const buttonStartingPoint: number = size / 4;
  const value: SkiaMutableValue<number> = useValue(0);
  const canvasStyle: StyleProp<ViewProps> = StyleSheet.flatten([
    {
      height: canvasSize,
      width: canvasSize,
    },
    style,
  ]);
  const playButton: SkImage | null = useImage(
    playImageSource as DataSourceParam
  );
  const pauseButton: SkImage | null = useImage(
    pauseImageSource as DataSourceParam
  );
  const [isPlayButton, setIsPlayButton] = useState<boolean>(true);

  const pulseTiming: SkiaValue<number> = useTiming(
    { from: 0, to: 1, loop: true },
    { duration: pulseSpeed }
  );

  const touchHandler: TouchHandler = useTouchHandler(
    {
      onStart: () => {
        runTiming(value, { from: 0, to: 1 }, { duration: speed }, () => {
          setIsPlayButton((pauseMode: boolean) => {
            !pauseMode ? onPausePress() : onPlayPress();
            return !pauseMode;
          });
          value.current = 0;
        });
      },
    },
    []
  );

  const reduceOpacity: SkiaValue<number> = useComputedValue(() => {
    return interpolate(value.current, [0, 0.5, 0.5, 1], [1, 1, 0, 0]);
  }, [value]);

  const raiseOpacity: SkiaValue<number> = useComputedValue(() => {
    return interpolate(value.current, [0, 0.5, 0.5, 1], [0, 0, 1, 1]);
  }, [value]);

  const circularPulse: SkiaValue<number> = useComputedValue(() => {
    const movement =
      buttonStartingPoint *
      interpolate(
        pulseTiming.current,
        [0, 0.5, 1],
        [1 - pulseEnd, 1 - pulseStart, 1 - pulseEnd]
      );
    return canvasCentre - movement;
  }, [pulseTiming]);

  const scaleButton: SkiaValue<ScaleType[]> = useComputedValue(() => {
    return [
      {
        scale: interpolate(value.current, [0, 0.5, 1], [1, 0, 1]),
      },
    ];
  }, [value]);

  const rotateButton: SkiaValue<RotateType[]> = useComputedValue(() => {
    return [
      {
        rotate: interpolate(value.current, [0, 0.5, 1], [0, 3.15, 6.3]),
      },
    ];
  }, [value]);

  const squarePulse: SkiaValue<ScaleType[]> = useComputedValue(() => {
    const pulseStartFrom: number = 0.67 + 0.33 * pulseStart;
    const pulseEndTo: number = 0.67 + 0.33 * pulseEnd;

    return [
      {
        scale: interpolate(
          pulseTiming.current,
          [0, 0.5, 1],
          [pulseEndTo, pulseStartFrom, pulseEndTo]
        ),
      },
    ];
  }, [pulseTiming]);

  return {
    playButton,
    circularPulse,
    isPlayButton,
    pauseButton,
    raiseOpacity,
    reduceOpacity,
    rotateButton,
    scaleButton,
    squarePulse,
    touchHandler,
    canvasSize,
    pulseOpacity,
    canvasCentre,
    buttonStartingPoint,
    canvasStyle,
  };
};

export default useMediaButton;
