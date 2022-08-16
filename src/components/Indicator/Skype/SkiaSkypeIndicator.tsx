import { Circle, Group } from "@shopify/react-native-skia";
import React from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaSkypeIndicatorTypes";
import type {
  RenderIndicatorPropsType,
  SkiaSkypeIndicatorPropsType,
  RenderIndicatorHookReturnType,
} from "./SkiaSkypeIndicatorTypes";
import { IndicatorEnum } from "../SkiaIndicatorTypes";
import { useRenderIndicator } from "./hooks";

const RenderIndicator = ({
  color,
  ...rest
}: RenderIndicatorPropsType): JSX.Element => {
  const {
    newCX,
    newCY,
    r,
    newOrigin,
    transform,
    opacityLocal,
  }: RenderIndicatorHookReturnType = useRenderIndicator({ color, ...rest });

  return (
    <Group transform={transform} origin={newOrigin}>
      <Circle
        cx={newCX}
        cy={newCY}
        r={r / 5}
        color={color}
        opacity={opacityLocal}
      />
    </Group>
  );
};

const SkiaSkypeIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  minScale,
  maxScale,
  ...rest
}: SkiaSkypeIndicatorPropsType): JSX.Element => {
  return (
    <Group
      transform={[{ rotate: -1 }]}
      origin={{
        x: width / 2,
        y: height / 2,
      }}
    >
      <SkiaBaseIndicator
        renderComponent={(args: RenderComponentArgType) => (
          <RenderIndicator
            {...args}
            {...{
              width,
              height,
              borderRadius,
              opacity,
              animating,
              progressDuration,
              color,
              minScale,
              maxScale,
            }}
            key={`${IndicatorEnum.SKYPE}-${args.index}`}
          />
        )}
        {...rest}
        animating={animating}
        progressDuration={progressDuration}
      />
    </Group>
  );
};

SkiaSkypeIndicator.defaultProps = defaultProps;

export default SkiaSkypeIndicator;
