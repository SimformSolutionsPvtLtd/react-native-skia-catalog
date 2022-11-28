# Indicator

`Indicator` component can be used while fetching data from API or also can be used when a user navigates between screens

#### 🎬 Preview

|             Indicator             |
| :-------------------------------: |
| ![alt_tag](/assets/Indicator.gif) |

### Usage

Different types of variants are present in the `Indicator` component. The Indicator component's usage is demonstrated below.

---

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { IndicatorEnum, SkiaIndicator } from "react-native-skia-catalog";

const IndicatorScreen = () => {
  return (
    <View style={styles.container}>
      <SkiaIndicator
        type={IndicatorEnum.BALL}
        color="#FF5252"
        width={60}
        height={60}
        borderRadius={30}
        animating={true}
        progressDuration={800}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IndicatorScreen;
```

#### Properties

| Props            | Default               | Type                                                                                                                             | Description                                                                                                                                                                             |
| :--------------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             |                       | BALL / BAR / CIRCLE /DOT / MATERIAL / PAC_MAN / PULSE / SKYPE / UI_ACTIVITY / WAVE / BREATHING / ROTATION_CIRCLE / ROTATION_HOLE | `type` of indicator.                                                                                                                                                                    |
| color            | `#E65100`             | string / number / Float32Array                                                                                                   | `color` of indicator.                                                                                                                                                                   |
| width            |                       | number                                                                                                                           | `width` of indicator.                                                                                                                                                                   |
| height           |                       | number                                                                                                                           | `height` of indicator.                                                                                                                                                                  |
| borderRadius     |                       | number                                                                                                                           | `borderRadius` of indicator.                                                                                                                                                            |
| animating        |                       | boolean                                                                                                                          | `animating` use for animate or stop indicator.                                                                                                                                          |
| progressDuration |                       | number                                                                                                                           | Speed of indicator.                                                                                                                                                                     |
| animationEasing  |                       | (arg: number) => number                                                                                                          | This functions specify the rate of change of a parameter over time.                                                                                                                     |
| count            |                       | number                                                                                                                           | Number of dots or line in indicator. It does not apply to `PULSE BALL/ BREATHING/ MATERIAL/ PAC MAN/ CIRCLE/ ROTATION CIRCLE` Indicator.                                                |
| onTouch          |                       | TouchHandler                                                                                                                     | This callback function is triggered when you press the indicator.                                                                                                                       |
| opacity          |                       | SkiaMutableValue`<number>`                                                                                                       | Opacity of indicator.                                                                                                                                                                   |
| style            |                       | ViewStyle                                                                                                                        | This style is apply to the indicator component.                                                                                                                                         |
| minScale         | `0.2`                 | number                                                                                                                           | It is minimum scale value of the dot in `SKYPE` indicator.                                                                                                                              |
| maxScale         | `1`                   | number                                                                                                                           | It is maximum scale value of the dot in `SKYPE` indicator.                                                                                                                              |
| trackWidth       |                       | number                                                                                                                           | Stroke width in outline type circle Indicator. In `UI_ACTIVITY` indicator, it's responsible for line width.                                                                             |
| waveFactor       | `0.54`                | number                                                                                                                           | It use for scaling `WAVE` animation.                                                                                                                                                    |
| waveMode         | `"fill"`              | "fill" / "outline"                                                                                                               | It determines how a wave circle looks, whether it fills or outlines in `WAVE` indicator.                                                                                                |
| direction        | `"counter-clockwise"` | "clockwise" / "counter-clockwise"                                                                                                | It controls whether the `MATERIAL` indicator moves in a clockwise or counterclockwise way. It is also responsible for hole movement in `ROTATION_HOLE` and `ROTATION_CIRCLE` indicator. |
| reverse          | `false`               | boolean                                                                                                                          | It is iresponsible for the `DOT` indicator's movement direction. whether it is from left to right or from right to left.                                                                |
| circleColor      | `#E65100`             | string / Float32Array / number                                                                                                   | It is color of hole in `ROTATION_HOLE` and `ROTATION_CIRCLE` indicator.                                                                                                                 |

#### 🎬 Preview Example

---

[Indicator](/example/src/modules/Indicator/IndicatorScreen.tsx)
