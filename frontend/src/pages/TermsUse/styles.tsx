import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    whiteSpace: "pre-wrap",
  }),
};

export default styles;
