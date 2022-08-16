import { Circle, Group, Path } from "@shopify/react-native-skia";
import React from "react";
import { SkiaBaseIndicator } from "../Base";
import type { RenderComponentArgType } from "../Base";
import { defaultProps } from "./SkiaPacmanIndicatorTypes";
import type {
  RenderIndicatorPropsType,
  SkiaPacmanIndicatorPropsType,
  RenderBlockHookReturnType,
  RenderIndicatorHookReturnType,
} from "./SkiaPacmanIndicatorTypes";
import { IndicatorEnum } from "../SkiaIndicatorTypes";
import { useRenderBlock, useRenderIndicator } from "./hooks";

const RenderBlock = ({
  index,
  color,
  ...rest
}: RenderIndicatorPropsType): JSX.Element => {
  const { cx, cy, r, transform, opacityLocal }: RenderBlockHookReturnType =
    useRenderBlock({ index, color, ...rest });

  return (
    <Group
      transform={transform}
      key={`Block-${index}`}
      origin={{ x: cx, y: cy }}
    >
      <Circle cx={cx} cy={cy} r={r} color={color} opacity={opacityLocal} />
    </Group>
  );
};

const RenderIndicator = ({
  index,
  count,
  progress,
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  ...rest
}: RenderIndicatorPropsType): JSX.Element => {
  const { r, path, opacityLocal }: RenderIndicatorHookReturnType =
    useRenderIndicator({
      index,
      count,
      progress,
      width,
      height,
      borderRadius,
      opacity,
      animating,
      progressDuration,
      color,
      ...rest,
    });

  if (index > 1) {
    return (
      <RenderBlock
        {...{
          index,
          count,
          progress,
          width,
          height,
          borderRadius,
          opacity,
          animating,
          progressDuration,
          color,
        }}
      />
    );
  }

  return (
    <Group key={index} origin={{ x: r, y: r }}>
      <Path style={"fill"} path={path} color={color} opacity={opacityLocal} />
    </Group>
  );
};

const SkiaPacmanIndicator = ({
  width,
  height,
  borderRadius,
  opacity,
  animating,
  progressDuration,
  color,
  ...rest
}: SkiaPacmanIndicatorPropsType): JSX.Element => {
  return (
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
          }}
          key={`${IndicatorEnum.PAC_MAN}-${args.index}`}
        />
      )}
      {...rest}
      count={5}
      animating={animating}
      progressDuration={progressDuration}
    />
  );
};

SkiaPacmanIndicator.defaultProps = defaultProps;

export default SkiaPacmanIndicator;
