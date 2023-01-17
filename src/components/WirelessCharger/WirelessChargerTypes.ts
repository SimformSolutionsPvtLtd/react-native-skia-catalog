import type { Range } from '../../types';

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
