import {
  HvTypography,
  HvContainer,
  HvTag,
} from "@hitachivantara/uikit-react-core";

import { API_URL } from "lib/api/constants";
import styles from "./styles";

export const TopSection = ({ data }: Record<string, any>) => {
  const { name, description, banner_image, tags } = data[0].attributes;
  const imageUrl = banner_image.data.attributes.url;

  return (
    <div className={styles.root}>
      <HvContainer maxWidth="lg">
        <img
          src={`${API_URL}${imageUrl}`}
          alt="banner"
          className={styles.image}
        />
        <span>
          <HvTypography variant="title1">{name}</HvTypography>
          <div>
            {tags.data.map((tag: Record<string, any>) => {
              const { name, color } = tag.attributes;
              return (
                <HvTag
                  className={styles.tag}
                  key={tag.id}
                  label={name}
                  color={color}
                  type="categorical"
                />
              );
            })}
          </div>
          <HvTypography className={styles.description}>
            {description}
          </HvTypography>
        </span>
      </HvContainer>
    </div>
  );
};
