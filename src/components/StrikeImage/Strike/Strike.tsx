import { Line } from '@shopify/react-native-skia';
import React from 'react';
import { Colors } from '../../../theme';
import type { StrikePropsType } from './StrikeTypes';

const Strike = ({
  primaryLineStartingCoordinate,
  secondaryLineStartingCoordinate,
  primaryLineEndingCoordinate,
  secondaryLineEndingCoordinate,
  primaryLineColor,
  singleLineStrokeWidth,
}: StrikePropsType): React.ReactElement => {
  return (
    <>
      <Line
        p1={primaryLineStartingCoordinate}
        p2={primaryLineEndingCoordinate}
        color={primaryLineColor}
        strokeWidth={singleLineStrokeWidth}
      />
      <Line
        p1={secondaryLineStartingCoordinate}
        p2={secondaryLineEndingCoordinate}
        color={Colors.white}
        strokeWidth={singleLineStrokeWidth}
      />
    </>
  );
};

export default Strike;
