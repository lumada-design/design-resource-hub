import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

import imgUrl from "assets/banner.png";

const styles = {
  root: css({
    paddingTop: theme.space.lg,
    background: `url(${imgUrl}) no-repeat`,
    backgroundSize: "cover",
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
