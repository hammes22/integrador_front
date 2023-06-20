import { chakra } from "@chakra-ui/react";

export const ButtonGradiente = chakra("button", {
  baseStyle: {
    borderRadius: "12px",
    fontSize: "18px",
    padding: "7px",
    fontWeight: "700",
    color: "#FFFFFF",
    bgGradient: `linear(to-r, secondary.DEFAULT, primary.DEFAULT)`,
    _hover: {
      bgGradient: "linear(to-r, secondary.500, primary.500)",
    },
    _active: { bgGradient: "linear(to-r, secondary.700, primary.700)" },
  },
});
