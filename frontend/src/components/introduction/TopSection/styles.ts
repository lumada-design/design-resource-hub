import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    position: "relative",
    alignItems: "center",
    marginTop: theme.header.height,
    minHeight: 300,
    boxShadow: "inset 0 15px 10px -15px rgba(65,65,65,0.12)",
  }),
  image: css({
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    zIndex: theme.zIndices.hide,
    objectFit: "cover",
  }),
  text: css({
    marginTop: theme.space.sm,
  }),
  link: css({
    marginTop: theme.space.sm,
    marginLeft: theme.space.sm,
  }),
  button: css({
    marginBottom: theme.space.md,
    position: "absolute",
    top: theme.spacing(2)
  }),
  buttonUp: css({
    marginBottom: theme.space.md,
    position: "absolute",
    top: theme.spacing(4)
  }),
};

export default styles;
