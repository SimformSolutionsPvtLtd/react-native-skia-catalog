# Strike Image

The `StrikeImage` component animates a strike over any image to indicate on/off states.

#### 🎬 Preview

---

|                Strike Image                |
| :----------------------------------------: |
| ![alt tag](/assets/StrikeImageDefault.gif) |

#### Default Usage

---

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { StrikeImage } from "react-native-skia-catalog";

const StrikeImageScreen = () => {
  return (
    <View style={styles.container}>
      <StrikeImage />
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

export default StrikeImageScreen;
```

#### Custom Usage

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { StrikeImage } from "react-native-skia-catalog";

const StrikeImageScreen = () => (
  <View style={styles.container}>
    <StrikeImage
      size={300}
      strikeWidth={55}
      color="#E65100"
      source="https://cdn-icons-png.flaticon.com/512/2111/2111425.png"
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

export default StrikeImageScreen;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomUsageOfStrikeImage.gif)

#### Properties

| Props          | Default    | Type                                | Description                                                              |
| :------------- | :--------- | :---------------------------------- | :----------------------------------------------------------------------- |
| size           | `240`      | number                              | custom size of `image`.                                                  |
| color          | `#59abdd`  | string                              | custom color of image and strike.                                        |
| strikeWidth    | `40`       | number                              | custom width of strike.                                                  |
| source         | `string`   | ImageSourcePropType / string        | source of Image.                                                         |
| onChangeStrike | `() => {}` | (strikeVisibility: boolean) => void | callback function that gives true or false value of strike in parameter. |

#### 🎬 Preview Example

---

[ThemeSwitch](/example/src/modules/StrikeImage/StrikeImageScreen.tsx)