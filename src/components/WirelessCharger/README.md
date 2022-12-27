# Wireless Charger

`Wireless Charger` component can be used to provide a sensational animation when user charge their phone wirelessly.

#### 🎬 Preview

---

|                Wireless Charger                |
| :--------------------------------------------: |
| ![alt tag](/assets/DefaultWirelessCharger.gif) |

#### Default Usage

---

```jsx
import React from "react";
import { WirelessCharger } from "react-native-skia-catalog";

const WirelessCharger = () => <WirelessCharger />;

export default WirelessCharger;
```

#### Custom Usage

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { WirelessCharger } from "react-native-skia-catalog";

const WirelessCharger = () => {
  return (
    <View style={styles.container}>
      <WirelessCharger
        size={350}
        outerCircleColor="#513788"
        wifiWaveColor="#D979CA"
        thunderColor="#ffe767"
      />
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

export default WirelessCharger;
```

##### Custom Usage Preview

![alt tag](/assets/CustomWirelessCharger.gif)

---

#### Properties

| Props            | Default     | Type   | Description                      |
| :--------------- | :---------- | :----- | :------------------------------- |
| size             | `350`       | number | `size` of `WirelessCharger`      |
| outerCircleColor | `'#513788'` | string | `Color` of Outer `small circles` |
| wifiWaveColor    | `'#D979CA'` | string | `Color` of the `WifiWaves`       |
| thunderColor     | `'#ffe767'` | string | `Color` the `thunder Sign`       |

---

#### 🎬 Preview Example

---

[Wireless Charger](/example/src/modules/WirelessCharger/WirelessChargerScreen.tsx)
