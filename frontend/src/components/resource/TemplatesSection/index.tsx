import { HvTypography } from "@hitachivantara/uikit-react-core";

import { Container, LinkNav } from "components/common";
import { formatUrl } from "lib/utils";
import classes from "./styles";

export const TemplatesSection = ({ data, page }) => {
  const { templates } = data[0].attributes;
  const { title, description, button_label, button_target } =
    page.attributes.templates_section;

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.content }}>
        <HvTypography variant="title3">{title}</HvTypography>
        <div className={classes.separator} />
        <div className={classes.templates}>
          {templates?.data.map((template) => {
            const { name, image, link } = template.attributes;
            const iconUrl = image.data?.attributes.url;

            return (
              <div key={template.id} className={classes.icons}>
                <img src={formatUrl(iconUrl)} alt="icon" />
                <LinkNav
                  label={name}
                  target={link}
                  variant="label"
                  className={classes.link}
                />
              </div>
            );
          })}
        </div>
        <div className={classes.access}>
          <HvTypography className={classes.description} variant="caption1">
            {description}
          </HvTypography>
          <LinkNav
            label={button_label}
            target={button_target}
            variant="primarySubtle"
            isButton
          />
        </div>
      </Container>
    </div>
  );
};
