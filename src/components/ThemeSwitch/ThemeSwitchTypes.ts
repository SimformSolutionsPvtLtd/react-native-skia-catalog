import type { Range } from "../../types";

export interface AimatedProps {
  rotate: any;
  shadowCircleRotate: any;
  lightThemeColor: string;
  darkThemeColor: string;
  size: number;
  onToggle?: (status: string) => void;
}

export interface AnimatedSwitchProps {
  lightThemeColor?: string;
  darkThemeColor?: string;
  size?: Range<40, 351>;
  onToggle?: (status: string) => void;
}
