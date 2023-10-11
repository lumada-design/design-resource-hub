import {
  HvTypography,
  HvButton,
} from "@hitachivantara/uikit-react-core";

import { Container } from "components/common";
import { formatUrl } from "lib/utils";
import classes from "./styles";

export const TemplatesSection = ({ data }: Record<string, any>) => {
  const { templates } = data[0].attributes;

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.container }}>
        <div style={{ width: "100%" }}>
          <HvTypography variant="title3">Templates</HvTypography>
          <div className={classes.separator} />
          <div className={classes.templates}>
            {templates?.data.map((template: Record<string, any>) => {
              const { name, image, link } = template.attributes;
              const iconUrl = image.data.attributes.url;

              return (
                <div key={template.id} className={classes.container}>
                  <img
                    src={formatUrl(iconUrl)}
                    alt="icon"
                    className={classes.icon}
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
      </Container>
    </div>
  );
};
