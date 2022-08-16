import {
  Extrapolate,
  interpolate,
  Transforms2d,
  useComputedValue,
} from "@shopify/react-native-skia";
import { useMemo } from "react";
import { I18nManager } from "react-native";
import type { CirclePropsType } from "../../Base";
import type { RenderBlockHookReturnType, RenderIndicatorPropsType } from "../SkiaPacmanIndicatorTypes";

const useRenderBlock = ({
  index,
  count,
  progress,
  width,
  height,
  borderRadius,
  opacity,
}: RenderIndicatorPropsType): RenderBlockHookReturnType => {
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

  return { cx, cy, r, transform, opacityLocal };
};

export default useRenderBlock;
