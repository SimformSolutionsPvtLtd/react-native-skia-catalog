# Media Button

`MediaButton` component comes with `custom animation` and a `customized pulse` effect around the button.

#### 🎬 Preview

---

|             MediaButton             |
| :---------------------------------: |
| ![alt tag](/assets/MediaButton.gif) |

#### Default Usage

---

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { MediaButton } from "react-native-skia-catalog";

const MediaButtonScreen = () => (
  <View style={styles.container}>
    <MediaButton />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MediaButtonScreen;
```

#### Custom Usage

---

```jsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { ButtonEnum, MediaButton } from "react-native-skia-catalog";

const MediaButtonScreen = () => (
  <View style={styles.container}>
    <MediaButton
      buttonType={ButtonEnum.CIRCLE}
      size={200}
      pulseSpeed={2000}
      speed={1000}
      pulseStart={0.2}
      pulseEnd={0.7}
      color={"#FF5252"}
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

export default MediaButtonScreen;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomMediaButton.gif)

#### Properties


| Props            | Default  | Type                              | Description                                                                                                 |
| :--------------- | :------- | :-------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| size             | 110      | number                            | `Size` of `Button`.                                                                                         |
| color            | #E65100  | string                            | `Color` of `Button`.                                                                                        |
| speed            | 800      | number                            | `Speed` of icon `rotation`.                                                                                 |
| buttonType       | "CIRCLE" | "CIRCLE" / "RECTANGLE" / "SQUARE" | `Type` of `Button`. Note: ButtonEnum can be used to specify the type. Ex. ButtonEnum.SQUARE.                |
| style            | {}       | ViewStyle                         | Container `style`.                                                                                            |
| playImageSource  | -        | ImageSourcePropType               | `Play` image `source` path.                                                                                 |
| pauseImageSource | -        | ImageSourcePropType               | `Pause` image `source` path.                                                                                |
| onPlayPress      | () => {} | function                          | `Play callback` function that invoke on pressing play button.                                               |
| onPausePress     | () => {} | function                          | `Pause callback` function that invoke on pressing pause button.                                             |
| pulseStart       | 0        | number                            | Pulse `starting scale` value.                                                                               |
| pulseEnd         | 1        | number                            | Pulse `ending scale` value.                                                                                 |
| pulseSpeed       | 1800     | number                            | `Pulse` effect `speed`.                                                                                     |
| pulseDisable     | false    | number                            | It `disable` pulse effect, if `true` value was passed. Note: In Rectangular Media Button Pulse is disabled. |

> NOTE: pulseStart & pulseEnd are scale values. Minimum scale value is zero. Maximum scale value is one. When value is 0, the pulse begins from the button. If pulseStart exceeds pulseEnd, the direction of the pulse will change.

#### 🎬 Preview Example

---

[Media Button](/example/src/modules/MediaButton/MediaButtonScreen.tsx)
