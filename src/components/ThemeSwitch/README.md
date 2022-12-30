# Theme Switch

`ThemeSwitch` component can be used to provide a amazing animation when user changing the state of system functionalities and preferences using Toggle Switch.

#### 🎬 Preview

---

|                ThemeSwitch                 |
| :----------------------------------------: |
| ![alt tag](/assets/DefaultThemeSwitch.gif) |

#### Default Usage

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeSwitch } from "react-native-skia-catalog";

const ThemeSwitchScreen = () => (
  <View style={styles.themeSwitchView}>
    <ThemeSwitch />
  </View>
);

const styles = StyleSheet.create({
  themeSwitchView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ThemeSwitchScreen;
```

#### Custom Usage

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeSwitch } from "react-native-skia-catalog";

const ThemeSwitchScreen = () => (
  <View style={styles.themeSwitchView}>
    <ThemeSwitch
      size={340}
      lightThemeColor={`#59abdd`}
      darkThemeColor={`#0f1341`}
    />
  </View>
);

const styles = StyleSheet.create({
  themeSwitchView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ThemeSwitchScreen;
```

#### 🎬 Custom Usage Preview

---

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
