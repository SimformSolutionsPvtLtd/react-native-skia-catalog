import { Canvas, LinearGradient, vec } from '@shopify/react-native-skia';
import React from 'react';
import { Colors } from '../../theme';
import { FollowUpHeartRate } from './FollowUp';
import { Grid } from './Grid';
import { HeartRateEnum, type HeartRatePropsType } from './HeartRateTypes';
import { SimpleHeartRate } from './Simple';

const HeartRate = ({
  heartRateType = HeartRateEnum.DEFAULT,
  size = 200,
  color = Colors.pastelRed,
  gridColor = Colors.lightPurple60,
  isGridVisible = true,
  speed,
  pulseWidth,
}: Partial<HeartRatePropsType>): React.ReactElement => {
  const canvasWidth: number =
    heartRateType === HeartRateEnum.DEFAULT ? size * 1.75667 : size * 1.5;
  const pulseColor: string[] = typeof color === 'string' ? [color] : color;
  const pulseStrokeWidth: number = pulseWidth ?? size * 0.03;
  const canvasVerticalMidPoint: number = size * 0.5625;
  const defaultSpeed: number =
    heartRateType === HeartRateEnum.DEFAULT ? 2000 : 3500;

  return (
    <Canvas
      style={{
        height: size,
        width: canvasWidth,
      }}>
      {isGridVisible && <Grid {...{ size, canvasWidth, gridColor }} />}
      <LinearGradient
        start={vec(0, canvasWidth)}
        end={vec(canvasWidth, canvasWidth)}
        colors={pulseColor}
      />
      {heartRateType === HeartRateEnum.DEFAULT && (
        <SimpleHeartRate
          {...{
            canvasWidth,
            size,
            canvasVerticalMidPoint,
            speed: speed ?? defaultSpeed,
            pulseWidth: pulseStrokeWidth,
          }}
        />
      )}
      {heartRateType === HeartRateEnum.FOLLOWUP && (
        <FollowUpHeartRate
          {...{
            canvasWidth,
            size,
            canvasVerticalMidPoint,
            speed: speed ?? defaultSpeed,
            pulseWidth: pulseStrokeWidth,
          }}
        />
      )}
    </Canvas>
  );
};

export default HeartRate;
