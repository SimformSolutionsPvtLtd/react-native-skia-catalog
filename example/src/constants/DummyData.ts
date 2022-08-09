import {NavigationStrings} from '../constants';
import {NavProps} from '../navigation/types';

export const AnimationComponentData = (navigation: NavProps) => [
  {
    id: 1,
    name: 'Indicator',
    screen: () => navigation.navigate(NavigationStrings.INDICATOR),
  },
];
