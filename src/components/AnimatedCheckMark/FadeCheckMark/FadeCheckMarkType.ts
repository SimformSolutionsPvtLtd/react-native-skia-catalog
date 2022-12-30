import type {
  SkiaMutableValue,
  SkiaValue,
  SkImage,
  SkPath,
  Transforms2d,
} from "@shopify/react-native-skia";

export interface UseFadeCheckMarkReturnType {
  circleParticle: SkiaMutableValue<Transforms2d>;
  starParticle: SkiaMutableValue<Transforms2d>;
  exploreCircleTransform: SkiaMutableValue<Array<Transforms2d>>;
  exploreStarTransform: SkiaMutableValue<Array<Transforms2d>>;
  circleTwoScale: SkiaMutableValue<Transforms2d>;
  circleOneOpacity: SkiaMutableValue<number>;
  circleParticleOpacity: SkiaMutableValue<number>;
  starParticleOpacity: SkiaMutableValue<number>;
  starPath: SkPath;
  ExploreCircles: Array<{ x: number; y: number }>;
  ExploreStars: Array<{ x: number; y: number }>;
}

export interface FadeCheckMarkType {
  size: number;
  centerImageColor: string;
  circleOneColor: string;
  circleTwoColor: string;
  circleParticleColor: string;
  starParticleColor: string;
  showParticle: boolean;
  centerImage: SkImage | null;
  value: SkiaValue<number>;
  centerImageOpacity: SkiaMutableValue<number>;
  circleOneScale: SkiaMutableValue<Transforms2d>;
}

export interface ParticlesType {
  size: number;
  ExploreCircles: Array<{ x: number; y: number }>;
  ExploreStars: Array<{ x: number; y: number }>;
  exploreCircleTransform: SkiaMutableValue<Array<Transforms2d>>;
  exploreStarTransform: SkiaMutableValue<Array<Transforms2d>>;
  circleParticleOpacity: SkiaMutableValue<number>;
  circleParticle: SkiaMutableValue<Transforms2d>;
  circleParticleColor: string;
  starPath: SkPath;
  starParticleOpacity: SkiaMutableValue<number>;
  starParticleColor: string;
  starParticle: SkiaMutableValue<Transforms2d>;
}
