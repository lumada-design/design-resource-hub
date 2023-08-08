import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    paddingBottom: theme.space.lg,
    marginTop: theme.space.lg,
    minHeight: `calc(100vh - ${390}px)`,
  }),
};

export default styles;
