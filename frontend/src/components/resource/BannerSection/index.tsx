import { useNavigate } from "react-router-dom";
import {
  HvTypography,
  HvContainer,
  HvTag,
  HvButton,
} from "@hitachivantara/uikit-react-core";
import { Backwards } from "@hitachivantara/uikit-react-icons";

import { API_URL } from "lib/api/constants";
import classes from "./styles";
import { formatText } from "lib/utils";

export const BannerSection = ({ data }: Record<string, any>) => {
  const navigate = useNavigate();

  const { title, description, banner_image, tags } = data[0].attributes;
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
                  color={color}
                  type="categorical"
                />
              );
            })}
          </div>
          <HvTypography className={classes.description}>
            {formatText(description)}
          </HvTypography>
        </span>
      </HvContainer>
    </div>
  );
};
