import type {
  SkFont,
  SkiaValue,
  SkImage,
  SkPoint,
} from "@shopify/react-native-skia";
import type { Range } from "../../types";

interface NotificationPropsType {
  size?: Range<50, 251>;
  notificationCount?: number;
  color?: string;
}

interface NotificationReturnType {
  lineStrokeWidth: number;
  circleStrokeWidth: number;
  font: SkFont;
  notificationNumber: string;
  circleRadius: number;
  image: SkImage | null;
  mailRotation: SkiaValue<
    {
      rotate: number;
    }[]
  >;
  firstLineStartingCoordinate: SkiaValue<SkPoint>;
  firstLineEndingCoordinate: SkiaValue<SkPoint>;
  secondLineStartingCoordinate: SkiaValue<SkPoint>;
  secondLineEndingCoordinate: SkiaValue<SkPoint>;
  fillledCircleVisibility: SkiaValue<number>;
  strokeCircleVisibility: SkiaValue<number>;
  filledCircleCentre: SkiaValue<SkPoint>;
  strokeCircleCentre: SkiaValue<SkPoint>;
  countTextYPosition: SkiaValue<number>;
  notificationCountVisibility: SkiaValue<number>;
  countTextXPosition: number;
}

export { NotificationPropsType, NotificationReturnType };
