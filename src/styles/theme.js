import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
} from "@chakra-ui/react";
import colors from "./colors";
import { fonts } from "./fonts";

const theme = extendTheme(
  { colors, fonts },
  withDefaultColorScheme({
    colorScheme: "primary",
  }),
  withDefaultProps({
    defaultProps: {
      variant: "outline",
    },
    components: ["Button"],
  })
);
// withDefaultColorScheme({ colorScheme: 'primary' }));
export default theme;
