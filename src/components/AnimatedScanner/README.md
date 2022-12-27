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

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { AnimatedScanner } from "react-native-skia-catalog";

const AnimatedScannerScreen = () => (
  <View style={styles.container}>
     <AnimatedScanner
          height={350}
          borderColor={'#000000'}
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

|               Animated Scanner                |
| :-------------------------------------------: |
| ![alt tag](/assets/CustomAnimatedScanner.gif) |

| Props            | Default | Type    | Description                                                     |
| :--------------- | :------ | :------ | :-------------------------------------------------------------- |
| stopZooming      | false   | boolean | `stopZooming` to stop outer zooming in `Animated Scanner`.      |
| initialZoomScale | 0.9     | number  | `initialZoomScale` use for outer component zooming effect.      |
| height           | 200     | number  | `height` to set `AnimatedScanner` component height.             |
| zoomingDelay     | 800     | number  | `zoomingDelay` use for outer component zoomingDelay.            |
| borderColor      | #01579B | string  | `borderColor` use to give color for outer zooming component.    |
| borderRadius     | 10      | number  | `borderRadius` to set outer component border.                   |
| borderWidth      | 2       | number  | `borderWidth` set outer component borderWidth.                  |
| strokeColor      | #FF0000 | string  | `strokeColor` add vertical animation color.                     |
| strokeDelay      | 1400    | number  | `strokeDelay` delay in vertical animation.                      |
| strokeWidth      | 240     | number  | `strokeWidth` increase and decrease width of verticalAnimation. |

> Note: initialZoomScale has a scale from 0 to 1. When the scale value is set to 1, zooming will stop and when it is set to 0, zooming will begin from the centre.

#### 🎬 Preview Example

---

[AnimatedScanner](/example/src/modules/AnimatedScanner/AnimatedScannerScreen.tsx)
