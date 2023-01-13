import { BlendColor, Group, Paint, Path } from '@shopify/react-native-skia';
import React from 'react';
import type { WifiSignalsProps } from './InnerWifiSignalTypes';

const InnerWifiSignal = ({
  size,
  opacityOfWifiWave,
  wifiWaveColor,
  curvePath,
}: WifiSignalsProps): React.ReactElement => {
  return (
    <Group
      layer={
        <Paint opacity={opacityOfWifiWave}>
          <BlendColor color={wifiWaveColor} mode="srcIn" />
        </Paint>
      }>
      <Path
        path={curvePath}
        style={'stroke'}
        strokeWidth={size * 0.031428}
        start={0.5}
        end={0.61}
        strokeCap={'round'}
      />
      <Path
        path={curvePath}
        style={'stroke'}
        strokeWidth={size * 0.031428}
        start={0.013}
        end={0.15}
        strokeCap={'round'}
      />
    </Group>
  );
};

export default InnerWifiSignal;
