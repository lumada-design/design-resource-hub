import { css } from "@emotion/css";
import { theme } from "@hitachivantara/uikit-styles";

const styles = {
  root: css({
    display: "flex",
    minHeight: 400,
    padding: theme.space.sm,
    background: theme.colors.base_light,
  }),
  container: css({
    alignItems: "center",
    gap: theme.space.lg,
    "& > div": {
      width: "50%",
    },
    "@media screen and (max-width: 900px)": {
      gap: theme.space.md,
      padding: `${theme.space.sm}`,
      flexDirection: "column",
      "& > div": {
        width: "100%",
      },
    },
  }),
  imageContainer: css({
    padding: theme.space.xs,
    borderRadius: theme.radii.round,
    boxShadow: theme.colors.shadow,
  }),
  image: css({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }),
};

export default styles;
