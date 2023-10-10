import { Container, TextSection } from "components/common";
import classes from "./styles";

export const Section1 = ({ data }: Record<string, any>) => {
  const { section1_title, section1_description } = data.attributes;

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.container }}>
        <TextSection
          style={{ width: 650 }}
          title={section1_title}
          description={section1_description}
        />
      </Container>
    </div>
  );
};
