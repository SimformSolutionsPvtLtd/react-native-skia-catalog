# Notification

`Notification` component can be used to enhance the user experience with charming animation when message arrive.

#### 🎬 Preview

---

|                Notification                 |
| :-----------------------------------------: |
| ![alt tag](/assets/DefaultNotification.gif) |

#### Default Usage

---

```jsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Notification } from "react-native-skia-catalog";

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Notification />
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

export default NotificationScreen;
```

#### Custom Usage

---

```jsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Notification } from "react-native-skia-catalog";

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Notification notificationCount={15} color="#F84F31" size={220} />
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

export default NotificationScreen;
```        

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomNotification.gif)

---

#### Properties

| Props             | Default   | Type   | Description                                                                                                               |
| :---------------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------ |
| size              | `150`     | number | `size` of image. The size `ranges` from `50` to `250`                                                                     |
| color             | `#23C552` | string | `color` of the notification `counterball` and the `animated lines`                                                        |
| notificationCount | `1`       | number | `number` of `notification`. If notification number in double digit, the notification number no would be displayed as `9+` |

#### 🎬 Preview Example

---

[Notification](/example/src/modules/Notification/NotificationScreen.tsx)
