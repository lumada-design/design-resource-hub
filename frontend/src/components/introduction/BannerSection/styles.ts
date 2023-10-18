import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    position: "relative",
    alignItems: "center",
    minHeight: 300,
  }),
  text: css({
    maxWidth: 650,
  }),
  button: css({
    marginBottom: theme.space.sm,
  }),
};

export default styles;
