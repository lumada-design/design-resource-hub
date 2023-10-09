import { useNavigate } from "react-router-dom";
import {
  HvTypography,
  HvContainer,
  HvButton,
} from "@hitachivantara/uikit-react-core";

import { API_URL } from "lib/api/constants";
import { formatText } from "lib/utils";
import classes from "./styles";

interface Data {
  id: string;
  attributes: Record<string, any>;
}

interface BannerProps {
  data: Data;
}

export const BannerSection = ({ data }: BannerProps) => {
  const navigate = useNavigate();

  const { title, description, button, banner_image } = data.attributes;
  const imageUrl = banner_image.data.attributes.url;

  return (
    <div
      style={{
        background: `url(${API_URL}${imageUrl}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <HvContainer maxWidth="lg" className={classes.container}>
        <div className={classes.textContainer}>
          <HvTypography
            style={{ whiteSpace: "pre-line" }}
            className={classes.text}
            variant="title1"
          >
            {formatText(title)}
          </HvTypography>
          <HvTypography className={classes.text}>
            {formatText(description)}
          </HvTypography>
        </div>
        <HvButton
          style={{ marginTop: 20 }}
          variant="primary"
          onClick={() => navigate("/intro")}
        >
          {button}
        </HvButton>
      </HvContainer>
    </div>
  );
};
