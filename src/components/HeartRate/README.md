# Heart Rate

The `HeartRate` component animates pulse over a grid.

- `HeartRate` component has two different variants: `Default` and `FollowUP`.

#### 🎬 Preview

---

|             HeartRate             |
| :-------------------------------: |
| ![alt tag](/assets/HeartRate.gif) |

#### 1. Default Usage

---

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { HeartRate, HeartRateEnum } from "react-native-skia-catalog";

const HeartRateScreen = () => (
  <View style={styles.container}>
    <HeartRate />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default HeartRateScreen;
```

#### Custom Usage

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { HeartRate, HeartRateEnum } from "react-native-skia-catalog";

const HeartRateScreen = () => (
  <View style={styles.container}>
    <HeartRate
      heartRateType={HeartRateEnum.FOLLOWUP}
      color={["#472183", "#86C8BC"]}
      isGridVisible={false}
      pulseWidth={12}
      speed={2500}
      size={260}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HeartRateScreen;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomHeartRate.gif)

#### Properties

| Props         | Default                        | Type                   | Description                                                                                      |
| :------------ | :----------------------------- | :--------------------- | :----------------------------------------------------------------------------------------------- |
| heartRateType | "Default"                      | "Default" / "FollowUp" | `Type` of `HeartRate`. HeartRateEnum can be used to specify the type. Ex. HeartRateEnum.FOLLOWUP |
| size          | 200                            | number                 | `Height` of `HeartRate`. Note: width will be calculated as per height.                           |
| color         | #ff6961                        | string / string[]      | `Color` of `pulse`. If a color passes through an array, a gradient color effect will appear.     |
| gridColor     | #E6E6FA99                      | string                 | `Color` of `grid`.                                                                               |
| speed         | Default: 2000 & FollowUp: 4000 | number                 | `Speed` of `pulse`.                                                                              |
| isGridVisible | true                           | boolean                | It decides whether to `enable` or `disable` the grid behind the `pulse`.                         |
| pulseWidth    | 6                              | number                 | `Width` of `pulse`.                                                                              |

#### 🎬 Preview Example

---

[Heart Rate](/example/src/modules/HeartRate/HeartRateScreen.tsx)
