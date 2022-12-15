# Skia Wallet

`SkiaWallet` component can be used to provide a fascinating experience of wallet with animated cards.

#### 🎬 Preview

---

|                  Skia Wallet                  |
| :-------------------------------------------: |
| ![alt tag](/assets/DefaultAnimatedWallet.gif) |

#### Default Usage

---

```jsx
import { StyleSheet, View } from "react-native";
import React from "react";
import { SkiaWallet } from "react-native-skia-catalog";

const WalletScreen = () => (
  <View style={style.container}>
    <SkiaWallet />
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WalletScreen;
```

#### 🎬 Custom Usage

```jsx
import { StyleSheet, View } from "react-native";
import React from "react";
import { SkiaWallet } from "react-native-skia-catalog";

const WalletScreen = () => (
  <View style={style.container}>
    <SkiaWallet
      size={260}
      primaryColor="#3F0071"
      secondaryColor="#FB2576"
      numberOfCards={3}
    />
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default WalletScreen;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomAnimatedWallet.gif)

#### Properties

| Props          | Default   | Type   | Description                                 |
| :------------- | :-------- | :----- | :------------------------------------------ |
| size           | `240`     | number | `size` of wallet.                           |
| numberOfCards  | `2`       | number | `number of cards` in Wallet `Note` : Max 3. |
| primaryColor   | `#fca819` | string | `primary color` of Wallet.                  |
| secondaryColor | `#ff2b3e` | string | `secondary color` of Wallet.                |

#### 🎬 Preview Example

---

[Animated Wallet](/example/src/modules/Wallet/WalletScreen.tsx)
