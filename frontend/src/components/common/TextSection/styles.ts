import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  separator: css({
    width: 55,
    borderTop: `2px solid ${theme.colors.brand}`,
    marginTop: theme.space.xs,
  }),
  description: css({
    margin: `${theme.space.sm} 0`,
  }),
  tag: css({
    marginRight: theme.space.xs,
  }),
};

export default styles;
