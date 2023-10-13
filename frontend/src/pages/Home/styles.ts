import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  container: css({
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    minHeight: `calc(100vh - 400px)`,
  }),
};

export default styles;
