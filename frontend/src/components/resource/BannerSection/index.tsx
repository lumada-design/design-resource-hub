import { useNavigate } from "react-router-dom";
import {
  HvTypography,
  HvTag,
  HvButton,
} from "@hitachivantara/uikit-react-core";
import { Backwards } from "@hitachivantara/uikit-react-icons";

import { Container } from "components/common";
import classes from "./styles";
import { formatText, formatUrl } from "lib/utils";

export const BannerSection = ({ resourceData, bannerData }) => {
  const navigate = useNavigate();

  const { title, description, tags } = resourceData.attributes;
  const { image } = bannerData.attributes;
  const imageUrl = image.data.attributes.url;

  const color =
    tags.data.filter((tag) => !!tag.attributes.color)[0]?.attributes.color ||
    "rgba(218, 230, 240, .5)";

  return (
    <div
      className={classes.root}
      style={{
        background: `-webkit-linear-gradient(${color}, ${color}), url(${formatUrl(
          imageUrl,
        )}) no-repeat center center / cover`,
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
          <HvTypography variant="title1">{title}</HvTypography>
          <div>
            {tags.data.map((tag: Record<string, any>) => {
              const { name, color } = tag.attributes;
              return (
                <HvTag
                  className={classes.tag}
                  key={tag.id}
                  label={name}
                  type="categorical"
                  style={{ backgroundColor: color }}
                />
              );
            })}
          </div>
          <HvTypography className={classes.description}>
            {formatText(description)}
          </HvTypography>
        </span>
      </Container>
    </div>
  );
};
