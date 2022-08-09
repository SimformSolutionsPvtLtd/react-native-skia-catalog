import {
  Circle,
  Extrapolate,
  Group,
  interpolate,
  Path,
  Skia,
  SkPath,
  Transforms2d,
  useComputedValue,
} from "@shopify/react-native-skia";
import React, { useMemo } from "react";
import { I18nManager } from "react-native";
import { SkiaBaseIndicator } from "../Base";
import type { CirclePropsType, RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaPacmanIndicatorType";
import type {
  RenderIndicatorPropsType,
  SkiaPacmanIndicatorPropsType,
} from "./SkiaPacmanIndicatorType";

const RenderBlock = ({
  index,
  count,
  progress,
  width,
  height,
  borderRadius,
  opacity,
  color,
}: RenderIndicatorPropsType): JSX.Element => {
  const { cx, cy, r } = useMemo<CirclePropsType>(() => {
    const moveX: number = borderRadius / 1.5 - 2;

    const gap: number = 3;
    const centerX: number =
      width / 2 + index * (2 * ((2 * borderRadius) / 12)) + index * gap - moveX;
    const centerY: number = height / 2;
    return { cx: centerX, cy: centerY, r: (2 * borderRadius) / 12 };
  }, [borderRadius, width, index, height]);

  const transform = useComputedValue<Transforms2d>(() => {
    if (index === count - 1) {
      return [
        {
          translateX: interpolate(
            progress.current,
            [0.5, 1],
            [0, (10 * r) / (I18nManager.isRTL ? 4 : -4)],
            Extrapolate.CLAMP
          ),
        },
        {
          scale: interpolate(
            progress.current,
            [0, 0.5],
            [0, 1],
            Extrapolate.CLAMP
          ),
        },
      ];
    } else {
      return [
        {
          translateX: interpolate(
            progress.current,
            [0.5, 1],
            [0, (10 * r) / (I18nManager.isRTL ? 4 : -4)],
            Extrapolate.CLAMP
          ),
        },
      ];
    }
  }, [progress]);

  const opacityLocal = useComputedValue<number | undefined>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    if (index === count - 1) {
      return interpolate(
        progress.current,
        [0, 0.25],
        [0, 1],
        Extrapolate.CLAMP
      );
    }
    return undefined;
  }, [progress, opacity, index, count]);

  return (
    <Group
      transform={transform}
      key={`Block-${index}`}
      origin={{ x: cx, y: cy }}
    >
      <Circle cx={cx} cy={cy} r={r} color={color} opacity={opacityLocal} />
    </Group>
  );
};

const RenderIndicator = ({
  index,
  count,
  progress,
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
}: RenderIndicatorPropsType): JSX.Element => {
  const { cx, cy, r } = useMemo<CirclePropsType>(() => {
    const moveX: number = borderRadius / 2 - 2;
    const aBorderRadius: number = borderRadius / 2;

    const centerX: number = width / 2 - moveX;
    const centerY: number = height / 2;
    return { cx: centerX, cy: centerY, r: aBorderRadius };
  }, [borderRadius, height, width]);

  const path = useComputedValue<SkPath>(() => {
    const pathLocal: SkPath = Skia.Path.Make();
    pathLocal.moveTo(cx, cy);
    pathLocal.addArc(
      { x: cx - r, y: cy - r, width: 2 * r, height: 2 * r },
      interpolate(
        progress.current,
        [0, 0.67, 1],
        index === 1 ? [180, 140, 180] : [0, 40, 0],
        Extrapolate.CLAMP
      ),
      180
    );
    return pathLocal;
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return 1;
  }, [opacity]);

  if (index > 1) {
    return (
      <RenderBlock
        {...{
          index,
          count,
          progress,
          width,
          height,
          borderRadius,
          opacity,
          animating,
          progressDuration,
          color,
        }}
      />
    );
  }

  return (
    <Group key={index} origin={{ x: r, y: r }}>
      <Path style={"fill"} path={path} color={color} opacity={opacityLocal} />
    </Group>
  );
};

const SkiaPacmanIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  ...Other
}: SkiaPacmanIndicatorPropsType): JSX.Element => {
  return (
    <SkiaBaseIndicator
      renderComponent={(args: RenderComponentArgType) => (
        <RenderIndicator
          {...args}
          {...{
            width,
            height,
            borderRadius,
            opacity,
            animating,
            progressDuration,
            color,
          }}
          key={`Pacman-${args.index}`}
        />
      )}
      {...Other}
      count={5}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaPacmanIndicator.defaultProps = defaultProps;

export default SkiaPacmanIndicator;
