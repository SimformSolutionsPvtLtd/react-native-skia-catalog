import React, { type FC } from "react";
import { Images } from "../../assets";
import { Colors } from "../../theme";
import {
  CheckMarkEnum,
  UseAnimatedCheckMarkReturnType,
  type AnimatedCheckMarkTypes,
} from "./AnimatedCheckMarkTypes";
import { CircularCheckMark } from "./CircularCheckMark";
import { FadeCheckMark } from "./FadeCheckMark";
import { useAnimatedCheckMark } from "./hooks";
import { SimpleCheckMark } from "./SimpleCheckMark";

const AnimatedCheckMark: FC<Partial<AnimatedCheckMarkTypes>> = ({
  size = 100,
  checkMarkType = CheckMarkEnum.SIMPLE,
  circleOneColor = Colors.blue700,
  centerImageColor = Colors.white,
  speed = 2500,
  centerImageSource = Images.check,
  circleTwoColor = Colors.blue700,
  circleParticleColor = Colors.blue700,
  starParticleColor = Colors.blue700,
  showParticle = false,
  multiColor = false,
  borderColor = Colors.blue700,
  topBorderColor = Colors.pink400,
  rightBorderColor = Colors.blue700,
  bottomBorderColor = Colors.brightOrange,
  leftBorderColor = Colors.mayaBlue,
}): React.ReactElement => {
  const {
    value,
    centerImage,
    centerImageOpacity,
    circleOneScale,
  }: UseAnimatedCheckMarkReturnType = useAnimatedCheckMark(
    speed,
    centerImageSource
  );

  return (
    <>
      {checkMarkType === CheckMarkEnum.SIMPLE && (
        <SimpleCheckMark
          {...{
            size,
            circleOneColor,
            centerImageColor,
            value,
            centerImage,
            circleOneScale,
          }}
        />
      )}
      {checkMarkType === CheckMarkEnum.FADE && (
        <FadeCheckMark
          {...{
            value,
            size,
            centerImageColor,
            circleOneColor,
            circleTwoColor,
            circleParticleColor,
            starParticleColor,
            showParticle,
            centerImage,
            centerImageOpacity,
            circleOneScale,
          }}
        />
      )}
      {checkMarkType === CheckMarkEnum.CIRCULAR && (
        <CircularCheckMark
          {...{
            size,
            value,
            centerImage,
            centerImageOpacity,
            centerImageColor,
            multiColor,
            borderColor,
            topBorderColor,
            rightBorderColor,
            bottomBorderColor,
            leftBorderColor,
          }}
        />
      )}
    </>
  );
};

export default AnimatedCheckMark;
