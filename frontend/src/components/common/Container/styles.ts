import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  container: css({
    paddingTop: `calc(${theme.header.height})`,
    minHeight: "100vh",
  }),
};

export default styles;
