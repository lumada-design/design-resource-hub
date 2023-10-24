import { Container, TextSection, LinkNav } from "components/common";
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
          <LinkNav
            label={section_3.button_label_1}
            target={section_3.button_target_1}
            variant="primarySubtle"
            isButton
          />
        </TextSection>
        <TextSection description={section_3.description_2}>
          <LinkNav
            label={section_3.button_label_2}
            target={section_3.button_target_2}
            isButton
          />
        </TextSection>
      </Container>
    </div>
  );
};
