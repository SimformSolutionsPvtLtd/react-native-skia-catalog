import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationStrings } from '../constants';
import {
  HomeScreen,
  IndicatorScreen,
  NotificationScreen,
  StrikeImageScreen,
  ThemeSwitchScreen
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
          name={NavigationStrings.STRIKEIMAGE}
          component={StrikeImageScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
