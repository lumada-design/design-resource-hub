import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    minHeight: 300,
    background: theme.colors.atmo2,
    padding: `${theme.space.lg} ${theme.space.sm}`,
  }),
  container: css({
    display: "flex",
    flexDirection: "column",
  }),
  separator: css({
    width: 55,
    borderTop: `2px solid ${theme.colors.brand}`,
    margin: `${theme.space.xs} auto ${theme.space.md} auto`,
  }),
  champions: css({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "left",
    gap: theme.space.md,
    "@media screen and (min-width: 600px)": {
      flexDirection: "row",
      gap: theme.space.md,
      alignItems: "center",
    },
  }),
  content: css({
    display: "flex",
    alignItems: "center",
    gap: theme.space.sm,
  }),
  picture: css({
    width: 80,
    borderRadius: "50%",
  }),
  text: css({
    textAlign: "left",
  }),
};

export default styles;
