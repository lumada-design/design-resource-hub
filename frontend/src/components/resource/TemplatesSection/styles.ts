import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    minHeight: 250,
    background: theme.colors.base_light,
    padding: `${theme.spacing(4)} 0`,
  }),
  content: css({
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  }),
  separator: css({
    width: 55,
    borderTop: `2px solid ${theme.colors.brand}`,
    margin: `${theme.space.xs} auto ${theme.spacing(4)} auto`,
  }),
  templates: css({
    display: "flex",
    gap: theme.space.md,
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
    },
  }),
  icons: css({
    display: "flex",
    "& > img": {
      width: 40,
    },
  }),
  access: css({
    marginTop: theme.spacing(4),
    "& :first-child": {
      marginBottom: theme.spacing(2),
    },
  }),
  description: css({
    maxWidth: 600,
  }),
  link: css({
    margin: `${theme.space.xs} 0 0 ${theme.space.sm}`,
  }),
};

export default styles;
