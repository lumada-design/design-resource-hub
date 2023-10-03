import { useNavigate } from "react-router-dom";
import {
  HvTypography,
  HvContainer,
  HvTag,
  HvButton
} from "@hitachivantara/uikit-react-core";
import {
  Backwards
} from "@hitachivantara/uikit-react-icons";

import { API_URL } from "lib/api/constants";
import classes from "./styles";

export const TopSection = ({ data }: Record<string, any>) => {
  const navigate = useNavigate();

  const { name, description, banner_image, tags } = data[0].attributes;
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
            className={classes.button}
          >
            Back
          </HvButton>
          <HvTypography variant="title1">{name}</HvTypography>
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
            {description}
          </HvTypography>
        </span>
      </HvContainer>
    </div>
  );
};
