import {
  Color,
  Extrapolate,
  interpolate,
  Transforms2d,
  useComputedValue,
  useTiming,
} from "@shopify/react-native-skia";
import chroma from "chroma-js";
import { Colors } from "../../../../theme";

interface animatedCardProps {
  size?: number;
  cardNumber?: number;
  primaryColor?: Color;
  secondaryColor?: Color;
}

const getWalletCard = ({
  lighterPrimaryColor,
  lighterSecondaryColor,
  primaryColor,
  secondaryColor,
}: {
  lighterPrimaryColor: Color;
  lighterSecondaryColor: Color;
  primaryColor: Color;
  secondaryColor: Color;
}) => {
  return [
    {
      id: 3,
      color: [lighterSecondaryColor, secondaryColor],
    },
    {
      id: 2,
      color: [lighterPrimaryColor, primaryColor],
    },
    {
      id: 1,
      color: [lighterSecondaryColor, secondaryColor],
    },
  ];
};

const useAnimCard = ({
  size = 256,
  cardNumber = 0,
  primaryColor = Colors.darkYellow,
  secondaryColor = Colors.darkRed,
}: animatedCardProps) => {
  const lighterPrimaryColor = chroma(
    primaryColor as string | number | chroma.Color
  )
    ?.brighten()
    ?.hex();
  const lighterSecondaryColor = chroma(
    secondaryColor as string | number | chroma.Color
  )
    ?.brighten()
    ?.hex();

  const offsets = useTiming({ from: 0, to: 2, loop: true }, { duration: 1500 });

  const transform = useComputedValue<Transforms2d>(() => {
    return [
      {
        rotate: interpolate(
          offsets.current,
          [0, 0.3 * cardNumber, 0.7, 1, 1 + 0.1 * cardNumber, 1.7, 2],
          [
            0,
            0,
            (-Math.PI * 15 * (cardNumber + 1)) / 180,
            (-Math.PI * 15 * (cardNumber + 1)) / 180,
            (-Math.PI * 15 * (cardNumber + 1)) / 180,
            0,
            0,
          ]
        ),
      },
    ];
  }, [offsets]);

  const clipTransforms = useComputedValue(() => {
    return [
      {
        translateX: interpolate(
          offsets.current,
          [0, 0.6, 1, 1.6, 2],
          [0, -size * 0.08, -size * 0.08, 0, 0],
          {
            extrapolateLeft: Extrapolate.CLAMP,
          }
        ),
      },
    ];
  }, [offsets]);

  const walletCards = getWalletCard({
    lighterPrimaryColor,
    lighterSecondaryColor,
    primaryColor,
    secondaryColor,
  });

  return {
    transform,
    walletCards,
    clipTransforms,
    lighterPrimaryColor,
    lighterSecondaryColor,
  };
};

export default useAnimCard;
