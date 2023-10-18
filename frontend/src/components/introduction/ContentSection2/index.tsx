import hexToRgba from "hex-to-rgba";

import { Container, TextSection } from "components/common";
import { useResourceTypes } from "lib/api/resource";
import classes from "./styles";
import { HvTypography } from "@hitachivantara/uikit-react-core";

export const ContentSection2 = ({ data }) => {
  const { section_2 } = data.attributes;
  const { data: resourceTypes } = useResourceTypes();

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.container }}>
        <TextSection
          title={section_2.title}
          description={section_2.description}
        />
        <div className={classes.resources}>
          {resourceTypes?.data.map((resourceType) => {
            const { name, description, color } = resourceType.attributes;
            const rgbColor = hexToRgba(color, 0.2);

            return (
              <div
                key={resourceType.id}
                className={classes.resource}
                style={{ background: rgbColor }}
              >
                <HvTypography variant="label">{name}</HvTypography>
                <HvTypography>{description}</HvTypography>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
