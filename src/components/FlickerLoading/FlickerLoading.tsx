import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import React from "react";
import { Colors } from "../../theme";
import useFlikerLoading from "./hooks/useFlikerLoading";

const FlickerLoading = () => {
  const size = 256;
  const r = size * 0.33;
  const strokeWidth = 5;
  const { animatedX, animatedXForMaskedView, animatedZIndex } =
    useFlikerLoading(r);

  return (
    <Canvas style={{ flex: 1 }}>
      <Group color={Colors.black}>
        <Circle cx={animatedX} cy={r} r={r} />
        <Group style="stroke" strokeWidth={strokeWidth}>
          <Circle cx={animatedXForMaskedView} cy={r} r={r} />
        </Group>
      </Group>
    </Canvas>
  );
};

export default FlickerLoading;
