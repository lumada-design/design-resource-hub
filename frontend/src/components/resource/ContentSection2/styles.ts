import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    alignItems: "center",
    minHeight: 250,
    padding: `${theme.space.lg} ${theme.space.sm}`,
  }),
  container: css({
    gap: theme.space.lg,
    "& > div": {
      width: "50%",
    },
    "@media screen and (max-width: 900px)": {
      gap: theme.space.md,
      padding: `${theme.space.sm}`,
      flexDirection: "column",
      "& > div": {
        width: "100%",
      },
    },
  }),
};

export default styles;
