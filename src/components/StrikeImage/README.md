# Strike Image

The `StrikeImage` component animates a strike over any image to indicate on/off states.

#### 🎬 Preview

---

|                StrikeImage                 |
| :----------------------------------------: |
| ![alt tag](/assets/DefaultStrikeImage.gif) |

#### Default Usage

---

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { StrikeImage } from "react-native-skia-catalog";

const StrikeImageScreen = () => (
  <View style={styles.container}>
    <StrikeImage />
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

#### Custom Usage

---

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { StrikeImage } from "react-native-skia-catalog";

const StrikeImageScreen = () => (
  <View style={styles.container}>
    <StrikeImage
      size={300}
      strikeWidth={55}
      color={"#E65100"}
      source={"https://cdn-icons-png.flaticon.com/512/2111/2111425.png"}
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

![alt tag](/assets/CustomStrikeImage.gif)

#### Properties

| Props          | Default  | Type                                | Description                                                                          |
| :------------- | :------- | :---------------------------------- | :----------------------------------------------------------------------------------- |
| size           | 240      | number                              | `Size` of `Image`.                                                                   |
| color          | #59abdd  | string                              | `Color` of `Image` and `Strike`.                                                     |
| strikeWidth    | 40       | number                              | `Width` of `Strike`.                                                                 |
| source         | string   | ImageSourcePropType / string        | `Source` of `Image`.                                                                 |
| onChangeStrike | () => {} | (strikeVisibility: boolean) => void | `Callback` function that gives `visibility` (true / false) of `Strike` in parameter. |

#### 🎬 Preview Example

---

[Strike Image](/example/src/modules/StrikeImage/StrikeImageScreen.tsx)
