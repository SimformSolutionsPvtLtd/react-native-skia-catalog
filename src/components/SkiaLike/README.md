# SkiaLike

`SkiaLike` component can be used to provide a marvellous animation when user click the Like button.

#### 🎬 Preview

---

|                SkiaLike                 |
| :-------------------------------------: |
| ![alt tag](/assets/DefaultSkiaLike.gif) |

#### Default Usage

---

```jsx
import React from "react";
import { SkiaLike } from "react-native-skia-catalog";

const SkiaLike = () => <SkiaLike />;

export default SkiaLike;
```

#### Custom Usage

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { SkiaLike } from "react-native-animation-catalog";

const SkiaLike = () => {
  return (
    <View style={styles.container}>
      <SkiaLike size={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default SkiaLike;
```

##### Custom Usage Preview

![alt tag](/assets/DefaultSkiaLike.gif)

---

#### Properties

| Props         | Default  | Type              | Description                                                                                  |
| :------------ | :------- | :---------------- | :------------------------------------------------------------------------------------------- |
| size          | 100      | number            | `size` of SkiaLike.                                                                          |
| onChangeValue | () => {} | callback function | It returns the boolean value when the event is liked it will return `true` otherwise `false` |

---

#### 🎬 Preview Example

---

[SkiaLike](/example/src/modules/SkiaLike/SkiaLikeScreen.tsx)
