import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    position: "relative",
    minHeight: 300,
    padding: `${theme.space.md} 0`,
  }),
  text: css({
    marginTop: theme.space.sm,
    maxWidth: 600,
  }),
};

export default styles;
