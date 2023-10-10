import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  container: css({
    padding: theme.space.lg,
  }),
  textContainer: css({
    maxWidth: "750px",
    "& > *": {
      margin: `${theme.space.xs} 0`,
    },
  }),
  text: css({
    color: theme.colors.atmo3,
  }),
};

export default styles;
