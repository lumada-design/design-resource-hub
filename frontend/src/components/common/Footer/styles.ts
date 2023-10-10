import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  container: css({
    display: "flex",
  }),
  root: css({
    alignItems: "center",
    height: 150,
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
      "& *": {
        color: "#000",
      },
    },
  }),
};

export default styles;
