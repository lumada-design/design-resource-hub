import { useNavigate } from "react-router-dom";
import { HvTypography, HvButton } from "@hitachivantara/uikit-react-core";
import { Backwards } from "@hitachivantara/uikit-react-icons";

import { Container, TagsList } from "components/common";
import classes from "./styles";
import { formatText, formatUrl, hasHistory } from "lib/utils";

export const BannerSection = ({ data }) => {
  const navigate = useNavigate();

  const { name, description, organization, resource_type } = data[0].attributes;

  if (!resource_type.data) return null;

  const { image } = resource_type.data.attributes;
  const { name: orgName } = organization.data.attributes;
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
          {hasHistory() && (
            <HvButton
              aria-label="Back"
              startIcon={<Backwards />}
              variant="secondaryGhost"
              onClick={() => navigate(-1)}
            >
              Back
            </HvButton>
          )}
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
