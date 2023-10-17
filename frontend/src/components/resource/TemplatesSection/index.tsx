import { HvTypography, HvButton } from "@hitachivantara/uikit-react-core";

import { Container } from "components/common";
import { formatUrl } from "lib/utils";
import classes from "./styles";

export const TemplatesSection = ({ data, page }) => {
  const { templates } = data[0].attributes;
  const { download_title, download_description, download_button_label } =
    page.attributes;

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.content }}>
        <HvTypography variant="title3">{download_title}</HvTypography>
        <div className={classes.separator} />
        <div className={classes.templates}>
          {templates?.data.map((template) => {
            const { name, image, link } = template.attributes;
            const iconUrl = image.data?.attributes.url;

            return (
              <div key={template.id} className={classes.icons}>
                <img src={formatUrl(iconUrl)} alt="icon" />
                <HvButton component="a" href={link} variant="secondaryGhost">
                  <HvTypography key={template.id} variant="label">
                    {name}
                  </HvTypography>
                </HvButton>
              </div>
            );
          })}
        </div>
        <div className={classes.access}>
          <HvTypography className={classes.description} variant="caption1">
            {download_description}
          </HvTypography>
          <HvButton variant="primarySubtle">{download_button_label}</HvButton>
        </div>
      </Container>
    </div>
  );
};
