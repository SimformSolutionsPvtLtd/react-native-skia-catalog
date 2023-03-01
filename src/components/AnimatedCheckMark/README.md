# Animated CheckMark

The `AnimatedCheckMark` component can be used to provide a delightful experience on `success` of any `particular task`.

- `AnimatedCheckMark` component has three different variants: `Simple`, `Fade` and `Circular`.

#### 🎬 Preview

---

|             AnimatedCheckMark             |
| :---------------------------------------: |
| ![alt tag](/assets/DefaultAnimatedCheckmark.gif) |

#### Default Usage

---

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AnimatedCheckMark } from 'react-native-skia-catalog';

const AnimatedCheckMarkScreen = () => (
  <View style={styles.container}>
    <AnimatedCheckMark />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedCheckMarkScreen;
```

#### Custom Usage

---

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AnimatedCheckMark, CheckMarkEnum } from 'react-native-skia-catalog';

const AnimatedCheckMarkScreen = () => (
  <View style={styles.container}>
    <AnimatedCheckMark
      size={100}
      speed={1200}
      multiColor={true}
      checkMarkType={CheckMarkEnum.CIRCULAR}
      centerImageColor={'#0096FF'}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedCheckMarkScreen;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomAnimatedCheckmark.gif)

#### Properties

| Props               | Default  | Type                           | Description                                                                                                     |
| :------------------ | :------- | :----------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| checkMarkType       | "Simple" | "Simple" / "Fade" / "Circular" | `Type` of `AnimatedCheckMark`. CheckMarkEnum can be used to specify the `type`. Ex. `CheckMarkEnum`.`CIRCULAR`. |
| size                | 200      | number                         | `Size` of `AnimatedCheckMark`.                                                                                  |
| speed               | 2500     | number                         | `Speed` of component `Animation`.                                                                               |
| circleOneColor      | #0288D1  | string                         | `Color` of `outer` circle.                                                                                      |
| circleTwoColor      | #0288D1  | string                         | `Color` of `inner` circle.                                                                                      |
| centerImageSource   | -        | ImageSourcePropType / string   | `Source` of center `Image`.                                                                                     |
| centerImageColor    | #FFFFFF  | string                         | `Color` of center `Image`.                                                                                      |
| circleParticleColor | #0288D1  | string                         | `Color` of `circle` particle.                                                                                   |
| starParticleColor   | #0288D1  | string                         | `Color` of `star` particle.                                                                                     |
| showParticle        | false    | boolean                        | It decides whether to `Show` or `Hide` particles.                                                               |
| multiColor          | false    | boolean                        | It decides whether to `true` or `false` of the `multiColor` border color of `Circular` type `Checkmark`.        |
| topBorderColor      | #EC407A  | string                         | Border `top` color.                                                                                             |
| rightBorderColor    | #0288D1  | string                         | Border `right` color.                                                                                           |
| bottomBorderColor   | #FFAC1C  | string                         | Border `bottom` color.                                                                                          |
| leftBorderColor     | #69C7FF  | string                         | Border `left` color.                                                                                            |
| borderColor         | #0288D1  | string                         | Whole `Border` color.                                                                                           |

#### 🎬 Preview Example

---

[Animated Checkmark](/example/src/modules/AnimatedCheckMark/AnimatedCheckMarkScreen.tsx)
