import hexToRgba from "hex-to-rgba";
import { useNavigate } from "react-router-dom";
import { HvTypography, HvButton } from "@hitachivantara/uikit-react-core";
import { Backwards } from "@hitachivantara/uikit-react-icons";

import { Container, TagsList } from "components/common";
import classes from "./styles";
import { formatText, formatUrl } from "lib/utils";

export const BannerSection = ({ data }) => {
  const navigate = useNavigate();

  const { name, description, organization, resource_type } = data[0].attributes;
  const { image, color } = resource_type.data.attributes;
  const { name: orgName } = organization.data.attributes;
  const imageUrl = image.data?.attributes.url;

  const tagColor = hexToRgba(color, 0.2);

  return (
    <div
      className={classes.root}
      style={{
        background: `-webkit-linear-gradient(${tagColor}, ${tagColor}), url(${formatUrl(
          imageUrl,
        )}) no-repeat bottom / cover`,
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
            {name}
          </HvTypography>
          <TagsList data={data[0]} />
          <HvTypography className={classes.text}>
            {formatText(description)}
          </HvTypography>
          <HvTypography className={classes.text}>
            {formatText(orgName)}
          </HvTypography>
        </span>
      </Container>
    </div>
  );
};
