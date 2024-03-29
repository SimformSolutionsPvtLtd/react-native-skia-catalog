import {
  BlendColor,
  Canvas,
  Fill,
  Group,
  Image,
  Paint,
} from '@shopify/react-native-skia';
import React from 'react';
import { Colors } from '../../../src/theme';
import { Images } from '../../assets';
import { useStrikeImage } from './hooks';
import { Strike } from './Strike';
import type { StrikeImagePropsType } from './StrikeImageTypes';

const StrikeImage = ({
  size = 240,
  color = Colors.cyan,
  source = Images.camera,
  strikeWidth,
  onChangeStrike = () => {},
}: StrikeImagePropsType): React.ReactElement => {
  const {
    primaryLineEndingCoordinate,
    secondaryLineEndingCoordinate,
    image,
    opacity,
    primaryLineStartingCoordinate,
    secondaryLineStartingCoordinate,
    singleLineStrokeWidth,
    touchHandler,
    dimension,
  } = useStrikeImage(source, size, strikeWidth, onChangeStrike);

  return (
    <Canvas
      style={{
        height: dimension,
        width: dimension,
      }}
      onTouch={touchHandler}>
      {image && (
        <Group
          layer={
            <Paint>
              <BlendColor color={color} mode="srcIn" />
            </Paint>
          }>
          <Image
            image={image}
            fit="contain"
            width={dimension}
            height={dimension}
          />
        </Group>
      )}
      <Strike
        primaryLineColor={color}
        {...{
          primaryLineEndingCoordinate,
          secondaryLineEndingCoordinate,
          singleLineStrokeWidth,
          primaryLineStartingCoordinate,
          secondaryLineStartingCoordinate,
        }}
      />
      <Fill opacity={opacity} color={Colors.white} />
    </Canvas>
  );
};

export default StrikeImage;
