import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    minHeight: 300,
  }),
  container: css({
    padding: `${theme.space.lg} 0`,
  }),
  textContainer: css({
    maxWidth: "750px",
    "& > *": {
      margin: `${theme.space.xs} 0`,
    },
  }),
  text: css({
    color: theme.colors.atmo3,
  })
};

export default styles;
