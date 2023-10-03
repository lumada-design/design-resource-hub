import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    background: theme.colors.atmo1,
  }),
  container: css({
    display: "flex",
    alignItems: "center",
    minHeight: 250,
  }),
};

export default styles;
