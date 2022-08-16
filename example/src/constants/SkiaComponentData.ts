import {NavigationStrings} from '.';
import {NavProps} from '../navigation/types';

export const SkiaComponentData = (navigation: NavProps) => [
  {
    id: 1,
    name: 'Indicator',
    screen: () => navigation.navigate(NavigationStrings.INDICATOR),
  },
];
