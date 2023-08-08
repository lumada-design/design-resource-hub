import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

import imgUrl from "assets/banner.png";

const styles = {
  root: css({
    paddingTop: theme.header.height,
    background: `url(${imgUrl}) no-repeat`,
    backgroundSize: "cover",
    height: "330px",
  }),
  container: css({
    padding: theme.space.lg,
  }),
  textContainer: css({
    maxWidth: "650px",
    "& > *": {
      margin: `${theme.space.xs} 0`,
    },
  }),
  text: css({
    color: theme.colors.atmo3,
  }),
};

export default styles;
