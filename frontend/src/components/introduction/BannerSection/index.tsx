import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  HvTypography,
  HvContainer,
  HvButton,
} from "@hitachivantara/uikit-react-core";
import { Backwards } from "@hitachivantara/uikit-react-icons";

import { API_URL } from "lib/api/constants";
import { formatText } from "lib/utils";
import classes from "./styles";

export const BannerSection = ({ data }: Record<string, any>) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const {
    title,
    description,
    banner_image,
    banner_button,
    banner_button_target,
    banner_link,
    banner_link_target,
  } = data.attributes;
  const imageUrl = banner_image.data.attributes.url;

  return (
    <div
      className={classes.root}
      style={{
        background: `url(${API_URL}${imageUrl}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <HvContainer maxWidth="lg">
        <span>
          <HvButton
            aria-label="Back"
            startIcon={<Backwards />}
            variant="secondaryGhost"
            onClick={() => navigate(-1)}
            className={clsx(classes.button, { [classes.buttonUp]: isMdUp })}
          >
            Back
          </HvButton>
          <HvTypography variant="title1">{formatText(title)}</HvTypography>
          <HvTypography className={classes.text}>
            {formatText(description)}
          </HvTypography>
        </span>
        <HvButton
          style={{ marginTop: 20 }}
          variant="primary"
          onClick={() => navigate(banner_button_target)}
        >
          {banner_button}
        </HvButton>
        <HvTypography
          className={classes.link}
          component="a"
          href={banner_link_target}
          target="blank"
          link
        >
          {banner_link}
        </HvTypography>
      </HvContainer>
    </div>
  );
};
