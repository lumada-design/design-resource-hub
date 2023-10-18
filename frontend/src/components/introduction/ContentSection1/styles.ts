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
  }),
  container: css({
    flexDirection: "column",
    gap: theme.space.lg,
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
    display: "flex",
    flexDirection: "column",
    borderTop: `2px solid ${theme.colors.atmo4}`,
    backgroundColor: theme.colors.base_light,
    padding: theme.space.sm,
    "& :nth-child(2)": {
      marginTop: theme.space.md,
    },
    "&:first-child": {
      "@media (min-width: 900px)": {
        gridColumn: "span 4",
      },
    },
    "&:last-child": {
      "@media (min-width: 900px)": {
        gridColumn: "span 4",
      },
    },
  }),
};

export default styles;
