import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  container: css({
    display: "flex",
  }),
  area1: css({
    background: "#e5e5e5",
    paddingTop: theme.space.md,
  }),
  brand: css({
    display: "flex",
    alignItems: "center",
    "& > *": {
      display: "inline",
    },
    minHeight: 50,
  }),
  menu: css({
    marginLeft: "auto",
    "& li": {
      display: "flex",
      float: "left",
      alignItems: "center",
      padding: theme.space.sm,
    },
    "& li:hover": {
      cursor: "pointer",
      "& *": {
        color: "#000",
      },
    },
  }),
  area2: css({
    background: "#e5e5e5",
    paddingBottom: theme.space.md,
  }),
  smallScreen: css({
    display: "none",
  }),
};

export default styles;
