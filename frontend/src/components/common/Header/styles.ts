import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  preload: css({
    height: 115,
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
  actions: css({
    margin: "0 0 0 auto",
    cursor: "pointer",
    paddingRight: theme.space.sm,
    display: "inline-flex",
    alignItems: "center",
    background: "transparent",
    "& > p": {
      fontFamily: "Arial,Helvetica,sans-serif",
      fontWeight: 400,
      fontSize: 13,
      color: "black",
      marginLeft: theme.space.xs,
    },
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
      backgroundColor: "#b1000e",
      "& a": {
        cursor: "pointer",
      },
      "& *": {
        color: theme.colors.base_light,
      },
    },
  }),
  smallScreen: css({
    display: "none",
  }),
};

export default styles;
