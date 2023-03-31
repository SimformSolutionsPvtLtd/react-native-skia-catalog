# SkiaLike

`SkiaLike` component can be used to provide a marvellous animation when user click the Like button.

#### 🎬 Preview

---

|                SkiaLike                 |
| :-------------------------------------: |
| ![alt tag](/assets/DefaultSkiaLike.gif) |

#### Usage

---

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SkiaLike } from 'react-native-skia-catalog';

const SkiaLikeScreen = () => (
  <View style={styles.container}>
    <SkiaLike />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SkiaLikeScreen;
```

#### Properties

| Props         | Default  | Type                       | Description                                                                                          |
| :------------ | :------- | :------------------------- | :--------------------------------------------------------------------------------------------------- |
| size          | 180      | number                     | `Size` of `SkiaLike`.                                                                                |
| onChangeValue | () => {} | (isLiked: boolean) => void | It returns the `boolean` value, when the `event` is `liked` it will return `true` otherwise `false`. |
| isActive      | false    | boolean                    | It manage `default state` means heart `liked or not`.                                                |

#### 🎬 Preview Example

---

[Skia Like](/example/src/modules/SkiaLike/SkiaLikeScreen.tsx)
