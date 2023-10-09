import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  section1: css({
    display: "flex",
    alignItems: "center",
    height: 50,
    backgroundColor: theme.colors.base_light,
    paddingLeft: theme.space.md,
  }),
  logo: css({
    cursor: "pointer",
  }),
  section2: css({
    display: "flex",
    alignItems: "center",
    height: 65,
    backgroundColor: theme.colors.atmo2,
    paddingLeft: theme.spacing(5),
  }),
  brand: css({
    "& > *": {
      display: "inline",
    },
  }),
  menu: css({
    listStyle: "none",
    position: "absolute",
    right: theme.spacing(2),
    "& li": {
      display: "flex",
      float: "left",
      marginLeft: theme.space.xs,
      height: 65,
      alignItems: "center",
      padding: theme.space.xs,
    },
    "& li:hover": {
      cursor: "pointer",
      backgroundColor: theme.colors.brand,
      "& *": {
        color: theme.colors.base_light,
      },
    },
  }),
};

export default styles;
