import { Container, TextSection } from "components/common";
import classes from "./styles";

export const ContentSection2 = ({ data }) => {
  const { section_2 } = data[0].attributes;

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.container }}>
        <TextSection
          title={section_2.title_1}
          description={section_2.description_1}
        />
        <TextSection
          title={section_2.title_2}
          description={section_2.description_2}
        />
      </Container>
    </div>
  );
};
