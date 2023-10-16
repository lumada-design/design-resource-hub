import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-react-core";

const styles = {
  loading: css({
    display: "flex",
    alignItems: "center",
    minHeight: `calc(100vh - 600px)`,
  }),
  empty: css({
    display: "flex",
    alignItems: "center",
    minHeight: `calc(100vh - 600px)`,
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
