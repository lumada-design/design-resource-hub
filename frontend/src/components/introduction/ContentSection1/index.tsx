import hexToRgba from "hex-to-rgba";

import { Container, TextSection } from "components/common";
import { useResourceTypes, useResourceTagsCategory } from "lib/api/resource";
import classes from "./styles";
import { HvTypography } from "@hitachivantara/uikit-react-core";

export const ContentSection1 = ({ data }) => {
  const { section_1 } = data.attributes;
  const { data: resourceTagsCategory } =
    useResourceTagsCategory("Design Goals");

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.container }}>
        <TextSection
          title={section_1.title}
          description={section_1.description}
        />
        <div className={classes.resources}>
          {resourceTagsCategory?.data.map((resourceCategory) => {
            const { name, description } = resourceCategory.attributes;

            return (
              <div key={resourceCategory.id} className={classes.resource}>
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
