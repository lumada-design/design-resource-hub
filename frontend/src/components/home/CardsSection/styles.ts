import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-react-core";

const styles = {
  root: css({
    outline: "none",
    "&:hover": {
      cursor: "pointer",
    },
  }),
  hide: css({
    display: "none",
  }),
  tag: css({
    marginRight: theme.space.xs,
  }),
  org: css({
    marginTop: theme.space.sm,
  }),
};

export default styles;
