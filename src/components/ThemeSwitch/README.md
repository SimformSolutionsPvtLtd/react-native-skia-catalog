# Animated Switch

`SkiaThemeSwitch` component can be used to provide a amazing animation when user changing the state of system functionalities and preferences using Toggle Switch.

#### 🎬 Preview

---

|             Animated Switch             |
| :-------------------------------------: |
| ![alt tag](/assets/SkiaThemeSwitch.gif) |

#### Default Usage

```jsx
import React from "react";
import { SkiaThemeSwitch } from "react-native-skia-catalog";

const AnimatedSwitchScreen = () => {
  return (
    <View style={styles.skiaThemeSwitchView}>
      <SkiaThemeSwitch />
    </View>
  );
};
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

const AnimatedSwitchScreen = () => {
  return (
    <View style={styles.skiaThemeSwitchView}>
      <SkiaThemeSwitch
        size={340}
        lightThemeColor={`#59abdd`}
        darkThemeColor={`#0f1341`}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  skiaThemeSwitchView: {
    flex: 1,
    padding: 20,
  },
});

export default AnimatedSwitchScreen;
```

#### 🎬 Custom Usage Preview

---

|                 Animated Switch                  |
| :----------------------------------------------: |
| ![alt tag](/assets/CustomUsageOfThemeSwitch.gif) |

---
#### Properties


| Props           | Default   | Type   | Description                                              |
| :-------------- | :-------- | :----- | :------------------------------------------------------- |
| size            | 300       | number | size of switch.                                          |
| lightThemeColor | `#59abdd` | string | switch color when it's OFF.                              |
| darkThemeColor  | `#0f1341` | string | switch color when it's ON.                               |
| onToggle        | light     | string | onToggle to get the value of switch either light or dark |

#### 🎬 Preview Example

---

[ThemeSwitch](/example/src/modules/ThemeSwitch/ThemeSwitchScreen.tsx)
