import { useNavigate } from "react-router-dom";
import {
  HvTypography,
  HvButton,
} from "@hitachivantara/uikit-react-core";

import { Container } from "components/common";
import { formatText, formatUrl } from "lib/utils";
import classes from "./styles";

export const BannerSection = ({ data }) => {
  const navigate = useNavigate();

  const { banner_title, banner_description, banner_button_label, banner_background_image } = data.attributes;
  const imageUrl = banner_background_image.data.attributes.url;

  return (
    <div
      className={classes.root}
      style={{
        background: `url(${formatUrl(imageUrl)}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <Container classes={{ root: classes.container }}>
        <div className={classes.textContainer}>
          <HvTypography
            style={{ whiteSpace: "pre-line" }}
            className={classes.text}
            variant="title1"
          >
            {formatText(banner_title)}
          </HvTypography>
          <HvTypography className={classes.text}>
            {formatText(banner_description)}
          </HvTypography>
        </div>
        <HvButton
          style={{ marginTop: 20 }}
          variant="primary"
          onClick={() => navigate("/intro")}
        >
          {banner_button_label}
        </HvButton>
      </Container>
    </div>
  );
};
