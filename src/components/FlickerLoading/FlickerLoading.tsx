import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import React, { useRef } from "react";
import useFlikerLoading from "./hooks/useFlikerLoading";

const renderExtraCircles = (
  animatedXForMaskedView,
  r,
  strokeWidth,
  animatedZIndex = 1
) => {
  return (
    <>
      <Circle cx={animatedXForMaskedView} cy={r} r={r - 10} color="white" 
        opacity={animatedZIndex}
        />
      <Group color="black" style="stroke" strokeWidth={10}>
        <Circle cx={animatedXForMaskedView} cy={r} style="stroke" r={r - 10} 
        
          opacity={animatedZIndex}
          />
        <Circle
          color={'black'}
          style="stroke"
          opacity={animatedZIndex}
          cx={animatedXForMaskedView}
          cy={r}
          r={r - 10}
          strokeWidth={strokeWidth}
        />
      </Group>
    </>
  );
};
const FlickerLoading = () => {
  const size = 256;
  const ref = useRef(null)
  const r = size * 0.33;
  const strokeWidth = 10;
  const { animatedX, animatedXForMaskedView, animatedZIndex } =
    useFlikerLoading(r);

  return (
    <Canvas style={{ flex: 1 }} ref={ref}>      
      {renderExtraCircles(animatedXForMaskedView, r, strokeWidth)}
      <Circle cx={animatedX} cy={r} r={r - 5} color="red" />
      {renderExtraCircles(
        animatedXForMaskedView,
        r,
        strokeWidth,
        animatedZIndex
      )}
    </Canvas>
  );
};

export default FlickerLoading;
