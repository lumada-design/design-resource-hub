import { HvButton } from "@hitachivantara/uikit-react-core";

import { Container, TextSection } from "components/common";
import classes from "./styles";

export const ContentSection3 = ({ data }) => {
  const { section_3 } = data.attributes;

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.container }}>
        <TextSection
          title={section_3.title_1}
          description={section_3.description_1}
        >
          <HvButton variant="primarySubtle">
            {section_3.button_label_1}
          </HvButton>
        </TextSection>
        <TextSection description={section_3.description_2}>
          <HvButton>{section_3.button_label_2}</HvButton>
        </TextSection>
      </Container>
    </div>
  );
};
