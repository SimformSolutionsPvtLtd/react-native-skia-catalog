# Animated Switch

`SkiaThemeSwitch` component can be used to provide a amazing animation when user changing the state of system functionalities and preferences using Toggle Switch.

#### 🎬 Preview

---

|               AnimatedSwitch               |
| :----------------------------------------: |
| ![alt tag](/assets/DefaultThemeSwitch.gif) |

#### Default Usage

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { SkiaThemeSwitch } from "react-native-skia-catalog";

const AnimatedSwitchScreen = () => (
  <View style={styles.skiaThemeSwitchView}>
    <SkiaThemeSwitch />
  </View>
);

const styles = StyleSheet.create({
  skiaThemeSwitchView: {
    flex: 1,
    padding: 20,
  },
});

export default AnimatedSwitchScreen;
```

#### Custom Usage

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { SkiaThemeSwitch } from "react-native-skia-catalog";

const AnimatedSwitchScreen = () => (
  <View style={styles.skiaThemeSwitchView}>
    <SkiaThemeSwitch
      size={340}
      lightThemeColor={`#59abdd`}
      darkThemeColor={`#0f1341`}
    />
  </View>
);

const styles = StyleSheet.create({
  skiaThemeSwitchView: {
    flex: 1,
  },
});

export default AnimatedSwitchScreen;
```

#### 🎬 Custom Usage Preview

---

|              Animated Switch              |
| :---------------------------------------: |
| ![alt tag](/assets/CustomThemeSwitch.gif) |

---

#### Properties

| Props           | Default   | Type                     | Description                                                    |
| :-------------- | :-------- | :----------------------- | :------------------------------------------------------------- |
| size            | 300       | number                   | `Size` of `Switch`.                                            |
| lightThemeColor | #59abdd   | string                   | `Switch color` when it's `OFF`.                                |
| darkThemeColor  | #0f1341   | string                   | `Switch color` when it's `ON`.                                 |
| onToggle        | undefined | (status: string) => void | onToggle to get the `value of Switch` either `light` or `dark` |

#### 🎬 Preview Example

---

[Theme Switch](/example/src/modules/ThemeSwitch/ThemeSwitchScreen.tsx)
