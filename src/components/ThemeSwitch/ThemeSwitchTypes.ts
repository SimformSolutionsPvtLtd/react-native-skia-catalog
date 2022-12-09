type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

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
