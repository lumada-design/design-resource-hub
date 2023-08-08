import { css } from "@emotion/css";

export const styles = {
  root: css({
    outline: "none",
    "&:hover": {
      cursor: "pointer",
    },
  }),
  container: css({
    display: "none",
  }),
  tag: css({
    marginRight: "0.5rem",
  }),
};
