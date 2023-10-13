import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    minHeight: 300,
  }),
  container: css({
    display: "block",
    padding: `${theme.space.lg} ${theme.space.md}`,

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
