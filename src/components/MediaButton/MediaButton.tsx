import { Canvas, Rect } from "@shopify/react-native-skia";
import React, { FC } from "react";
import { Images } from "../../assets";
import { Colors } from "../../theme";
import { AnimatedButton } from "./AnimatedButton";
import { CircularButton } from "./CircularButton";
import { useMediaButton } from "./hooks";
import {
  ButtonEnum,
  type MediaButtonPropsType,
  type MediaButtonReturnType,
} from "./MediaButtonTypes";
import { SquareButton } from "./SquareButton";

const MediaButton: FC<Partial<MediaButtonPropsType>> = ({
  size = 110,
  color = Colors.orange,
  speed = 800,
  pulseDisable = false,
  pulseSpeed = 1800,
  buttonType = ButtonEnum.CIRCLE,
  style = {},
  onPlayPress = () => {},
  onPausePress = () => {},
  pulseStart = 0,
  pulseEnd = 1,
  playImageSource = Images.play,
  pauseImageSource = Images.pause,
}) => {
  const {
    circularPulse,
    isPlayButton,
    pauseButton,
    playButton,
    raiseOpacity,
    reduceOpacity,
    rotateButton,
    scaleButton,
    squarePulse,
    touchHandler,
    canvasSize,
    pulseOpacity,
    canvasCentre,
    buttonStartingPoint,
    canvasStyle,
  }: MediaButtonReturnType = useMediaButton({
    pulseSpeed,
    size,
    speed,
    onPlayPress,
    onPausePress,
    pulseStart,
    pulseEnd,
    playImageSource,
    pauseImageSource,
    style,
  });

  return (
    <Canvas style={canvasStyle} onTouch={touchHandler}>
      {buttonType === ButtonEnum.CIRCLE && (
        <CircularButton
          {...{
            color,
            pulseDisable,
            circularPulse,
            size,
            pulseOpacity,
            canvasCentre,
          }}
        />
      )}
      {buttonType === ButtonEnum.SQUARE && (
        <SquareButton
          {...{
            color,
            pulseDisable,
            size,
            squarePulse,
            canvasSize,
            pulseOpacity,
            canvasCentre,
            buttonStartingPoint,
          }}
        />
      )}
      {buttonType === ButtonEnum.RECTANGLE && (
        <Rect
          x={0}
          y={buttonStartingPoint}
          height={size}
          width={canvasSize}
          color={color}
        />
      )}
      <AnimatedButton
        {...{
          isPlayButton,
          pauseButton,
          playButton,
          raiseOpacity,
          reduceOpacity,
          rotateButton,
          scaleButton,
          size,
          canvasCentre,
        }}
      />
    </Canvas>
  );
};

export default MediaButton;
