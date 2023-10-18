import { useNavigate } from "react-router-dom";
import { HvTypography, HvButton } from "@hitachivantara/uikit-react-core";
import { Backwards } from "@hitachivantara/uikit-react-icons";

import { Container } from "components/common";
import classes from "./styles";
import { formatUrl } from "lib/utils";

export const BannerSection = ({ data }) => {
  const navigate = useNavigate();

  const { title, image } = data.attributes;
  const imageUrl = image.data?.attributes.url;

  return (
    <div
      className={classes.root}
      style={{
        background: `url(${formatUrl(imageUrl)}) no-repeat bottom / cover`,
      }}
    >
      <Container>
        <span>
          <HvButton
            aria-label="Back"
            startIcon={<Backwards />}
            variant="secondaryGhost"
            onClick={() => navigate(-1)}
            className={classes.button}
          >
            Back
          </HvButton>
          <HvTypography className={classes.text} variant="title1">
            {title}
          </HvTypography>
        </span>
      </Container>
    </div>
  );
};
