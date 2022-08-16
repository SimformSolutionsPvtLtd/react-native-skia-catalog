import { Group } from "@shopify/react-native-skia";
import React from "react";
import { defaultProps } from "./SkiaBaseIndicatorTypes";
import type {
  SkiaBaseIndicatorPropsType,
  SkiaBaseIndicatorHookReturnType,
} from "./SkiaBaseIndicatorTypes";
import { useSkiaBaseIndicator } from "./hooks";

const SkiaBaseIndicator = ({
  count,
  ...rest
}: SkiaBaseIndicatorPropsType): JSX.Element => {
  const { renderChildComponent }: SkiaBaseIndicatorHookReturnType =
    useSkiaBaseIndicator({ count, ...rest });

  return (
    <Group>{Array.from(new Array(count), renderChildComponent, this)}</Group>
  );
};

SkiaBaseIndicator.defaultProps = defaultProps;

export default SkiaBaseIndicator;
