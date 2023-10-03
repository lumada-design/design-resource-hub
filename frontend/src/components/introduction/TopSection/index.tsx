import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  HvTypography,
  HvContainer,
  HvButton
} from "@hitachivantara/uikit-react-core";
import {
  Backwards
} from "@hitachivantara/uikit-react-icons";

import { API_URL } from "lib/api/constants";
import classes from "./styles";

export const TopSection = ({ data }: Record<string, any>) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const { name, description, banner_image } = data.attributes;
  const imageUrl = banner_image.data.attributes.url;

  return (
    <div className={classes.root}>
      <HvContainer maxWidth="lg">
        <img
          src={`${API_URL}${imageUrl}`}
          alt="banner"
          className={classes.image}
        />
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
          <HvTypography variant="title1">{name}</HvTypography>
          <HvTypography className={classes.text}>
            {description}
          </HvTypography>
        </span>
        <HvButton style={{ marginTop: 20 }} variant="primary">
          Submit a Resource
        </HvButton>
        <HvTypography className={classes.link}
          component="a"
          href="https://lumada-design.github.io/uikit/master"
          target="blank"
          link
        >
          Guidelines and Acceptance Criteria
        </HvTypography>
      </HvContainer>
    </div >
  );
};
