import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  container: css({
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    minHeight: `calc(100vh - 570px)`,
  }),
};

export default styles;
