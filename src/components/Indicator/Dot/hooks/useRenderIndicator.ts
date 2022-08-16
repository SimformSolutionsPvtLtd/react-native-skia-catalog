import {
  interpolate,
  Transforms2d,
  useComputedValue,
} from "@shopify/react-native-skia";
import { useMemo } from "react";
import type { CirclePropsType } from "../../Base";
import type {
  RenderIndicatorHookReturnType,
  RenderIndicatorPropsType,
} from "../SkiaDotIndicatorTypes";

const useRenderIndicator = ({
  index,
  count,
  progress,
  width,
  height,
  borderRadius,
  opacity,
}: RenderIndicatorPropsType): RenderIndicatorHookReturnType => {
  const { cx, cy, r } = useMemo<CirclePropsType>(() => {
    const centerWidthWithGap: number = borderRadius / (count + count / 2 - 1);
    let centerR: number = borderRadius / count;
    const centerGap: number = centerR - centerWidthWithGap;
    centerR = (centerR - centerGap) / 2;

    const centerX: number =
      width / 2 - (centerR * count) / 2 - (centerGap * (count / 2)) / 2;
    const centerY: number = height / 2;

    return { cx: centerX, cy: centerY, r: centerR };
  }, [borderRadius, count, width, height]);

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        scale: interpolate(
          progress.current,
          [
            0.0,
            (index + 0.5) / (count + 1),
            (index + 1.0) / (count + 1),
            (index + 1.5) / (count + 1),
            1.0,
          ],
          [1.0, 1.36, 1.56, 1.06, 1.0]
        ),
      },
    ];
  }, [progress]);

  const opacityLocal = useComputedValue<number>(() => {
    if ((opacity?.current ?? -1) !== -1) {
      return opacity!.current;
    }
    return 1;
  }, [opacity]);

  return { cx, cy, r, transform, opacityLocal };
};

export default useRenderIndicator;
