import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    position: "relative",
    alignItems: "center",
    minHeight: 300,
  }),
  tag: css({
    marginRight: theme.space.xs,
  }),
  text: css({
    marginTop: theme.space.sm,
    maxWidth: 500,
  }),
  button: css({
    marginBottom: theme.space.sm,
    position: "absolute",
    top: theme.spacing(5),
  }),
};

export default styles;
