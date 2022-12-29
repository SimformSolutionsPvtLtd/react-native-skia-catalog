# Animated Scanner

`AnimatedScanner` component gives animation to user when they scan any document, QR code etc.

#### 🎬 Preview

---

|                AnimatedScanner                 |
| :--------------------------------------------: |
| ![alt tag](/assets/DefaultAnimatedScanner.gif) |

#### Default Usage

---

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { AnimatedScanner } from "react-native-skia-catalog";

const AnimatedScannerScreen = () => (
  <View style={styles.container}>
    <AnimatedScanner />
  </View>
);

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

---

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { AnimatedScanner } from "react-native-skia-catalog";

const AnimatedScannerScreen = () => (
  <View style={styles.container}>
    <AnimatedScanner
      height={350}
      borderColor={"#000000"}
      borderWidth={8}
      borderRadius={50}
      strokeWidth={250}
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

export default AnimatedScannerScreen;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomAnimatedScanner.gif)

#### Properties

| Props            | Default | Type    | Description                                                            |
| :--------------- | :------ | :------ | :--------------------------------------------------------------------- |
| stopZooming      | false   | boolean | `stopZooming` to stop outer zooming in `Animated Scanner`.             |
| initialZoomScale | 0.9     | number  | `initialZoomScale` use for outer `zooming effect`.                     |
| height           | 200     | number  | `height` of `AnimatedScanner`.                                         |
| zoomingDelay     | 800     | number  | `zoomingDelay` use for outer zoomingDelay.                             |
| borderColor      | #01579B | string  | `borderColor` use to give `color` for outer `zooming line`.            |
| borderRadius     | 10      | number  | `borderRadius` to set `outer line` border.                             |
| borderWidth      | 2       | number  | `borderWidth` set `outer line` borderWidth.                            |
| strokeColor      | #FF0000 | string  | `Color` of the `vertical animated line`.                               |
| strokeDelay      | 1400    | number  | `strokeDelay` delay in `vertical animation`.                           |
| strokeWidth      | 240     | number  | `strokeWidth` increase and decrease width of `vertical animated line`. |

> Note: initialZoomScale has a scale from 0 to 1. When the scale value is set to 1, zooming will stop and when it is set to 0, zooming will begin from the centre.

#### 🎬 Preview Example

---

[Animated Scanner](/example/src/modules/AnimatedScanner/AnimatedScannerScreen.tsx)
