import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationStrings} from '../constants';
import {
  AnimatedScannerScreen,
  HomeScreen,
  IndicatorScreen,
  MediaButtonScreen,
  NotificationScreen,
  SkiaLikeScreen,
  StrikeImageScreen,
  ThemeSwitchScreen,
  WalletScreen,
} from '../modules';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationStrings.HOME}>
        <Stack.Screen
          name={NavigationStrings.HOME}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.INDICATOR}
          component={IndicatorScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.STRIKE_IMAGE}
          component={StrikeImageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.SKIA_LIKE}
          component={SkiaLikeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.NOTIFICATION}
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.THEME_SWITCH}
          component={ThemeSwitchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.WALLET}
          component={WalletScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.ANIMATED_SCANNER}
          component={AnimatedScannerScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.MEDIA_BUTTON}
          component={MediaButtonScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
