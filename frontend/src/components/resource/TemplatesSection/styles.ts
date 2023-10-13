import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    minHeight: 250,
    background: theme.colors.base_light,
  }),
  separator: css({
    width: 55,
    borderTop: `2px solid ${theme.colors.brand}`,
    margin: `${theme.space.xs} auto ${theme.space.md} auto`,
  }),
  templates: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.space.md,
    "@media screen and (min-width: 600px)": {
      flexDirection: "row",
    },
  }),
  container: css({
    alignItems: "center",
    gap: theme.space.sm,
  }),
  icon: css({
    width: 40,
  }),
};

export default styles;
