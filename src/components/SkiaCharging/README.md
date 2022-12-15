# SkiaCharging

`SkiaCharging` component can be utilised to provide a charging animation whenever a user charges a device.

#### 🎬 Preview

---

|             SkiaCharging             |
| :----------------------------------: |
| ![alt tag](/assets/SkiaCharging.gif) |

#### Default Usage

```jsx
import React from "react";
import { SkiaCharging } from "react-native-skia-catalog";

const SkiaCharging = () => {
  <View style={styles.skiaChargingView}>
    <SkiaCharging />
  </View>;
};

const styles = StyleSheet.create({
  skiaChargingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SkiaCharging;
```

#### 🎬 Custom Usage Preview

---

|                   SkiaCharging                    |
| :-----------------------------------------------: |
| ![alt tag](/assets/CustomUsageOfSkiaCharging.gif) |

### Custom Usage

```jsx
import React from "react";
import { SkiaCharging } from "react-native-skia-catalog";

const SkiaCharging = () => {
  <View style={styles.skiaChargingView}>
    <SkiaCharging
      size={370}
      waveColor={"rgba(231, 121, 163, 0.5)"}
      thunderColor={"rgb(108,172,162)"}
      adapterColor={"rgb(245,196,226)"}
      backgroundColor={"rgb(91, 51, 95)"}
    />
  </View>;
};

const styles = StyleSheet.create({
  skiaChargingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SkiaCharging;
```

#### Properties

| Props           | Default     | Type   | Description                                                                                          |
| :-------------- | :---------- | :----- | :--------------------------------------------------------------------------------------------------- |
| size            | 300         | number | size of whole circle charger component                                                               |
| backgroundColor | `#4f13c6`   | string | background color of circle                                                                           |
| thunderColor    | `#5fc662`   | string | charging icon color.                                                                                 |
| waveColor       | `#5fc662e6` | string | wave color(for better experience in wave you can pass color in rgba format or give opacity to color) |
| adapterColor    | `#ffffff`   | string | for charging adapter color                                                                           |

#### 🎬 Preview Example

---

[SkiaCharging](/example/src/modules/SkiaCharging/SkiaChargingScreen.tsx)
