import { css } from "@emotion/css";

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
    marginRight: "0.5rem",
  }),
};

export default styles;
