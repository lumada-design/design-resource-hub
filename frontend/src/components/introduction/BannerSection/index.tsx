import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  HvTypography,
  HvButton,
} from "@hitachivantara/uikit-react-core";
import { Backwards } from "@hitachivantara/uikit-react-icons";

import { Container } from "components/common";
import { formatText } from "lib/utils";
import classes from "./styles";

export const BannerSection = ({ data }: Record<string, any>) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const {
    banner_title,
    banner_image,
  } = data.attributes;
  const imageUrl = banner_image.data.attributes.url;

  return (
    <div
      className={classes.root}
      style={{
        background: `url(${imageUrl}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <Container>
        <HvButton
          aria-label="Back"
          startIcon={<Backwards />}
          variant="secondaryGhost"
          onClick={() => navigate(-1)}
          className={clsx(classes.button, { [classes.buttonUp]: isMdUp })}
        >
          Back
        </HvButton>
        <HvTypography className={classes.title} variant="title1">{formatText(banner_title)}</HvTypography>
      </Container>
    </div>
  );
};
