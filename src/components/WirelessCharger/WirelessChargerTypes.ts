type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

export type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export interface WireLessChargerProps {
  size: Range<150, 351>;
  outerCircleColor: string;
  wifiWaveColor: string;
  thunderColor: string;
}

export interface GetExploreCircleProps {
  isOuter: boolean;
}

export interface UseWirelessChargerProps {
  size: Range<150, 351>;
}