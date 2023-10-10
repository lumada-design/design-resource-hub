import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    position: "relative",
    alignItems: "center",
    minHeight: 300,
  }),
  button: css({
    marginBottom: theme.space.md,
    position: "absolute",
    top: theme.spacing(2),
  }),
  buttonUp: css({
    marginBottom: theme.space.md,
    position: "absolute",
    top: theme.spacing(4),
  }),
  title: css({
    maxWidth: 650,
  }),
};

export default styles;
