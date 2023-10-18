import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    minHeight: 300,
    padding: `${theme.space.lg} ${theme.space.sm}`,
    "@media screen and (max-width: 900px)": {
      padding: `${theme.space.md} ${theme.space.sm}`,
    },
    background: theme.colors.base_light,
  }),
  container: css({
    flexDirection: "column",
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
  resources: css({
    width: "100% !important",
    display: "grid",
    gap: theme.space.md,
    "@media (min-width: 600px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (min-width: 900px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  }),
  resource: css({
    padding: theme.space.sm,
    "& :nth-child(2)": {
      marginTop: theme.space.md,
    },
  }),
};

export default styles;
