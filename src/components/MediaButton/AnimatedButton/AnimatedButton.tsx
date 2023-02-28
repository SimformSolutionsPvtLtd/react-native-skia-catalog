import {
  BlendColor,
  Group,
  Image,
  Paint,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import { Colors } from '../../../theme';
import type { AnimatedButtonPropsType } from './AnimatedButtonTypes';

const AnimatedButton = ({
  rotateButton,
  size,
  playButton,
  scaleButton,
  isPlayButton,
  reduceOpacity,
  raiseOpacity,
  pauseButton,
  canvasCentre,
}: AnimatedButtonPropsType): React.ReactElement => {
  return (
    <Group
      transform={rotateButton}
      origin={vec(canvasCentre, canvasCentre)}
      layer={
        <Paint>
          <BlendColor color={Colors.white} mode="srcIn" />
        </Paint>
      }>
      {playButton && (
        <Image
          height={size / 3}
          width={size / 3}
          image={playButton}
          x={size / 1.6}
          y={size / 1.714}
          origin={vec(canvasCentre, canvasCentre)}
          transform={scaleButton}
          opacity={isPlayButton ? reduceOpacity : raiseOpacity}
        />
      )}
      {pauseButton && (
        <Image
          height={size / 3}
          width={size / 3}
          image={pauseButton}
          x={size / 1.714}
          y={size / 1.714}
          origin={vec(canvasCentre, canvasCentre)}
          transform={scaleButton}
          opacity={isPlayButton ? raiseOpacity : reduceOpacity}
        />
      )}
    </Group>
  );
};

export default AnimatedButton;
