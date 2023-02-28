import { Group } from '@shopify/react-native-skia';
import React from 'react';
import { useSkiaBaseIndicator } from './hooks';
import type {
  SkiaBaseIndicatorHookReturnType,
  SkiaBaseIndicatorPropsType,
} from './SkiaBaseIndicatorTypes';
import { defaultProps } from './SkiaBaseIndicatorTypes';

const SkiaBaseIndicator = ({
  count,
  ...rest
}: SkiaBaseIndicatorPropsType): React.ReactElement => {
  const { renderChildComponent }: SkiaBaseIndicatorHookReturnType =
    useSkiaBaseIndicator({ count, ...rest });

  return (
    <Group>{Array.from(new Array(count), renderChildComponent, this)}</Group>
  );
};

SkiaBaseIndicator.defaultProps = defaultProps;

export default SkiaBaseIndicator;
