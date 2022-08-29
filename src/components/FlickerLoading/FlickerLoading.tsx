import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import React from "react";
import { Colors } from "../../theme";

const FlickerLoading = () => {
  const size = 256;
  const r = size * 0.33;
  const strokeWidth = 5;

  return (
    <Canvas style={{ flex: 1 }}>
      <Group color={Colors.black}>
        <Circle cx={r} cy={r} r={r} />
        <Group style="stroke" strokeWidth={strokeWidth}>
          <Circle cx={3 * r} cy={r} r={r} />
        </Group>
      </Group>
    </Canvas>
  );
};

export default FlickerLoading;
