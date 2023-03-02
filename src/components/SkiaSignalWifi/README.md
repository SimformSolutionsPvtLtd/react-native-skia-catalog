# SkiaSignalWifi

`SkiaSignalWifi` component can be utilized to provide an animation to display `wifi signal strength`, where the arcs of the wifi symbol make an appearance with an circular animation.

#### 🎬 Preview

---

|                SkiaSignalWifi                 |
| :-------------------------------------------: |
| ![alt tag](/assets/DefaultSkiaSignalWifi.gif) |

#### Default Usage

---

```jsx
import React from 'react';
import { SkiaSignalWifi } from 'react-native-skia-catalog';

const SkiaSignalWifi = () => {
  <View style={styles.skiaSignalWifi}>
    <SkiaSignalWifi />
  </View>;
};

const styles = StyleSheet.create({
  skiaSignalWifi: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SkiaSignalWifi;
```

#### Custom Usage

---

```jsx
import React from 'react';
import { SkiaSignalWifi } from 'react-native-skia-catalog';

const SkiaSignalWifi = () => {
  <View style={styles.skiaSignalWifiView}>
    <SkiaSignalWifi size={200} color={'#d61002'} numberOfArcs={3} />
  </View>;
};

const styles = StyleSheet.create({
  skiaSignalWifiView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SkiaSignalWifi;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomSkiaSignalWifi.gif)

#### Properties

| Props        | Default   | Type   | Description                                                                                             |
| :----------- | :-------- | :----- | :------------------------------------------------------------------------------------------------------ |
| size         | 300       | number | `Size` of whole component (center square + arcs)                                                        |
| color        | `#76CCB0` | string | `Color` of `center square and arcs`                                                                     |
| numberOfArcs | 4         | number | Number of `arcs` in the wifi symbol to show the wifi signal strength. It should be in the range of 1-4. |

#### 🎬 Preview Example

---

[SkiaSignalWifi](/example/src/modules/SkiaSignalWifi/SkiaSignalWifiScreen.tsx)
