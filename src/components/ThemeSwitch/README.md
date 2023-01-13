# Theme Switch

`ThemeSwitch` component can be used to provide a amazing animation when user `changing` the `state` of system functionalities and preferences using `Toggle Switch`.

#### 🎬 Preview

---

|                ThemeSwitch                 |
| :----------------------------------------: |
| ![alt tag](/assets/DefaultThemeSwitch.gif) |

#### Default Usage

---

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeSwitch } from "react-native-skia-catalog";

const ThemeSwitchScreen = () => (
  <View style={styles.container}>
    <ThemeSwitch />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ThemeSwitchScreen;
```

#### Custom Usage

---

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeSwitch } from "react-native-skia-catalog";

const ThemeSwitchScreen = () => (
  <View style={styles.container}>
    <ThemeSwitch
      size={340}
      lightThemeColor={"#59abdd"}
      darkThemeColor={"#0f1341"}
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

export default ThemeSwitchScreen;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomThemeSwitch.gif)

#### Properties

| Props           | Default  | Type                     | Description                                                                                               |
| :-------------- | :------- | :----------------------- | :-------------------------------------------------------------------------------------------------------- |
| size            | 300      | number                   | `Size` of `Switch`.                                                                                       |
| lightThemeColor | #59abdd  | string                   | `Switch color` while the mode is `OFF`.                                                                   |
| darkThemeColor  | #0f1341  | string                   | `Switch color` while the mode is `ON`.                                                                    |
| onToggle        | () => {} | (status: string) => void | `Callback` function that gives the `value of Switch` either `light` or `dark` in parameter based on mode. |

#### 🎬 Preview Example

---

[Theme Switch](/example/src/modules/ThemeSwitch/ThemeSwitchScreen.tsx)
