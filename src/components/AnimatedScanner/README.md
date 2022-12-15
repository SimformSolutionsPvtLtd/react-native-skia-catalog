# Animated Scanner

`AnimatedScanner` Component gives animation to user when they scan any document, QR code etc.

#### 🎬 Preview

---

|        Animated Scanner         |
| :-----------------------------: |
| ![alt tag](/assets/Scanner.gif) |

#### Default Usage

---

```jsx
import React from "react";
import { AnimatedScanner } from "react-native-skia-catalog";

const AnimatedScannerScreen = () => {
  return (
    <View style={styles.container}>
      <AnimatedScanner />
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

export default AnimatedScannerScreen;
```

#### Custom Usage

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { AnimatedScanner } from "react-native-skia-catalog";

const AnimatedScannerScreen = () => {
  return (
    <View style={styles.container}>
      <AnimatedScanner stopZooming={true} />
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

export default AnimatedScannerScreen;
```

#### 🎬 Custom Usage Preview

---

|                   Animated Scanner                   |
| :--------------------------------------------------: |
| ![alt tag](/assets/CustomUsageOfAnimatedScanner.gif) |

| Props            | Default | Type    | Description                                                     |
| :--------------- | :------ | :------ | :-------------------------------------------------------------- |
| stopZooming      | false   | boolean | `stopZooming` to stop outer zooming in `Animated Scanner`.      |
| initialZoomScale | 0.9     | number  | `initialZoomScale` use for outer component zooming effect.      |
| height           | 200     | number  | `height` to set `AnimatedScanner` component height.             |
| zoomingDelay     | 800     | number  | `zoomingDelay` use for outer component zoomingDelay.            |
| bordercolor      | #01579B | string  | `borderColor` use to give color for outer zooming component.    |
| borderRadius     | 10      | number  | `borderRadius` to set outer component border.                   |
| borderWidth      | 2       | number  | `borderWidth` set outer component borderWidth.                  |
| strokeColor      | red     | string  | `strokeColor` add vertical animation color.                     |
| strokeDelay      | 1400    | number  | `strokeDelay` delay in vertical animation.                      |
| strokeWidth      | 240     | number  | `strokeWidth` increase and decrease width of verticalAnimation. |

#### 🎬 Preview Example

---

[AnimatedScanner](/example/src/modules/AnimatedScanner/AnimatedScannerScreen.tsx)
