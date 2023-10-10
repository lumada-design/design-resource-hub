import { useNavigate } from "react-router-dom";
import {
  HvTypography,
  HvButton,
} from "@hitachivantara/uikit-react-core";

import { Container } from "components/common";
import { API_URL } from "lib/api/constants";
import { useHome } from "lib/api/home";
import { formatText } from "lib/utils";
import classes from "./styles";

export const BannerSection = () => {
  const navigate = useNavigate();
  const { data: home, isLoading } = useHome();

  if (isLoading) return null;

  const { banner_title, banner_description, banner_button_label, banner_background_image } = home.data.attributes;
  const imageUrl = banner_background_image.data.attributes.url;

  return (
    <div
      style={{
        background: `url(${API_URL}${imageUrl}) no-repeat`,
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
