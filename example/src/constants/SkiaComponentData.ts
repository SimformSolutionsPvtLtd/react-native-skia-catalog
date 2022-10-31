import {NavigationStrings} from '.';
import {NavProps} from '../navigation/types';

export const SkiaComponentData = (navigation: NavProps) => [
  {
    id: 1,
    name: 'Indicator',
    screen: () => navigation.navigate(NavigationStrings.INDICATOR),
  },
  {
    id: 2,
    name: 'Strike Image',
    screen: () => navigation.navigate(NavigationStrings.STRIKEIMAGE),
  },
  {
    id: 3,
    name: 'Notification',
    screen: () => navigation.navigate(NavigationStrings.NOTIFICATION),
  },
  {  
    id:4,
    name: 'Theme Switch',
    screen: () => navigation.navigate(NavigationStrings.THEME_SWITCH),
  },
];
