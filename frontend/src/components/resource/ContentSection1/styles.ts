import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    background: theme.colors.base_light,
  }),
  container: css({
    display: "flex",
    alignItems: "center",
    maxWidth: "700px",
    minHeight: 400,
  }),
};

export default styles;
