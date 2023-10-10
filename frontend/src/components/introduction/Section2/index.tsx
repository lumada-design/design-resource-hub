import { Container, TextSection } from "components/common";
import classes from "./styles";

export const Section2 = ({ data }: Record<string, any>) => {
  const { section2_title, section2_description } = data.attributes;

  return (
    <div className={classes.root}>
      <Container classes={{ root: classes.container }}>
        <TextSection
          style={{ width: 650 }}
          title={section2_title}
          description={section2_description}
        />
      </Container>
    </div>
  );
};
