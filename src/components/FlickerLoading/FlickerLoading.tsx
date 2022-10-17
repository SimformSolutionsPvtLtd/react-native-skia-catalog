import { Canvas, Circle, Group, SkiaValue, Transforms2d } from "@shopify/react-native-skia";
import React, { useRef } from "react";
import useFlikerLoading from "./hooks/useFlikerLoading";

const renderExtraCircles = (
  transform: Transforms2d | SkiaValue<Transforms2d | undefined> | undefined,
  r: number | SkiaValue<number>,
  strokeWidth: number | SkiaValue<number | undefined> | undefined,
  animatedZIndex: number | SkiaValue<number | undefined> | undefined = 1
) => {
  return (
    <Group transform={transform} opacity={animatedZIndex}>
      <Circle cy={r} r={r - 10} color="white" opacity={animatedZIndex}/>
      <Group color="black" style="stroke" strokeWidth={10} opacity={animatedZIndex}>
        <Circle
          cy={r}
          style="stroke"
          r={r - 10}
          opacity={animatedZIndex}
        />
        <Circle
          color={'black'}
          style="stroke"
          opacity={animatedZIndex}
          cy={r}
          r={r - 10}
          strokeWidth={strokeWidth}
        />
      </Group>
    </Group>
  );
};
const FlickerLoading = () => {
  const size = 256;
  const ref = useRef(null)
  const r = size * 0.33;
  const strokeWidth = 10;
  const {
    animatedZIndex,
    mainCircleValues,
    transform,
  } = useFlikerLoading(r);

  return (
    <Canvas
      ref={ref}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      {renderExtraCircles(transform, r, strokeWidth)}
      <Group transform={mainCircleValues}>
        <Circle cy={r} r={r - 5} color="red" />
      </Group>
      {renderExtraCircles(
        transform,
        r,
        strokeWidth,
        animatedZIndex
      )}
    </Canvas>
  );
};

export default FlickerLoading;
