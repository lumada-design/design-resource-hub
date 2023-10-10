import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    alignItems: "center",
    minHeight: 250,
    padding: `0 ${theme.space.sm}`,
    "@media screen and (max-width: 900px)": {
      padding: `${theme.space.sm} 0`,
    },
  }),
  container: css({
    "@media screen and (min-width: 900px)": {
      display: "flex",
      gap: theme.space.lg,
    },
  }),
};

export default styles;
