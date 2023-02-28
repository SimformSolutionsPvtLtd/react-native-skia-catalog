import type { Range } from '../../types';

export interface UseThemeSwitchProps {
  rotate: any;
  shadowCircleRotate: any;
  lightThemeColor: string;
  darkThemeColor: string;
  size: number;
  onToggle?: (status: string) => void;
}

export interface ThemeSwitchProps {
  lightThemeColor?: string;
  darkThemeColor?: string;
  size?: Range<40, 351>;
  onToggle?: (status: string) => void;
}
