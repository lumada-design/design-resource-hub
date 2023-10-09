import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    position: "relative",
    alignItems: "center",
    minHeight: 300,
    // boxShadow: "inset 0 15px 10px -15px rgba(65,65,65,0.12)",
  }),
  tag: css({
    marginRight: theme.space.xs,
  }),
  description: css({
    marginTop: theme.space.sm,
  }),
  button: css({
    marginBottom: theme.space.sm,
    position: "absolute",
    top: theme.spacing(5),
  }),
};

export default styles;
