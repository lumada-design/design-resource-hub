import {
  HvContainer,
  HvTypography,
  HvButton,
} from "@hitachivantara/uikit-react-core";

import { API_URL } from "lib/api/constants";
import styles from "./styles";

export const TemplatesSection = ({ data }: Record<string, any>) => {
  const { templates } = data[0].attributes;

  return (
    <HvContainer className={styles.root}>
      <div style={{ width: "100%" }}>
        <HvTypography variant="title3">Templates</HvTypography>
        <div className={styles.separator} />
        <div className={styles.templates}>
          {templates?.data.map((template: Record<string, any>) => {
            const { name, image, link } = template.attributes;
            const iconUrl = image.data.attributes.url;

            return (
              <div key={template.id} className={styles.container}>
                <img
                  src={`${API_URL}${iconUrl}`}
                  alt="icon"
                  className={styles.icon}
                />
                <HvButton component="a" href={link} variant="secondaryGhost">
                  <HvTypography key={template.id} variant="caption1">
                    {name}
                  </HvTypography>
                </HvButton>
              </div>
            );
          })}
        </div>
      </div>
    </HvContainer>
  );
};
