import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-react-core";

const styles = {
  status: css({
    display: "flex",
    height: 400,
  }),
  empty: css({
    alignItems: "center",
  }),
  card: css({
    outline: "none",
    "&:hover": {
      cursor: "pointer",
    },
  }),
  hide: css({
    display: "none",
  }),
  org: css({
    marginTop: theme.space.sm,
  }),
};

export default styles;
