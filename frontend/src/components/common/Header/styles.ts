import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  preload: css({
    height: 115,
  }),
  container: css({
    display: "flex",
  }),
  area1: css({
    display: "flex",
    alignItems: "center",
    height: 50,
    backgroundColor: theme.colors.base_light,
  }),
  logo: css({
    cursor: "pointer",
  }),
  area2: css({
    display: "flex",
    alignItems: "center",
    height: 65,
    background: "#e5e5e5",
  }),
  brand: css({
    display: "flex",
    alignItems: "center",
    "& > *": {
      display: "inline",
    },
  }),
  menu: css({
    marginLeft: "auto",
    "& li": {
      display: "flex",
      float: "left",
      height: 65,
      alignItems: "center",
      padding: theme.space.sm,
    },
    "& li:hover": {
      cursor: "pointer",
      backgroundColor: "#b1000e",
      "& *": {
        color: theme.colors.base_light,
      },
    },
    "@media screen and (max-width: 900px)": {
      display: "none",
    },
  }),
};

export default styles;
