import { Canvas, Circle, Fill, Group } from "@shopify/react-native-skia";
import React, { useEffect, useRef } from "react";
import { Colors } from "../../theme";
import useFlikerLoading from "./hooks/useFlikerLoading";

const FlickerLoading = () => {
  const size = 256;
  const ref = useRef(null)
  const r = size * 0.33;
  const strokeWidth = 10;
  const { animatedX, animatedXForMaskedView, animatedZIndex } =
    useFlikerLoading(r);

  return (
    <Canvas style={{ flex: 1 }} ref={ref}>
      {/* <Circle cx={r} cy={r} r={r} color="#51AFED" /> */}

      {/* The paint is inherited by the following sibling and descendants. */}

      {/* <Group color="lightblue" style="stroke" strokeWidth={10}>
  <Circle cx={r} cy={r} r={r } />
</Group> */}
      <Circle cx={animatedXForMaskedView} cy={r} r={r - 10} color="white" />
      <Group color="lightblue" style="stroke" strokeWidth={10}>
        <Circle cx={animatedXForMaskedView} cy={r} style="stroke" r={r - 10} />
        <Circle
          color={'black'}
          style="stroke"
          cx={animatedXForMaskedView}
          cy={r}
          r={r - 10}
          strokeWidth={strokeWidth}
        />
      </Group>
      <Circle cx={animatedX} cy={r} r={r - 5} color="red" />
      <Circle
        color={'white'}
        opacity={animatedZIndex}
        cx={animatedXForMaskedView}
        cy={r}
        r={r - 15}
        strokeWidth={strokeWidth}
      />
    </Canvas>
  );
};

export default FlickerLoading;
