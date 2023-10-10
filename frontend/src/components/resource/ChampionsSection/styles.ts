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
  }),
  separator: css({
    width: 55,
    borderTop: `2px solid ${theme.colors.brand}`,
    margin: `${theme.space.xs} auto ${theme.space.md} auto`,
  }),
  champions: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.space.md,
    "@media screen and (min-width: 600px)": {
      flexDirection: "row",
      gap: 130,
    },
  }),
  container: css({
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
